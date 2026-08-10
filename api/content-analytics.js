/* global process */
import { createHash, timingSafeEqual } from 'node:crypto';
import { articleAnalyticsConfig } from '../src/articleAnalyticsConfig.js';

const defaultProjectId = 'prj_t6WHgoc9nUphVSzbWITR0QEw7zI9';
const defaultTeamSlug = 'morbiaus-projects';
const vercelApiBase = 'https://api.vercel.com/v1/query/web-analytics';

const hashToken = (value) => createHash('sha256').update(value).digest();

const tokensMatch = (received, expected) => {
  if (!received || !expected) return false;

  const receivedHash = hashToken(received);
  const expectedHash = hashToken(expected);

  return timingSafeEqual(receivedHash, expectedHash);
};

const getBearerToken = (req) => {
  const authHeader = req.headers.authorization || '';
  if (authHeader.startsWith('Bearer ')) return authHeader.slice(7);

  return req.headers['x-dashboard-token'];
};

const sendJson = (res, status, body) => {
  res.status(status).setHeader('content-type', 'application/json');
  res.setHeader('cache-control', 'private, no-store');
  res.end(JSON.stringify(body));
};

const buildQueryUrl = (path, params) => {
  const url = new URL(`${vercelApiBase}/${path}`);
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      url.searchParams.set(key, value);
    }
  });
  return url;
};

const queryVercelAnalytics = async (path, params, token) => {
  const url = buildQueryUrl(path, params);
  const response = await fetch(url, {
    headers: {
      authorization: `Bearer ${token}`
    }
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const detail = data.error?.message || data.message || `Vercel Analytics API returned ${response.status}`;
    throw new Error(detail);
  }

  return data;
};

const eventCount = async ({ token, projectId, teamSlug, since, eventName, slug }) => {
  const response = await queryVercelAnalytics('events/count', {
    projectId,
    slug: teamSlug,
    since,
    filter: `eventName eq '${eventName}' and eventData/article_slug eq '${slug}'`
  }, token);

  return response.data?.count || 0;
};

const buildArticleSummary = async ({ article, token, projectId, teamSlug, since }) => {
  const requestPath = `/${article.slug}`;
  const pageviews = await queryVercelAnalytics('visits/count', {
    projectId,
    slug: teamSlug,
    since,
    filter: `requestPath eq '${requestPath}'`
  }, token);

  const [
    linkedInVisitors,
    read75,
    completed,
    contactClicks,
    linkedInClicks
  ] = await Promise.all([
    queryVercelAnalytics('visits/count', {
      projectId,
      slug: teamSlug,
      since,
      filter: `requestPath eq '${requestPath}' and utmCampaign eq '${article.campaign}'`
    }, token).catch(() => ({ data: { pageviews: null, visitors: null }, unavailable: true })),
    eventCount({ token, projectId, teamSlug, since, eventName: 'article_read_75_percent', slug: article.slug }),
    eventCount({ token, projectId, teamSlug, since, eventName: 'article_completed', slug: article.slug }),
    eventCount({ token, projectId, teamSlug, since, eventName: 'article_contact_intent', slug: article.slug }),
    eventCount({ token, projectId, teamSlug, since, eventName: 'linkedin_profile_click', slug: article.slug })
  ]);

  const views = pageviews.data?.pageviews || 0;

  return {
    ...article,
    pageviews: views,
    visitors: pageviews.data?.visitors || 0,
    linkedInCampaignVisitors: linkedInVisitors.data?.visitors,
    linkedInCampaignVisitorsUnavailable: Boolean(linkedInVisitors.unavailable),
    averageReadDepth: views > 0 ? Math.round((read75 / views) * 75) : 0,
    completionRate: views > 0 ? Number(((completed / views) * 100).toFixed(1)) : 0,
    contactClicks,
    linkedInProfileClicks: linkedInClicks,
    returningVisitors: null
  };
};

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    sendJson(res, 405, { error: 'Method not allowed' });
    return;
  }

  const dashboardToken = process.env.ANALYTICS_DASHBOARD_TOKEN;
  if (!dashboardToken) {
    sendJson(res, 503, {
      error: 'ANALYTICS_DASHBOARD_TOKEN is not configured, so the dashboard API is disabled.'
    });
    return;
  }

  if (!tokensMatch(getBearerToken(req), dashboardToken)) {
    sendJson(res, 401, { error: 'Unauthorized' });
    return;
  }

  const vercelToken = process.env.VERCEL_ANALYTICS_TOKEN;
  if (!vercelToken) {
    sendJson(res, 503, {
      error: 'VERCEL_ANALYTICS_TOKEN is not configured. Create a scoped Vercel access token and store it as a production environment variable before live metrics can be displayed.'
    });
    return;
  }

  const since = req.query.since || '30d';
  const projectId = process.env.VERCEL_ANALYTICS_PROJECT_ID || defaultProjectId;
  const teamSlug = process.env.VERCEL_ANALYTICS_TEAM_SLUG || defaultTeamSlug;

  try {
    const articles = await Promise.all(
      articleAnalyticsConfig.map((article) => buildArticleSummary({
        article,
        token: vercelToken,
        projectId,
        teamSlug,
        since
      }))
    );

    const totals = articles.reduce((summary, article) => ({
      articleViews: summary.articleViews + article.pageviews,
      linkedInCampaignVisitors: summary.linkedInCampaignVisitors + (article.linkedInCampaignVisitors || 0),
      contactClicks: summary.contactClicks + article.contactClicks,
      linkedInProfileClicks: summary.linkedInProfileClicks + article.linkedInProfileClicks,
      completions: summary.completions + Math.round((article.completionRate / 100) * article.pageviews)
    }), {
      articleViews: 0,
      linkedInCampaignVisitors: 0,
      contactClicks: 0,
      linkedInProfileClicks: 0,
      completions: 0
    });

    sendJson(res, 200, {
      generatedAt: new Date().toISOString(),
      since,
      returningVisitorSupport: {
        status: 'not_supported_as_cross_day_returning_visitors',
        note: 'Vercel Web Analytics identifies visitors with a daily hash and does not support persistent cross-day returning visitor tracking without adding cookies or fingerprinting.'
      },
      totals: {
        ...totals,
        averageReadDepth: articles.length
          ? Math.round(articles.reduce((sum, article) => sum + article.averageReadDepth, 0) / articles.length)
          : 0,
        completionRate: totals.articleViews > 0
          ? Number(((totals.completions / totals.articleViews) * 100).toFixed(1))
          : 0,
        returningVisitors: null
      },
      topPerformingArticles: [...articles].sort((a, b) => b.pageviews - a.pageviews),
      campaignComparison: articles.map((article) => ({
        title: article.title,
        slug: article.slug,
        campaign: article.campaign,
        visitors: article.linkedInCampaignVisitors,
        unavailable: article.linkedInCampaignVisitorsUnavailable
      })),
      articles
    });
  } catch (error) {
    sendJson(res, 502, {
      error: error.message
    });
  }
}
