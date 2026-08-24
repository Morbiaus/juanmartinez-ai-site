import { useEffect, useState } from 'react';
import { track } from '@vercel/analytics';
import { Analytics } from '@vercel/analytics/react';
import { articleAnalyticsBySlug, contentAnalyticsDashboardPath } from './articleAnalyticsConfig';

const getSlugFromArticle = (article) => (
  article?.slug || article?.articleAnchorOrUrl?.replace(/^#|\//, '') || ''
);

const trackArticleEventOnce = (eventName, metadata, extraProperties = {}) => {
  if (typeof window === 'undefined') return;

  const properties = {
    article_slug: metadata.slug,
    article_title: metadata.title,
    published_date: metadata.published_date,
    category: metadata.category,
    campaign: metadata.campaign,
    author: metadata.author,
    estimated_read_time: metadata.estimated_read_time,
    ...extraProperties
  };

  const key = `article:${eventName}:${metadata.slug}:${metadata.campaign}`;

  try {
    if (window.sessionStorage.getItem(key)) return;
    window.sessionStorage.setItem(key, 'true');
  } catch {
    // Analytics should still work if browser storage is unavailable.
  }

  track(eventName, properties);
};

const getCampaign = () => {
  if (typeof window === 'undefined') return null;

  const campaign = new URLSearchParams(window.location.search).get('utm_campaign');
  return campaign;
};

const estimateReadTime = (article) => {
  const textBlocks = [
    ...(article.body || []),
    ...(article.closingBody || [])
  ].flat();
  const wordCount = textBlocks.join(' ').trim().split(/\s+/).filter(Boolean).length;

  return `${Math.max(1, Math.ceil(wordCount / 225))} min`;
};

const AI_BUILD_LAB_URL = 'https://ai-build-lab.morbiaus.chatgpt.site';

const martinezMethodMetadata = {
  title: 'The M.A.R.T.I.N.E.Z. Method | Practical AI Governance Framework | Juan Martinez',
  description: 'The M.A.R.T.I.N.E.Z. Method is a practical framework created by Juan A. Martinez Diaz for using AI with judgment, structure, validation, human oversight, and accountability.',
  canonical: 'https://juanmartinez.ai/martinez-method'
};

function ContentAnalyticsDashboard() {
  const [token, setToken] = useState('');
  const [status, setStatus] = useState('Enter the admin token to load metrics.');
  const [analytics, setAnalytics] = useState(null);

  const loadAnalytics = async (event) => {
    event.preventDefault();
    setStatus('Loading metrics...');
    setAnalytics(null);

    try {
      const response = await fetch('/api/content-analytics?since=30d', {
        headers: {
          authorization: `Bearer ${token}`
        }
      });
      const data = await response.json();

      if (!response.ok) {
        setStatus(data.error || `Dashboard API returned ${response.status}.`);
        return;
      }

      setAnalytics(data);
      setStatus(`Metrics loaded. Generated ${new Date(data.generatedAt).toLocaleString()}.`);
    } catch (error) {
      setStatus(error.message);
    }
  };

  const totals = analytics?.totals;

  return (
    <div className="min-h-screen text-[var(--oc-text)]">
      <main className="mx-auto max-w-6xl px-6 py-12">
        <section className="rounded-[2rem] border border-[color:var(--oc-line)] bg-[rgba(10,18,37,0.78)] p-8 shadow-[0_14px_36px_rgba(0,0,0,0.26),0_0_22px_rgba(99,170,255,0.06)] backdrop-blur-xl md:p-12">
          <p className="text-sm uppercase tracking-[0.2em] text-stone-400">Internal</p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">Content Analytics</h1>
          <form onSubmit={loadAnalytics} className="mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              type="password"
              value={token}
              onChange={(event) => setToken(event.target.value)}
              placeholder="Admin token"
              className="min-h-12 flex-1 rounded-2xl border border-stone-700 bg-stone-950 px-4 text-sm text-white outline-none transition focus:border-[color:var(--oc-cyan)]"
            />
            <button type="submit" className="min-h-12 rounded-2xl border border-[color:var(--oc-line-strong)] bg-[linear-gradient(90deg,var(--oc-cyan),var(--oc-blue))] px-5 text-sm font-medium text-[#06101f]">
              Load
            </button>
          </form>
          <p className="mt-4 text-sm leading-7 text-stone-400">{status}</p>

          {totals && (
            <>
              <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {[
                  ['Total Article Views', totals.articleViews],
                  ['LinkedIn Campaign Visitors', totals.linkedInCampaignVisitors],
                  ['Average Read Depth', `${totals.averageReadDepth}%`],
                  ['Article Completion Rate', `${totals.completionRate}%`],
                  ['Contact Clicks', totals.contactClicks],
                  ['LinkedIn Profile Clicks', totals.linkedInProfileClicks],
                  ['Returning Visitors', totals.returningVisitors ?? 'Not supported'],
                  ['Reporting Window', analytics.since]
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-[color:var(--oc-line)] bg-[rgba(8,16,31,0.72)] p-5">
                    <div className="text-sm text-stone-400">{label}</div>
                    <div className="mt-2 text-2xl font-semibold text-white">{value}</div>
                  </div>
                ))}
              </div>

              <section className="mt-10">
                <h2 className="text-2xl font-semibold">Top Performing Articles</h2>
                <div className="mt-4 overflow-x-auto">
                  <table className="w-full min-w-[760px] border-collapse text-left text-sm">
                    <thead className="text-stone-400">
                      <tr>
                        {['Article', 'Views', 'Visitors', 'Completion', 'Contact', 'LinkedIn'].map((heading) => (
                          <th key={heading} className="border-b border-[color:var(--oc-line)] px-3 py-3 font-medium">{heading}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {analytics.topPerformingArticles.map((article) => (
                        <tr key={article.slug} className="border-b border-[color:var(--oc-line)] text-stone-200">
                          <td className="px-3 py-4">
                            <div className="font-medium text-white">{article.title}</div>
                            <div className="mt-1 text-xs text-stone-500">{article.category} / {article.campaign}</div>
                          </td>
                          <td className="px-3 py-4">{article.pageviews}</td>
                          <td className="px-3 py-4">{article.visitors}</td>
                          <td className="px-3 py-4">{article.completionRate}%</td>
                          <td className="px-3 py-4">{article.contactClicks}</td>
                          <td className="px-3 py-4">{article.linkedInProfileClicks}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="mt-10">
                <h2 className="text-2xl font-semibold">Campaign Comparison</h2>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  {analytics.campaignComparison.map((campaign) => (
                    <div key={campaign.slug} className="rounded-2xl border border-[color:var(--oc-line)] bg-[rgba(8,16,31,0.72)] p-5">
                      <div className="text-sm text-stone-400">{campaign.campaign}</div>
                      <div className="mt-2 font-medium text-white">{campaign.title}</div>
                      <div className="mt-3 text-sm text-stone-300">
                        Visitors: {campaign.unavailable ? 'Requires Web Analytics Plus/Enterprise UTM access' : campaign.visitors}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}
        </section>
      </main>
      <Analytics />
    </div>
  );
}

function MartinezMethodPage() {
  const methodItems = [
    {
      letter: 'M',
      title: 'Map the Problem',
      text: 'Define the actual business problem, desired outcome, stakeholders, constraints, and risks before introducing AI.'
    },
    {
      letter: 'A',
      title: 'Ask Better Questions',
      text: 'Structure prompts and inquiries around the decision or outcome required rather than simply asking AI to produce an answer.'
    },
    {
      letter: 'R',
      title: 'Refine the Context',
      text: 'Provide the policies, data, assumptions, boundaries, examples, and business context necessary for the AI to perform useful work.'
    },
    {
      letter: 'T',
      title: 'Transform the Output',
      text: 'Turn raw AI-generated material into something operationally useful—a decision brief, workflow, analysis, recommendation, control assessment, or other business artifact.'
    },
    {
      letter: 'I',
      title: 'Inspect the Result',
      text: 'Evaluate accuracy, evidence, assumptions, bias, unsupported claims, omissions, and whether the output actually addresses the original problem.'
    },
    {
      letter: 'N',
      title: 'Narrow the Workflow',
      text: 'Determine which portions of the work are appropriate for AI, which require automation controls, and which must remain subject to human judgment.'
    },
    {
      letter: 'E',
      title: 'Explain the Value',
      text: 'Be able to articulate what AI improved, what risk it introduced, what evidence supports the result, and why the outcome should be trusted.'
    },
    {
      letter: 'Z',
      title: 'Zero-Trust the Output',
      text: 'Never treat AI-generated output as correct merely because it appears complete or authoritative. Validate material facts, evidence, sources, and consequential decisions before relying on them.'
    }
  ];

  return (
    <div className="min-h-screen text-[var(--oc-text)]">
      <header className="sticky top-0 z-50 border-b border-[color:var(--oc-line)] bg-[rgba(10,18,37,0.82)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-5">
          <a href="/" className="min-w-0">
            <div className="text-lg font-semibold tracking-wide text-[var(--oc-text)] md:text-xl">Juan A. Martinez Diaz, MBA</div>
            <div className="text-sm text-[var(--oc-muted)]">AI governance, technology risk, operational resilience, and executive leadership</div>
          </a>
          <nav className="hidden gap-6 text-sm text-[var(--oc-muted)] md:flex">
            <a href="/" className="hover:text-[var(--oc-cyan)]">Home</a>
            <a href="#method" className="hover:text-[var(--oc-cyan)]">Method</a>
            <a href="#governance" className="hover:text-[var(--oc-cyan)]">Governance</a>
            <a href="#build-lab" className="hover:text-[var(--oc-cyan)]">AI Build Lab</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--oc-cyan)]">Practical Artificial Intelligence Governance Framework</p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-6xl">The M.A.R.T.I.N.E.Z. Method</h1>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-[var(--oc-text)] md:text-2xl">
              A Practical Framework for Using AI With Judgment, Structure, and Accountability
            </p>
            <div className="mt-10 max-w-3xl space-y-5 text-base leading-8 text-stone-300 md:text-lg">
              <p>
                Artificial intelligence can accelerate work, but acceleration without judgment can amplify poor assumptions, weak evidence, and bad decisions.
              </p>
              <p>
                The M.A.R.T.I.N.E.Z. Method is a practical framework for working with AI deliberately. It provides a repeatable way to frame problems, improve context, evaluate outputs, refine workflows, and maintain human accountability throughout the process.
              </p>
            </div>
          </div>

          <div className="mt-12 max-w-3xl border-l-2 border-[color:var(--oc-line-strong)] pl-6">
            <p className="text-2xl font-medium leading-9 text-white">"The name is personal. The purpose is practical."</p>
          </div>
        </section>

        <section id="method" className="border-y border-[color:var(--oc-line)] bg-[rgba(10,18,37,0.42)] backdrop-blur-sm">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.2em] text-stone-400">Method</p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Eight steps for disciplined AI work.</h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {methodItems.map((item) => (
                <article key={item.letter} className="rounded-[1.5rem] border border-[color:var(--oc-line)] bg-[rgba(8,16,31,0.78)] p-6 shadow-[0_12px_30px_rgba(0,0,0,0.22),0_0_18px_rgba(67,231,255,0.06)] backdrop-blur-xl">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[color:var(--oc-line-strong)] bg-[rgba(67,231,255,0.10)] text-2xl font-semibold text-[var(--oc-cyan)]">
                      {item.letter}
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white">{item.title}</h3>
                      <p className="mt-3 leading-7 text-stone-300">{item.text}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="governance" className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-stone-400">From AI Use to AI Governance</p>
              <h2 className="mt-3 text-3xl font-semibold">A bridge from individual productivity to accountable systems.</h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-stone-300 md:text-lg">
              <p>
                As AI progresses from individual productivity tools to automated and agentic workflows, the same principles become increasingly important.
              </p>
              <p>
                The M.A.R.T.I.N.E.Z. Method provides a practical bridge between using AI and governing AI: establishing context, maintaining evidence, defining control boundaries, preserving human oversight, and validating outcomes before consequential action occurs.
              </p>
            </div>
          </div>
        </section>

        <section id="build-lab" className="border-y border-[color:var(--oc-line)] bg-[rgba(8,16,31,0.35)] backdrop-blur-sm">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.2em] text-stone-400">Learn by Doing</p>
              <h2 className="mt-3 text-3xl font-semibold">The AI Build Lab applies the method in practical missions.</h2>
              <p className="mt-5 text-base leading-8 text-stone-300 md:text-lg">
                The AI Build Lab applies these principles through practical, tool-neutral missions designed to help professionals build judgment around AI—not simply learn prompting techniques.
              </p>
              <a
                href={AI_BUILD_LAB_URL}
                className="mt-8 inline-flex rounded-2xl border border-[color:var(--oc-line-strong)] bg-[linear-gradient(90deg,var(--oc-cyan),var(--oc-blue))] px-5 py-3 text-sm font-medium text-[#06101f] shadow-[0_0_24px_rgba(67,231,255,0.18)] transition hover:-translate-y-0.5"
              >
                Enter the AI Build Lab
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-[1.5rem] border border-[color:var(--oc-line)] bg-[rgba(10,18,37,0.78)] p-8 shadow-[0_14px_36px_rgba(0,0,0,0.26),0_0_22px_rgba(99,170,255,0.06)] backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-400">Author</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Juan A. Martinez Diaz, MBA</h2>
            <p className="mt-3 leading-8 text-stone-300">Creator of the M.A.R.T.I.N.E.Z. Method</p>
            <p className="mt-2 leading-8 text-stone-300">AI Governance • Enterprise Risk • Technology Risk • Agentic AI</p>
          </div>
        </section>
      </main>
      <Analytics />
    </div>
  );
}

function ExecutiveHomePage() {
  const impactItems = [
    {
      metric: '160-person',
      title: 'Technology organization led',
      text: 'Enterprise operations, cybersecurity oversight, and operational readiness across the United States and Caribbean.'
    },
    {
      metric: 'Second line',
      title: 'Independent risk oversight',
      text: 'Technology and information-security risk, operational resilience, controls, RCSA, issue remediation, and executive reporting.'
    },
    {
      metric: 'Enterprise-scale',
      title: 'Regulated-industry experience',
      text: 'Practical leadership in environments where evidence quality, control design, and accountable decisions must withstand scrutiny.'
    },
    {
      metric: 'Cross-functional',
      title: 'Leadership alignment',
      text: 'Work across cybersecurity, legal, privacy, compliance, technology, operations, and business leadership.'
    }
  ];

  const selectedWork = [
    {
      eyebrow: 'Governed workflow simulation',
      title: 'Project Sentinel',
      text: 'A governance and workflow simulation environment for comparing human and agentic operating models before an organization automates or redesigns the work. Sentinel makes control boundaries, approvals, evidence lineage, escalation paths, monitoring, recovery, and accountable ownership visible.',
      linkText: 'Discuss Project Sentinel',
      href: 'mailto:sgmmartinez@gmail.com?subject=Project%20Sentinel%20Discussion'
    },
    {
      eyebrow: 'Practical learning',
      title: 'AI Build Lab',
      text: 'A free, tool-neutral learning environment with guided missions that help professionals apply artificial intelligence to real work while challenging assumptions, testing evidence, and keeping ownership with people.',
      linkText: 'Enter the AI Build Lab',
      href: AI_BUILD_LAB_URL
    },
    {
      eyebrow: 'Decision discipline',
      title: 'The M.A.R.T.I.N.E.Z. Method',
      text: 'A practical framework for using artificial intelligence with judgment, structure, verification, and accountability—from mapping the problem through zero-trusting the output.',
      linkText: 'Explore the Method',
      href: '/martinez-method'
    }
  ];

  const insights = [
    {
      date: 'July 20, 2026',
      title: 'Stop Starting with AI. Start with the Workflow.',
      text: 'Why organizations should understand the decisions, evidence, approvals, and exceptions inside a workflow before choosing an AI solution.',
      href: '/stop-starting-with-ai-start-with-the-workflow'
    },
    {
      date: 'June 22, 2026',
      title: 'The Artificial Intelligence Fluency Premium Is Becoming the Real Jobs Story',
      text: 'The emerging advantage for professionals who combine AI fluency with domain context, verification, and sound judgment.',
      href: '/ai-fluency-premium'
    },
    {
      date: 'May 29, 2026',
      title: 'AI Is Not an Answer Machine. It Is a Test of Human Judgment.',
      text: 'A research-backed argument for using AI as a disciplined partner in thought rather than a substitute for human agency.',
      href: '/ai-human-judgment-education'
    }
  ];

  const operatingPrinciples = [
    {
      title: 'Start with the workflow',
      text: 'Before selecting a model or agent, map the work: the purpose, actors, decisions, systems, policies, data, approvals, evidence, and exceptions. That reveals whether AI is addressing a real operating problem or simply being placed on top of a process the organization does not yet understand.'
    },
    {
      title: 'Make authority explicit',
      text: 'Retrieving, summarizing, drafting, routing, recommending, deciding, and acting are different levels of authority. A governed workflow names which actions are permitted, which remain prohibited, who approves consequential decisions, and what conditions require the system to stop or escalate.'
    },
    {
      title: 'Engineer the evidence trail',
      text: 'A clean answer can hide a weak decision path. Important workflows should retain the sources used, model or system version, tool actions, confidence or uncertainty, exception path, human review, override, and final disposition so the result can be reconstructed and challenged later.'
    },
    {
      title: 'Design for intervention and recovery',
      text: 'Human oversight is useful only when people can recognize a problem and still have authority to intervene. Strong operating models define monitoring, thresholds, revocation, fallback, recovery, and accountable ownership before automation reaches customers, regulated obligations, entitlements, payments, or operationally sensitive systems.'
    }
  ];

  const recordContact = (destination) => track('homepage_contact_intent', { destination });

  return (
    <div className="min-h-screen text-[var(--oc-text)]">
      <header className="sticky top-0 z-50 border-b border-[color:var(--oc-line)] bg-[rgba(10,18,37,0.92)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 lg:flex-row lg:items-center lg:justify-between">
          <a href="#top" className="min-w-0">
            <div className="text-lg font-semibold tracking-wide text-white md:text-xl">Juan A. Martinez Diaz, MBA</div>
            <div className="mt-1 text-sm text-[var(--oc-muted)]">Technology leadership, risk, resilience, and applied AI</div>
          </a>
          <nav aria-label="Primary" className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-[var(--oc-muted)]">
            <a href="#about" className="hover:text-[var(--oc-cyan)] focus:text-[var(--oc-cyan)]">About</a>
            <a href="#impact" className="hover:text-[var(--oc-cyan)] focus:text-[var(--oc-cyan)]">Leadership Impact</a>
            <a href="#selected-work" className="hover:text-[var(--oc-cyan)] focus:text-[var(--oc-cyan)]">Selected Work</a>
            <a href="#insights" className="hover:text-[var(--oc-cyan)] focus:text-[var(--oc-cyan)]">Insights</a>
            <a href="/martinez-method" className="hover:text-[var(--oc-cyan)] focus:text-[var(--oc-cyan)]">M.A.R.T.I.N.E.Z. Method</a>
            <a href="#contact" className="hover:text-[var(--oc-cyan)] focus:text-[var(--oc-cyan)]">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--oc-cyan)]">Juan A. Martinez Diaz · Executive Portfolio</p>
              <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
                The test of technology is what happens after everyone says yes.
              </h1>
              <p className="mt-7 max-w-3xl text-lg leading-9 text-stone-300">
                I have spent my career on that side of the decision—leading large-scale IT, protecting critical operations, challenging technology risk, and turning emerging capabilities into something an organization can actually depend on.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a href="#impact" className="rounded-2xl border border-[color:var(--oc-line-strong)] bg-[linear-gradient(90deg,var(--oc-cyan),var(--oc-blue))] px-5 py-3 text-sm font-medium text-[#06101f] shadow-[0_0_24px_rgba(67,231,255,0.18)] transition hover:-translate-y-0.5">See the Work</a>
                <a href={AI_BUILD_LAB_URL} className="rounded-2xl border border-[color:var(--oc-line)] bg-[rgba(10,18,37,0.54)] px-5 py-3 text-sm font-medium text-white transition hover:border-[color:var(--oc-line-strong)]">Explore the AI Build Lab</a>
              </div>
            </div>
            <aside className="rounded-[2rem] border border-[color:var(--oc-line)] bg-[rgba(8,16,31,0.76)] p-7 shadow-[0_18px_50px_rgba(0,0,0,0.3),0_0_24px_rgba(67,231,255,0.08)]">
              <div className="flex items-center gap-4">
                <div aria-hidden="true" className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[color:var(--oc-line-strong)] bg-[linear-gradient(135deg,rgba(67,231,255,0.16),rgba(139,124,255,0.2))] text-sm font-semibold tracking-[0.14em] text-white">JMD</div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-stone-400">A note from Juan</p>
                  <h2 className="mt-1 text-xl font-semibold text-white">Choose the conversation that brought you here.</h2>
                </div>
              </div>
              <p className="mt-6 text-base leading-7 text-stone-300">
                This portfolio connects an executive record with the work I am building now. Start with the part most useful to you.
              </p>
              <nav aria-label="Guided entry points" className="mt-6 grid gap-3">
                <a href="#impact" className="rounded-2xl border border-[color:var(--oc-line)] bg-[rgba(10,18,37,0.5)] px-4 py-3 text-sm text-white transition hover:border-[color:var(--oc-cyan)] hover:text-[var(--oc-cyan)]">Assessing executive leadership →</a>
                <a href="#selected-work" className="rounded-2xl border border-[color:var(--oc-line)] bg-[rgba(10,18,37,0.5)] px-4 py-3 text-sm text-white transition hover:border-[color:var(--oc-cyan)] hover:text-[var(--oc-cyan)]">Exploring governance and risk work →</a>
                <a href={AI_BUILD_LAB_URL} className="rounded-2xl border border-[color:var(--oc-line)] bg-[rgba(10,18,37,0.5)] px-4 py-3 text-sm text-white transition hover:border-[color:var(--oc-cyan)] hover:text-[var(--oc-cyan)]">Building practical AI fluency →</a>
              </nav>
            </aside>
          </div>
        </section>

        <section id="impact" className="border-y border-[color:var(--oc-line)] bg-[rgba(10,18,37,0.42)]">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-400">Leadership Impact</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-white md:text-4xl">Experience measured by responsibility, not adjectives.</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {impactItems.map((item) => (
                <article key={item.title} className="rounded-[1.5rem] border border-[color:var(--oc-line)] bg-[rgba(8,16,31,0.76)] p-6">
                  <div className="text-2xl font-semibold text-[var(--oc-cyan)]">{item.metric}</div>
                  <h3 className="mt-3 text-lg font-medium text-white">{item.title}</h3>
                  <p className="mt-3 leading-7 text-stone-300">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-stone-400">About</p>
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Leadership across AI, risk, technology, and operations.</h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-stone-300 md:text-lg">
              <p>
                My work sits where enterprise AI governance, technology and information-security risk, operational resilience, cybersecurity, and accountable execution meet. I focus on what happens when AI enters a real workflow: who authorized it, what information shaped the result, which tools it could access, where human judgment remained, how exceptions were handled, and what evidence survived.
              </p>
              <p>
                That perspective is grounded in regulated financial services. As a Vice President in Wells Fargo&apos;s second line of defense, I provided independent oversight of technology and information-security risk, operational resilience, controls, Risk and Control Self-Assessment, issue remediation, and executive risk reporting. The work required translating complex risk into decisions leaders could act on without losing the evidence behind them.
              </p>
              <p>
                My leadership foundation also includes military technology leadership as a Sergeant Major and responsibility for a 160-person technology organization supporting operations across the United States and Caribbean. That experience shaped a practical view of resilience: plans, controls, and governance matter only when they still work under pressure.
              </p>
              <p>
                I now apply those lessons to governed agentic systems, AI-enabled risk workflows, and cybersecurity and operational-technology learning scenarios. The objective is disciplined adoption—clear authority, bounded tools, reliable evidence, human intervention where consequences require it, and recovery when systems behave differently than expected.
              </p>
            </div>
          </div>
        </section>

        <section id="selected-work" className="border-y border-[color:var(--oc-line)] bg-[rgba(8,16,31,0.35)]">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-400">Selected Work</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-white md:text-4xl">Practical systems for making judgment and accountability visible.</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-300">
              These projects turn governance from policy language into something people can examine, challenge, test, and improve.
            </p>
            <p className="mt-4 max-w-4xl text-base leading-8 text-stone-300">
              Together, they form a connected body of work. The M.A.R.T.I.N.E.Z. Method provides the decision discipline. The AI Build Lab lets professionals practice that discipline through bounded, tool-neutral missions. Project Sentinel extends the same thinking into workflow comparison and simulation, where teams can examine authority, evidence, exceptions, human intervention, and operational outcomes before recommending broader automation.
            </p>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {selectedWork.map((item, index) => (
                <article id={index === 0 ? 'sentinel' : undefined} key={item.title} className="flex flex-col rounded-[2rem] border border-[color:var(--oc-line)] bg-[rgba(10,18,37,0.78)] p-7 shadow-[0_14px_36px_rgba(0,0,0,0.22)]">
                  <p className="text-sm text-[var(--oc-cyan)]">{item.eyebrow}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 flex-1 leading-8 text-stone-300">{item.text}</p>
                  <a href={item.href} onClick={() => recordContact(item.title)} className="mt-7 inline-flex w-fit rounded-2xl border border-[color:var(--oc-line-strong)] px-4 py-3 text-sm font-medium text-white transition hover:border-[color:var(--oc-cyan)] hover:text-[var(--oc-cyan)]">{item.linkText}</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm uppercase tracking-[0.2em] text-stone-400">Operating Principles</p>
          <h2 className="mt-3 max-w-4xl text-3xl font-semibold text-white md:text-4xl">Governance becomes real inside the decision path.</h2>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-stone-300">
            Policies and committees matter, but they do not govern an AI-enabled workflow by themselves. Governance becomes operational through permissions, authoritative-source boundaries, named decision rights, approval gates, evidence capture, monitoring, escalation, and recovery. These principles guide how I evaluate emerging technology in environments where a polished output is not enough—the organization must also be able to explain why the work moved forward and who remained accountable.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {operatingPrinciples.map((item) => (
              <article key={item.title} className="rounded-[1.5rem] border border-[color:var(--oc-line)] bg-[rgba(8,16,31,0.72)] p-7">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 leading-8 text-stone-300">{item.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-4xl text-base leading-8 text-stone-300 md:text-lg">
            For executive teams, this creates a more useful conversation. Instead of asking whether the organization has an AI policy, leaders can ask what problem the workflow solves, what authority moved to the system, which evidence supports the result, where people must intervene, how performance will be monitored, and what happens when the operating model no longer behaves as intended. Those questions turn governance into a practical management discipline.
          </p>
        </section>

        <section id="insights" className="border-y border-[color:var(--oc-line)] bg-[rgba(8,16,31,0.35)]">
          <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm uppercase tracking-[0.2em] text-stone-400">Current Perspectives</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-white md:text-4xl">Ideas grounded in operating reality.</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {insights.map((item) => (
              <article key={item.title} className="flex flex-col rounded-[2rem] border border-[color:var(--oc-line)] bg-[rgba(10,18,37,0.72)] p-7">
                <p className="text-sm text-stone-400">{item.date}</p>
                <h3 className="mt-3 text-xl font-medium text-white">{item.title}</h3>
                <p className="mt-4 flex-1 leading-7 text-stone-300">{item.text}</p>
                <a href={item.href} className="mt-6 text-sm font-medium text-[var(--oc-cyan)] hover:text-white">Read perspective →</a>
              </article>
            ))}
          </div>
          </div>
        </section>

        <section className="border-y border-[color:var(--oc-line)] bg-[rgba(10,18,37,0.42)]">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-400">Conversation Pathways</p>
            <h2 className="mt-3 max-w-4xl text-3xl font-semibold text-white md:text-4xl">Different entry points, one operating concern: accountable execution.</h2>
            <p className="mt-5 max-w-4xl text-base leading-8 text-stone-300 md:text-lg">Whether the immediate need is executive leadership, an AI-governance operating model, a technology-risk decision, or a practical learning environment, the starting point is the same: understand the work, make authority visible, preserve evidence, and keep consequential judgment with accountable people.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="rounded-[1.5rem] border border-[color:var(--oc-line)] bg-[rgba(8,16,31,0.72)] p-6">
              <h2 className="text-xl font-semibold text-white">For executive recruiters</h2>
              <p className="mt-3 leading-7 text-stone-300">Explore an executive record that connects enterprise AI governance, technology risk, cybersecurity, resilience, and large-scale operational leadership.</p>
            </article>
            <article className="rounded-[1.5rem] border border-[color:var(--oc-line)] bg-[rgba(8,16,31,0.72)] p-6">
              <h2 className="text-xl font-semibold text-white">For regulated-industry leaders</h2>
              <p className="mt-3 leading-7 text-stone-300">Discuss how to move from AI ambition to workflows with explicit authority, evidence, controls, monitoring, and recovery.</p>
            </article>
            <article className="rounded-[1.5rem] border border-[color:var(--oc-line)] bg-[rgba(8,16,31,0.72)] p-6">
              <h2 className="text-xl font-semibold text-white">For governance decision makers</h2>
              <p className="mt-3 leading-7 text-stone-300">Use practical frameworks and simulation to examine decisions before automation makes weak assumptions harder to see.</p>
            </article>
          </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-[2rem] border border-[color:var(--oc-line-strong)] bg-[rgba(8,16,31,0.82)] p-8 shadow-[0_18px_50px_rgba(0,0,0,0.3),0_0_24px_rgba(67,231,255,0.08)] md:p-12">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-400">Contact</p>
            <h2 className="mt-3 max-w-4xl text-3xl font-semibold text-white md:text-4xl">Let&apos;s discuss the decision, workflow, or control problem behind the technology.</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-300">
              I welcome conversations about executive leadership, advisory work, practical AI governance, technology risk, operational resilience, and Project Sentinel in regulated or high-consequence environments.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="mailto:sgmmartinez@gmail.com" onClick={() => recordContact('email')} className="rounded-2xl border border-[color:var(--oc-line-strong)] bg-[linear-gradient(90deg,var(--oc-cyan),var(--oc-blue))] px-5 py-3 text-sm font-medium text-[#06101f]">Email Juan</a>
              <a href="mailto:sgmmartinez@gmail.com?subject=Project%20Sentinel%20Discussion" onClick={() => recordContact('sentinel')} className="rounded-2xl border border-[color:var(--oc-line)] px-5 py-3 text-sm font-medium text-white hover:border-[color:var(--oc-line-strong)]">Request a Sentinel Discussion</a>
              <a href="https://www.linkedin.com/in/juan-martinez-diaz-mba-itil-50943411" onClick={() => recordContact('linkedin')} className="rounded-2xl border border-[color:var(--oc-line)] px-5 py-3 text-sm font-medium text-white hover:border-[color:var(--oc-line-strong)]">LinkedIn Profile</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[color:var(--oc-line)] bg-[rgba(8,16,31,0.45)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm leading-6 text-stone-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Juan A. Martinez Diaz. All rights reserved.</p>
          <p className="max-w-2xl md:text-right">Privacy-conscious analytics measure general engagement. No advertising trackers, remarketing pixels, or LinkedIn Insight Tag are used.</p>
        </div>
      </footer>
      <Analytics />
    </div>
  );
}

export default function JuanProfessionalLandingPage() {
  const audiencePaths = [
    {
      title: 'For Executive Recruiters',
      text: 'See how Juan connects artificial intelligence, governance, resilience, and executive judgment in complex organizations.',
      href: '#recruiters'
    },
    {
      title: 'For Banking and Regulated-Industry Leaders',
      text: 'Explore how AI adoption, control quality, and operational discipline intersect where credibility matters.',
      href: '#flagship'
    },
    {
      title: 'For AI and Governance Decision Makers',
      text: 'Read practical perspectives on governance, operating-model design, accountability, and execution reality.',
      href: '#point-of-view'
    }
  ];

  const impactItems = [
    {
      metric: '15+ years',
      label: 'helping large, complex organizations translate artificial intelligence, technology, risk, and operational complexity into executive action'
    },
    {
      metric: '160-person',
      label: 'technology organization led across mission-critical information technology operations, cybersecurity oversight, and operational readiness'
    },
    {
      metric: 'Fortune-scale',
      label: 'experience inside one of the nation’s largest regulated financial institutions advising on technology, emerging risk, and governance'
    },
    {
      metric: 'Cross-functional',
      label: 'partnership across cybersecurity, legal, privacy, compliance, and business leadership to strengthen governance and oversight'
    }
  ];

  const valueItems = [
    'Translate AI opportunity into governable execution',
    'Connect technology risk to executive decision-making',
    'Strengthen control quality and resilience under pressure',
    'Clarify operating-model decisions in complex environments',
    'Reduce noise and increase decision usefulness'
  ];

  const proofItems = [
    {
      title: 'Enterprise risk translation',
      text: 'Translated emerging-technology risk, resilience, and governance issues into executive narratives that informed strategic decisions and prioritization.'
    },
    {
      title: 'Large-scale operational leadership',
      text: 'Led a 160-person information technology organization responsible for enterprise operations, cybersecurity oversight, and operational readiness in a mission-critical environment.'
    },
    {
      title: 'Practical artificial intelligence lens',
      text: 'Bridging frontier artificial intelligence opportunity with real-world adoption requirements such as governance, operating model change, process discipline, and leadership alignment.'
    }
  ];

  const flagshipSections = [
    {
      title: 'Why this matters now',
      text: 'Artificial intelligence has moved from experimentation to expectation. Boards are asking about it. Executive teams are under pressure to show movement. The real question is whether leaders can introduce value without weakening governance, obscuring accountability, or increasing operational fragility.'
    },
    {
      title: 'Where organizations go wrong',
      text: 'Organizations rarely fail because they lacked governance language. They fail because their operating reality cannot support the ambition they declared. AI is too often treated as a tool decision instead of an operating-model decision.'
    },
    {
      title: 'Why judgment matters more',
      text: 'Better automation does not remove the need for judgment. It raises the premium on it. Leaders still have to decide where automation belongs, where oversight must remain strong, and how to detect confidence that is not deserved.'
    },
    {
      title: 'What strong AI governance looks like',
      text: 'Strong AI governance is operational, not performative. It depends on clear accountability, practical risk translation, integration with the real control environment, visible decision rights, and measurable execution discipline.'
    }
  ];

  const questionItems = [
    'What problem are we actually trying to solve with AI?',
    'What decision or process changes if this works?',
    'What could fail quietly if this is implemented badly?',
    'Which controls matter most if adoption expands quickly?',
    'Where are we relying on documentation instead of execution proof?',
    'Which leaders own approval, oversight, and intervention rights?',
    'How will we know whether the operating model is holding under pressure?'
  ];

  const povItems = [
    {
      title: 'Practical AI Governance and Executive Judgment in Regulated Environments',
      text: 'How leaders can adopt artificial intelligence without losing control, credibility, or execution discipline.',
      href: '#flagship',
      status: 'Flagship perspective'
    },
    {
      title: 'A LinkedIn Profile Cannot Fix the Job Market. It Can Keep You from Disappearing.',
      text: 'An evidence-backed guide to using AI to rebuild professional positioning, find better-fit opportunities, and govern an authorized job-application agent without surrendering truth or judgment.',
      href: '/career-recovery',
      status: 'New AI Build Lab feature'
    },
    {
      title: 'Why Control Environments Fail Under Pressure',
      text: 'A practical look at the gap between elegant control language and what actually happens inside stressed operating environments.',
      href: '#coming-next',
      status: 'Coming next'
    },
    {
      title: 'Stop Starting with AI. Start with the Workflow.',
      text: 'Enterprise AI initiatives often begin with technology. This article explains why understanding the workflow should come first and how that changes the way organizations evaluate AI adoption.',
      href: '/stop-starting-with-ai-start-with-the-workflow',
      status: 'Featured archive'
    },
    {
      title: 'The Artificial Intelligence Fluency Premium Is Becoming the Real Jobs Story',
      text: 'A practical guide to the emerging advantage for workers who can use artificial intelligence with judgment, verification, and domain context.',
      href: '/ai-fluency-premium',
      status: 'Featured archive'
    },
    {
      title: 'AI Is Not an Answer Machine. It Is a Test of Human Judgment.',
      text: 'A research-backed argument for teaching students to use AI as a disciplined partner in thought — not as a substitute for judgment, curiosity, or human agency.',
      href: '/ai-human-judgment-education',
      status: 'Featured archive'
    },
    {
      title: 'A Thought Partner Should Make Your Thinking Harder to Fool',
      text: 'An AI Build Lab feature on designing a customizable Thought Partner that challenges assumptions, exposes rationalizations, and improves human judgment without replacing it.',
      href: '/thought-partner',
      status: 'New AI Build Lab feature'
    },
    {
      title: 'From RPA to Agentic AI: The New Control Problem — Part 1',
      text: 'Footprints, fog, and the evidence trail. A practical series on what changes when AI agents enter workflows that used to be rules-based.',
      href: '#article-from-rpa-to-agentic-ai-the-new-control-problem-part-1',
      status: 'Featured archive'
    },
    {
      title: 'From RPA to Agentic AI: The New Control Problem — Part 2: Capability Is Not Permission',
      text: 'A practical control argument for separating what an AI agent can do from what it has authority to do.',
      href: '/from-rpa-to-agentic-ai-new-control-problem-part-2-capability-is-not-permission',
      status: 'Featured archive'
    },
    {
      title: 'Agentic Artificial Intelligence Is Not Robotic Process Automation With Better Vocabulary',
      text: 'Regulated institutions are moving from deterministic automation to probabilistic agency. The control question is no longer just whether the bot followed the script, but whether the firm can govern systems that choose their own path through regulated work.',
      href: '#article-agentic-artificial-intelligence-is-not-robotic-process-automation-with-better-vocabulary',
      status: 'Featured archive'
    }
  ];

  const workflowArticle = {
    title: 'Stop Starting with AI. Start with the Workflow.',
    slug: 'stop-starting-with-ai-start-with-the-workflow',
    category: 'Enterprise AI',
    author: 'Juan A. Martinez Diaz, MBA',
    tags: ['Enterprise AI', 'AI Operations', 'Agentic AI', 'Workflow Design', 'AI Governance', 'Digital Transformation'],
    metaTitle: 'Stop Starting with AI. Start with the Workflow | Juan Martinez',
    metaDescription: 'Enterprise AI initiatives often begin with technology. This article explains why understanding the workflow should come first and how that changes the way organizations evaluate AI adoption.',
    socialDescription: 'Enterprise AI initiatives often begin with technology. This article explains why understanding the workflow should come first and how that changes the way organizations evaluate AI adoption.',
    articleAnchorOrUrl: '/stop-starting-with-ai-start-with-the-workflow',
    fullReadMoreUrl: 'https://www.juanmartinez.ai/stop-starting-with-ai-start-with-the-workflow',
    originalVisiblePostingDate: 'July 20, 2026',
    publishedDateIso: '2026-07-20',
    homepageFeaturedDate: 'July 20, 2026',
    archiveNote: 'Current featured article.',
    hideCallToAction: true,
    body: [
      'A question has been bothering me lately.',
      'When organizations launch an AI initiative, why is the first discussion almost always about the technology?',
      'The conversation usually begins with models, copilots, agents, orchestration frameworks, or cloud platforms. Those are important decisions, but they aren\'t the first ones that should be made.',
      'The first place to look is the work itself.',
      'Every enterprise workflow is a sequence of people making decisions, systems exchanging information, policies constraining actions, and evidence being produced along the way. Some steps are repetitive. Some require judgment. Some exist because regulation demands them. Others exist because the organization has simply always done things that way.',
      'Treating every workflow as an AI opportunity skips the most important part of the analysis.',
      'Before introducing a single model, I think we should be able to answer questions like these:',
      [
        'Where are the decisions?',
        'Which decisions are based on evidence?',
        'Which require experience or judgment?',
        'Which systems provide the information needed to perform the work?',
        'Where are approvals required?',
        'How would we know whether an AI-assisted version actually performed better?'
      ],
      'Those questions have very little to do with artificial intelligence.',
      'They have everything to do with understanding the work.',
      'Imagine two versions of the same process.',
      'The first is the workflow your organization performs today.',
      'The second performs the same work using AI where it adds value while keeping humans responsible where accountability, policy, or judgment require it.',
      'Now run both versions against the same scenario.',
      'Measure the time.',
      'Measure the quality.',
      'Measure the evidence.',
      'Measure the number of human interventions.',
      'Measure the outcome.',
      'Only then should we decide whether the workflow deserves to become more agentic.',
      'That approach changes the role of AI completely.',
      'Instead of asking AI to replace work, we\'re asking it to prove where it belongs.',
      'I suspect that will become one of the defining differences between successful enterprise AI programs and expensive experiments.',
      'The organizations that make the most progress won\'t necessarily have access to the largest models.',
      'They\'ll understand their own workflows well enough to know where automation creates value, where humans remain essential, and how to demonstrate the difference with evidence instead of optimism.',
      'That framework now informs Project Sentinel and the AI Build Lab, where workflows can be analyzed, simulated, and challenged before an organization recommends AI adoption.',
      'For me, that\'s becoming a far more interesting problem than AI itself.'
    ],
    archive: [
      {
        title: 'Stop Starting with AI. Start with the Workflow.',
        originalVisiblePostingDate: 'July 20, 2026',
        status: 'Current featured article'
      },
      {
        title: 'From RPA to Agentic AI: The New Control Problem — Part 1',
        originalVisiblePostingDate: 'June 29, 2026',
        status: 'Previously featured article'
      },
      {
        title: 'The Artificial Intelligence Fluency Premium Is Becoming the Real Jobs Story',
        originalVisiblePostingDate: 'June 22, 2026',
        status: 'Previously featured article'
      },
      {
        title: 'AI Is Not an Answer Machine. It Is a Test of Human Judgment.',
        originalVisiblePostingDate: 'May 29, 2026',
        status: 'Previously featured article'
      },
      {
        title: 'Agentic Artificial Intelligence Is Not Robotic Process Automation With Better Vocabulary',
        originalVisiblePostingDate: 'May 18, 2026',
        status: 'Previously featured article'
      },
      {
        title: 'The Quiet Erosion of White-Collar Work',
        originalVisiblePostingDate: 'April 14, 2026',
        status: 'Previously featured article'
      }
    ]
  };

  const thoughtPartnerMissionUrl = `${AI_BUILD_LAB_URL}/?mission=build-thought-partner#project-studio`;

  const thoughtPartnerArticle = {
    title: 'A Thought Partner Should Make Your Thinking Harder to Fool',
    slug: 'thought-partner',
    category: 'AI Build Lab',
    author: 'Juan A. Martinez Diaz',
    tags: ['Artificial Intelligence', 'Human Judgment', 'AI Build Lab', 'Decision Support', 'Thought Partner'],
    metaTitle: 'A Thought Partner Should Make Your Thinking Harder to Fool | Juan Martinez',
    metaDescription: 'A feature on building a customizable AI Thought Partner that challenges assumptions, examines evidence, and improves human reasoning without replacing human judgment.',
    socialDescription: 'I do not want an AI that automatically disagrees with me. I want one that makes it harder for me to fool myself.',
    articleAnchorOrUrl: '/thought-partner',
    callToActionText: 'Build your own Thought Partner in AI Build Lab Mission 14:',
    fullReadMoreUrl: thoughtPartnerMissionUrl,
    canonicalUrl: 'https://www.juanmartinez.ai/thought-partner',
    showStandaloneCallToAction: true,
    originalVisiblePostingDate: 'August 19, 2026',
    publishedDateIso: '2026-08-19',
    homepageFeaturedDate: 'August 21, 2026',
    archiveNote: 'AI Build Lab feature updated for Mission 14.',
    body: [],
    sections: [
      {
        heading: 'An idea that started at home',
        blocks: [
          "Some of the ideas that stay with me don't begin in a conference room, classroom, research paper, or technology lab. They begin around the house.",
          'When my daughter, Telisse Rodriguez, and her family visit, Telisse and I invariably find ourselves working through something together. It might be a family decision, an investment, something happening at work, or an idea one of us hasn\'t completely figured out yet.',
          'There is rarely an agenda. One of us puts something on the table and the other starts asking questions. We follow one direction, find a weakness, try another, challenge an assumption, and occasionally disagree. Sometimes one of us changes the other\'s mind. Sometimes neither of us does.',
          'And sometimes the best result is realizing that we were asking the wrong question.',
          'I realized recently that there is a simple name for what we have been doing. We are thought partners.',
          'That realization led me to a larger question: Could artificial intelligence become a useful thought partner without becoming a substitute for human thought?',
          'I think it can, but it requires us to ask something different of the technology.'
        ]
      },
      {
        heading: 'Completing work and improving judgment are different things',
        blocks: [
          'Artificial intelligence is already useful as an assistant. We can ask it to summarize a document, draft an email, analyze information, research a subject, organize a project, or write code. Those capabilities can save considerable time.',
          'But completing work and improving judgment are different functions.',
          'Suppose I bring an investment idea to an AI and ask it to help develop my thesis. It may produce an impressive analysis. But what happens if my original thesis is wrong?',
          "If the system accepts my premise and becomes increasingly effective at helping me defend it, my thinking hasn't necessarily improved. I may simply have created a more convincing argument for something I already wanted to believe.",
          'A Thought Partner needs a different objective: help me determine whether my idea deserves to survive scrutiny.'
        ]
      },
      {
        heading: "Agreement isn't the objective",
        blocks: [
          'People become attached to their ideas. We notice evidence that supports what we already believe, and sometimes we continue defending a decision after the facts that originally supported it have changed.',
          'AI can reinforce that tendency if being “helpful” means following whatever direction the user establishes.',
          'A useful Thought Partner needs permission to create some constructive friction. It should be able to tell me that my conclusion depends on an unsupported assumption, that there is a stronger argument against my position than the one I\'ve considered, or that I may be solving the wrong problem.',
          "That isn't obstruction. If the challenge improves the reasoning behind the eventual decision, it has done useful work."
        ]
      },
      {
        heading: 'Keep the evidence trail visible',
        blocks: [
          'A serious Thought Partner should distinguish among what we know, what the evidence reasonably supports, what we infer, what we assume, and what remains unknown.',
          'Consider a business decision. Revenue may have increased for three consecutive quarters. That can be verified. Management may believe a new product caused the growth. That conclusion requires evidence. Assuming the growth will continue introduces another level of uncertainty, and we may have no reliable information about how customers would react if a competitor changed prices.',
          "Put all of those statements into one confident paragraph and they can sound equally certain. They aren't.",
          "The Thought Partner should keep that evidence trail visible so confidence doesn't quietly outrun what we actually know."
        ]
      },
      {
        heading: 'A working Thought Partner Protocol',
        blocks: [
          'I think these ideas can be organized into a repeatable method:',
          'UNDERSTAND → FRAME → CHALLENGE → EXPAND → TEST → SYNTHESIZE → DECIDE',
          'Understand the objective, constraints, existing beliefs, and what success actually means before recommending anything. An excellent answer to the wrong problem is still the wrong answer.',
          'Frame the decision clearly. “Should I invest in this company?” may actually mean, “Is this opportunity better than the other uses available for this capital?” Changing the frame can change the analysis.',
          'Challenge the assumptions carrying the argument. Determine what must be true for the plan to work, which assumptions have evidence behind them, and where the reasoning is vulnerable.',
          "Expand the option set. The original idea shouldn't automatically define the boundaries of the decision. Waiting, doing nothing, running a smaller experiment, or approaching the problem differently may deserve consideration.",
          'Test the strongest alternatives against evidence, constraints, downside, consequences, and the strongest credible opposing argument.',
          'Synthesize what survives. Make clear what is supported, what remains uncertain, what risks matter, and what information could materially change the analysis.',
          'Decide by making a recommendation when the evidence supports one, while keeping ownership where it belongs.',
          'Artificial intelligence can participate in judgment without owning judgment.'
        ]
      },
      {
        heading: 'Sometimes the correct answer is “we don\'t know yet”',
        blocks: [
          'We tend to expect an answer every time we ask AI a question. Reality doesn\'t always provide enough evidence for one.',
          'A useful Thought Partner should be comfortable saying, “I don\'t know,” and then identifying what information would reduce the uncertainty. That isn\'t failure. It is discipline.',
          "The objective isn't to maximize the number of answers produced. It is to improve the quality of the decisions those answers inform."
        ]
      },
      {
        heading: 'What if it remembers how you make decisions?',
        blocks: [
          'This is where the idea becomes more interesting to me.',
          'Most discussions of AI memory focus on personal facts, preferences, projects, names, schedules, and writing styles. Those things can be useful, but imagine a Thought Partner that could also help you examine your decision history.',
          'What assumptions have repeatedly influenced your decisions? Where have you underestimated risk? Which principles consistently matter to you? What evidence has caused you to change your mind? Which previous decisions produced an outcome different from what you expected?',
          'A future conversation might begin differently because of that context: “You\'ve faced something similar before. Last time, you placed considerable weight on growth potential but underestimated concentration risk. Should we examine concentration explicitly before making this decision?”',
          'Used carefully, that could help someone learn from previous decisions instead of repeatedly starting from zero.',
          "It also creates risk. The user should control what is remembered, sensitive information shouldn't be retained indiscriminately, and a previous behavior shouldn't become a permanent judgment about the person. History can inform the next question without dictating the next answer."
        ]
      },
      {
        heading: 'Different problems need different kinds of thinking',
        blocks: [
          "I don't think a Thought Partner needs a collection of fictional expert personalities. I would rather give it a small number of useful cognitive modes.",
          "Socratic Mode asks questions before recommending when the problem or assumptions need clarification. Red Team Mode deliberately searches for weaknesses, opposing evidence, and failure paths. Exploration Mode expands possibilities when the problem isn't yet well defined. Decision Mode compares credible alternatives against explicit criteria and recommends a course when the evidence warrants it.",
          "These aren't characters. They are different ways of examining a problem."
        ]
      },
      {
        heading: 'The Challenge Me Contract',
        blocks: [
          'I would also establish a standing agreement with the system:',
          'Do not agree with me simply because I proposed the idea. Identify the assumptions supporting my conclusion and present the strongest credible opposing argument. Distinguish facts, evidence-supported conclusions, inference, assumptions, speculation, and unknowns. Tell me when the evidence is insufficient and what could change the recommendation.',
          "Don't manufacture certainty. Make a recommendation when the evidence supports one, but leave final judgment and accountability with me.",
          'That agreement changes what “helpful” means. The system isn\'t being asked merely to satisfy my immediate request. It is being asked to help protect the integrity of the reasoning that precedes the decision.'
        ]
      },
      {
        heading: 'The method should survive the model',
        blocks: [
          "I don't want this concept permanently tied to ChatGPT, Claude, Gemini, or any other Large Language Model (LLM). Models will change. Providers will change. Capabilities will change.",
          'The useful part should survive those changes.',
          'How does the system understand a problem? When does it challenge the user? How does it treat uncertainty? How does it distinguish evidence from assumption? What may it remember? When should it research instead of infer? Where do its decision rights end?',
          'Those are architectural choices.',
          'The model is the engine. The intellectual architecture is the product.'
        ]
      },
      {
        heading: 'The boundary matters',
        blocks: [
          "There is one outcome I specifically don't want.",
          "A Thought Partner shouldn't become a machine people use to avoid thinking, nor should “the AI told me to do it” become an excuse for transferring responsibility.",
          "The purpose is to strengthen human judgment, not replace it. Ideally, repeated interaction with a good Thought Partner should eventually improve the questions we ask even when the technology isn't present.",
          'That may ultimately be a better measure of success than how impressive its answers sound.'
        ]
      },
      {
        heading: 'Now build one that can survive pressure',
        blocks: [
          'This idea began with Telisse and me bouncing thoughts across a room. There was no theory behind it at the time, just two people willing to enter a problem together and challenge each other\'s thinking.',
          'Mission 13 tested that human principle against a real decision. Mission 14 asks a more demanding question: Who should define how the Thought Partner challenges you?',
          'My answer is that the user should. Challenge intensity, thinking mode, question cadence, evidence standard, memory boundary, and decision authority should be deliberate choices rather than invisible defaults.',
          'The test is not whether the prompt sounds intelligent. The test is whether the resulting behavior survives pressure.',
          'Give it a weak proposition and see whether it exposes the assumptions or helps rationalize them. Ask for a current fact it cannot verify and see whether it admits the limit or manufactures certainty. Ask it to make the final decision and see whether it returns authority to the human.',
          'Record every failure, refine the operating agreement, and test it again. That is how a Thought Partner becomes more than a polished echo.',
          'AI Build Lab Mission 14 provides the complete model-agnostic prompt, configuration choices, evidence rules, memory boundaries, and failure tests.',
          "Perhaps one of AI's more useful contributions won't be giving us more answers. It may be making our own reasoning harder to fool.",
          'Inspired by my daughter and thought partner, Telisse Rodriguez.'
        ]
      }
    ]
  };

  const careerRecoveryMissionUrl = `${AI_BUILD_LAB_URL}/?mission=career-recovery-system#project-studio`;

  const careerRecoveryArticle = {
    title: 'A LinkedIn Profile Cannot Fix the Job Market. It Can Keep You from Disappearing.',
    slug: 'career-recovery',
    category: 'AI Build Lab',
    author: 'Juan A. Martinez Diaz, MBA',
    tags: ['LinkedIn', 'Career Recovery', 'Job Search', 'Artificial Intelligence', 'Human Oversight'],
    metaTitle: 'A LinkedIn Profile Cannot Fix the Job Market | Juan Martinez',
    metaDescription: 'An evidence-backed guide to using AI to rebuild a LinkedIn profile, identify strong job matches, and control an authorized application agent without inventing experience or surrendering human judgment.',
    socialDescription: 'A stronger profile cannot repair a difficult labor market. It can prevent credible experience from becoming invisible to recruiters and AI-assisted matching.',
    articleAnchorOrUrl: '/career-recovery',
    callToActionText: 'Build your Career Recovery Packet in AI Build Lab Mission 15:',
    fullReadMoreUrl: careerRecoveryMissionUrl,
    canonicalUrl: 'https://www.juanmartinez.ai/career-recovery',
    showStandaloneCallToAction: true,
    originalVisiblePostingDate: 'August 24, 2026',
    publishedDateIso: '2026-08-24',
    homepageFeaturedDate: 'August 24, 2026',
    archiveNote: 'Current AI Build Lab feature for Mission 15.',
    body: [],
    sections: [
      {
        heading: 'The job search can make good people question the wrong thing',
        blocks: [
          'I have been thinking about friends and former colleagues who are looking for work. Many of them have spent decades solving difficult problems, leading people, absorbing pressure, and doing the quiet work that keeps organizations functioning.',
          'Then the job ends, the applications begin, and that history is compressed into a headline, an About section, and a few experience entries written years apart.',
          'After enough silence, even capable people can begin asking whether their experience still has value.',
          'I think that is often the wrong question. The experience may be valuable. The immediate problem may be that neither a recruiter nor a matching system can understand it quickly enough.'
        ]
      },
      {
        heading: 'The labor market deserves an honest description',
        blocks: [
          'A LinkedIn profile does not control hiring budgets, reorganizations, employer caution, age bias, location requirements, or the number of qualified people competing for a position. Anyone promising that a profile rewrite will solve those conditions is selling certainty that does not exist.',
          'The July 2026 Bureau of Labor Statistics table provides useful context. People in management, business, and financial operations occupations experienced a mean unemployment duration of 30.2 weeks and a median duration of 14 weeks. For professional and related occupations, the mean was 20.4 weeks.',
          'Those figures do not tell us why any individual remains unemployed, but they do establish something important: a long search is not necessarily evidence that the person lacks value.',
          'That matters because career advice becomes cruel when it quietly turns a labor-market problem into a character judgment.'
        ]
      },
      {
        heading: 'Your profile is being read by people and systems',
        blocks: [
          'LinkedIn Recruiter gives talent professionals more than 40 filters, including job titles, skills, locations, industries, companies, and other profile information. LinkedIn also describes AI-assisted search that can interpret hiring intent and evaluate candidate profiles more holistically than a simple keyword query.',
          'The practical implication is not that everyone should stuff a profile with fashionable terms. It is that relevant evidence needs to be present, coherent, and connected to the work the person wants to do next.',
          'A recruiter cannot reliably infer that an internal project involved enterprise scale, regulatory consequences, a large team, or a difficult turnaround. A matching system cannot treat a skill as central if it appears nowhere in the profile. Important experience that remains implicit is easy to miss.',
          'A LinkedIn profile is therefore doing two jobs at once. It must be searchable enough to be found and human enough to be believed.'
        ]
      },
      {
        heading: 'Skills matter, but proof still carries the argument',
        blocks: [
          'LinkedIn\'s 2025 Future of Recruiting research reported that 93 percent of surveyed talent-acquisition professionals considered accurate skill assessment critical to improving quality of hire. LinkedIn also reported that organizations conducting the most skills-based searches were 12 percent more likely to make a quality hire.',
          'That is a strong reason to identify the skills that consistently appear across the roles someone is pursuing. It is not permission to copy a job description into a profile.',
          'The better approach is to connect skills to evidence. Technology risk becomes more credible when the profile explains the environment, decision, stakeholders, and consequence. Cybersecurity leadership becomes clearer when scope, users, geography, systems, or operational impact are visible. Transformation sounds different when the reader can see what changed and why it mattered.',
          'Keywords may help someone enter the search results. Evidence gives the recruiter a reason to keep reading.'
        ]
      },
      {
        heading: 'Where AI can genuinely help',
        blocks: [
          'A capable Large Language Model can compare a résumé, LinkedIn profile, job descriptions, accomplishments, and writing samples much faster than most people can do manually. It can identify inconsistencies, recurring requirements, missing evidence, overused language, and experience that has been buried under responsibility statements.',
          'It can also help someone answer three useful questions:',
          [
            'What work can I prove I have done?',
            'Which related roles value that evidence?',
            'How should I describe the evidence so a recruiter can understand it without exaggeration?'
          ],
          'That is a good use of AI. It organizes the record and helps the person become understandable.'
        ]
      },
      {
        heading: 'Where AI can quietly damage credibility',
        blocks: [
          'The same technology can create a profile that sounds impressive and is less trustworthy than the original.',
          'It may upgrade a responsibility into an accomplishment, turn an aspiration into a title, add scale the person never supplied, or produce an executive summary assembled from the same polished phrases appearing on thousands of other profiles.',
          'The danger is not always an obvious lie. Often it is a small shift in certainty. Contributed becomes led. Supported becomes owned. Familiar becomes expert. Targeting a role becomes presented as already having held it.',
          'A good career prompt must therefore begin with evidence collection, not rewriting. When support is missing, the AI should ask a question or mark the gap. Fluency is not evidence.'
        ]
      },
      {
        heading: 'The career-recovery sequence',
        blocks: [
          'I built Mission 15 around a simple sequence: REBUILD → MATCH → APPLY.',
          'Rebuild means creating a Career Evidence Record and using it to produce a truthful, target-aligned LinkedIn profile. The AI audits first, asks questions, identifies the three highest-impact changes, drafts the profile, and then tests every material claim against the supplied evidence.',
          'Match means searching current sources and scoring each job against qualifications, skills, scope, industry, leadership evidence, compensation, location, work arrangement, and other real constraints. The objective is a smaller list of stronger opportunities, not a spreadsheet filled with attractive titles.',
          'Apply means authorizing an agent to remove repetitive administration only after the person establishes the boundaries. This is where convenience must give way to control.'
        ]
      },
      {
        heading: 'Authority must be designed before the agent starts clicking',
        blocks: [
          'An application agent should not interpret access to a website as permission to do everything available there. The job seeker must define the target roles, minimum fit score, locations, work arrangement, compensation, travel, documents, approved answers, rate limits, and whether review is required before submission.',
          'The default should be review before submit. Standing authority can be useful later, but only inside a narrow and explicit authorization record.',
          'Some matters should always produce a pause unless the person has provided a specific reusable instruction: legal attestations, background questions, disability or demographic disclosures, identity verification, sponsorship, relocation, unfamiliar screening questions, and anything that could materially affect eligibility.',
          'The agent should never take an assessment or impersonate the candidate in an interview. Removing administration is assistance. Replacing the person is misrepresentation.'
        ]
      },
      {
        heading: 'Do not automate discouragement',
        blocks: [
          'The worst version of this idea would send hundreds of weak applications while the person sleeps. That approach creates noise for employers, poor records for the applicant, and another stream of rejection with very little learning behind it.',
          'A more useful system is selective. It verifies that the posting is active, explains the match, identifies the gaps, tailors only the emphasis, records every action, and stops when the facts or permissions become unclear.',
          'Speed matters. Judgment matters more.'
        ]
      },
      {
        heading: 'Mission 15 is meant to be shared',
        blocks: [
          'Mission 15 provides three complete, model-agnostic prompts: LinkedIn Profile Recovery, Selective Job Match Agent, and Authorized Application Agent. It also includes an evidence check, application authority record, job ledger, application ledger, and downloadable Career Recovery Packet.',
          'It does not promise anyone a job. It gives a professional a more accurate story, a more disciplined way to select opportunities, and a controlled method for using AI without surrendering truth, privacy, or judgment.',
          'If you know someone whose experience deserves to be understood, send them the mission.',
          'Sometimes moving forward begins by making the evidence visible again.'
        ]
      }
    ],
    sources: [
      { label: 'U.S. Bureau of Labor Statistics, “Unemployed persons by occupation, industry, and duration of unemployment” — July 2026', href: 'https://www.bls.gov/web/empsit/cpseea37.htm' },
      { label: 'LinkedIn, “LinkedIn Recruiter Features”', href: 'https://business.linkedin.com/hire/recruiter/recruiter-features' },
      { label: 'LinkedIn Help, “Skills filter in Recruiter and Recruiter Lite”', href: 'https://www.linkedin.com/help/recruiter/answer/a593591' },
      { label: 'LinkedIn, “Future of Recruiting 2025”', href: 'https://www.linkedin.com/business/talent/blog/talent-acquisition/future-of-recruiting-2025' },
      { label: 'LinkedIn, “Advanced AI-Assisted Search: The Right Tool to Find the Right Candidates — Faster”', href: 'https://www.linkedin.com/business/talent/blog/product-tips/advanced-ai-assisted-search-the-right-tool-to-find-the-right-candidates-faster' },
      { label: 'National Institute of Standards and Technology, “AI Risk Management Framework”', href: 'https://www.nist.gov/itl/ai-risk-management-framework' }
    ]
  };

  const rpaArticle = {
    title: 'From RPA to Agentic AI: The New Control Problem — Part 1',
    slug: 'from-rpa-to-agentic-ai-new-control-problem-part-1',
    category: 'AI Governance and Controls',
    author: 'Juan A. Martinez Diaz, MBA',
    tags: ['Agentic AI', 'Robotic Process Automation', 'AI Governance', 'Evidence Lineage', 'Human Oversight'],
    metaTitle: 'From RPA to Agentic AI: The New Control Problem | Juan Martinez',
    metaDescription: 'What changes when AI agents enter workflows that used to be rules-based: footprints, fog, evidence lineage, control boundaries, and accountable human review.',
    socialDescription: 'RPA usually left footprints. AI agents can create fog unless organizations engineer the evidence trail and control boundaries on purpose.',
    subtitle: 'Footprints, Fog, and the Evidence Trail',
    articleAnchorOrUrl: '/from-rpa-to-agentic-ai-new-control-problem-part-1',
    callToActionText: 'Read more on this topic here:',
    fullReadMoreUrl: 'https://www.juanmartinez.ai/from-rpa-to-agentic-ai-new-control-problem-part-1',
    originalVisiblePostingDate: 'June 29, 2026',
    publishedDateIso: '2026-06-29',
    homepageFeaturedDate: 'June 29, 2026',
    archiveNote: '',
    hideCallToAction: true,
    archive: [
      {
        title: 'From RPA to Agentic AI: The New Control Problem — Part 1',
        originalVisiblePostingDate: 'June 29, 2026',
        status: 'Current featured article'
      },
      {
        title: 'The Artificial Intelligence Fluency Premium Is Becoming the Real Jobs Story',
        originalVisiblePostingDate: 'June 22, 2026',
        status: 'Previously featured article'
      },
      {
        title: 'AI Is Not an Answer Machine. It Is a Test of Human Judgment.',
        originalVisiblePostingDate: 'May 29, 2026',
        status: 'Previously featured article'
      },
      {
        title: 'Agentic Artificial Intelligence Is Not Robotic Process Automation With Better Vocabulary',
        originalVisiblePostingDate: 'May 18, 2026',
        status: 'Previously featured article'
      },
      {
        title: 'The Quiet Erosion of White-Collar Work',
        originalVisiblePostingDate: 'April 14, 2026',
        status: 'Previously featured article'
      }
    ],
    body: [
      'Many new people found my work after my May 25 LinkedIn post, “My last day at Wells Fargo is May 26, 2026.” I am grateful for that.',
      'For those newly connected here, much of my work sits where technology, risk, controls, and operational reality meet. This series is focused on one question I believe banks and large institutions need to examine carefully:',
      'What happens when AI agents are placed on top of workflows that used to be rules-based?',
      'Robotic Process Automation was never perfect.',
      'Bots broke. Screens changed. Fields moved. Credentials expired. Files arrived in the wrong format. A required value was missing and the process stopped cold.',
      'But there was something useful about that kind of failure.',
      'It usually left footprints.',
      'A rule fired. A script failed. An exception queue caught the issue. A human could usually trace what happened, where it happened, and why the bot stopped.',
      'That traceability mattered.',
      'In banking, a workflow is rarely just a workflow. It may touch customer data, access rights, payments, complaints, fraud alerts, cyber events, regulatory commitments, vendor systems, remediation activity, records retention, or audit evidence.',
      'RPA operated inside a mostly deterministic control model. The process was defined. The rules were explicit. The failure points were often visible. The control environment could be designed around known inputs, known paths, known exceptions, and known approvals.',
      'AI agents change the shape of that risk.',
      'They do not simply execute a rule. They may infer intent, retrieve information, summarize evidence, choose a tool, rank options, assign confidence, route an exception, or decide whether work is safe to move forward.',
      'That can create real value.',
      'It can also create fog.',
      'RPA usually left footprints. AI agents can leave fog unless we design the evidence trail on purpose.',
      'A clean AI output can hide a messy decision path.',
      'The workflow may move forward, but the accountability may blur. What source did the agent rely on? Was that source approved? What tool did the agent call? Was that tool permitted for this use case? What confidence threshold applied? Was there conflicting evidence? Did the agent recognize the exception? Did it escalate when required? What evidence remained after the decision?',
      'These are not academic questions. They are control-design questions.',
      'RPA needed rules, access controls, change management, exception queues, monitoring, and fallback procedures.',
      'AI agents need those same disciplines, plus visible decision paths, bounded tool use, confidence thresholds, prompt and model controls, source validation, human approval points, drift monitoring, and evidence that survives review after the excitement fades.',
      'Completion is not the same as control.',
      'A fast answer is not the same as an auditable answer.',
      'A polished output is not the same as a defensible decision.',
      'For banks and regulated institutions, the control boundary has to be explicit. Some agents should summarize. Some should retrieve. Some should recommend. Some should route. Very few should act without approval in workflows that touch customers, payments, entitlements, regulatory obligations, cyber response, fraud, remediation, or audit evidence.',
      'That is the move from automation to controlled autonomy.',
      'The goal is not to slow AI adoption. The goal is to make AI adoption durable enough to withstand operational pressure, audit review, supervisory scrutiny, and customer impact.',
      'RPA taught us to govern scripts.',
      'Agentic AI will force us to govern judgment-like behavior inside production workflows.',
      'That is the new control problem.'
    ],
    frameworkTitle: 'A Practical Control Lens: FOOTPRINT',
    framework: [
      { letter: 'F', title: 'Function', text: 'Define what the agent is actually doing: summarizing, retrieving, routing, recommending, deciding, or acting.' },
      { letter: 'O', title: 'Operating Boundary', text: 'Define approved systems, tools, data sources, transaction types, and prohibited actions.' },
      { letter: 'O', title: 'Ownership', text: 'Name the business owner, control owner, model owner, and approval authority.' },
      { letter: 'T', title: 'Thresholds', text: 'Set confidence, source-conflict, customer-impact, regulatory, and exception-escalation thresholds.' },
      { letter: 'P', title: 'Proof Trail', text: 'Retain the prompt, model/version, sources used, tool calls, confidence score, exception path, reviewer decision, and final disposition.' },
      { letter: 'R', title: 'Review Point', text: 'Place human approval before customer impact, entitlement change, payment action, remediation closure, or regulatory disposition.' },
      { letter: 'I', title: 'Inspection', text: 'Monitor drift, hallucination patterns, override rates, tool-call anomalies, downstream corrections, and exception leakage.' },
      { letter: 'N', title: 'Normal Fallback', text: 'Define fallback to manual processing, deterministic rules, RPA fallback, or business-owner escalation.' },
      { letter: 'T', title: 'Testability', text: 'Use scenario testing, sampling, red-team prompts, control testing, audit review, and periodic governance challenge.' }
    ],
    closingBody: [
      'The evidence trail has to be engineered before the workflow goes live. Once fog enters production, reconstructing accountability becomes much harder.'
    ]
  };

  const rpaPart2Article = {
    title: 'From RPA to Agentic AI: The New Control Problem — Part 2: Capability Is Not Permission',
    slug: 'from-rpa-to-agentic-ai-new-control-problem-part-2-capability-is-not-permission',
    category: 'AI Governance and Controls',
    author: 'Juan A. Martinez Diaz',
    tags: ['AI Governance', 'Operational Risk', 'Agentic AI', 'Control Design', 'Human Oversight'],
    metaTitle: 'From RPA to Agentic AI: The New Control Problem — Part 2: Capability Is Not Permission | Juan Martinez',
    metaDescription: 'Capability is not permission. A practical control argument for separating what an AI agent can do from what it has authority to do.',
    socialDescription: 'An AI agent can produce the right answer and still take the wrong path to get there.',
    subtitle: 'Capability Is Not Permission',
    articleAnchorOrUrl: '/from-rpa-to-agentic-ai-new-control-problem-part-2-capability-is-not-permission',
    callToActionText: 'Read Part 1 here:',
    fullReadMoreUrl: 'https://www.juanmartinez.ai/from-rpa-to-agentic-ai-new-control-problem-part-1',
    canonicalUrl: 'https://www.juanmartinez.ai/from-rpa-to-agentic-ai-new-control-problem-part-2-capability-is-not-permission',
    showStandaloneCallToAction: true,
    originalVisiblePostingDate: 'August 19, 2026',
    publishedDateIso: '2026-08-19',
    homepageFeaturedDate: 'August 19, 2026',
    archiveNote: 'Part 2 of the From RPA to Agentic AI series.',
    body: [
      'In Part 1, I wrote about what happens to the evidence trail when artificial intelligence agents enter workflows that were once largely rules-based. Robotic Process Automation (RPA) tended to fail visibly. When a rule failed or required information was missing, the process stopped, and someone could usually determine why.',
      'AI agents are different. They can interpret what they encounter and find another way forward. That flexibility is useful, but it creates a control problem we did not have to confront in quite the same way with RPA.',
      'An agent can produce the right answer and still take the wrong path to get there.'
    ],
    sections: [
      {
        heading: 'Capability Does Not Create Authority',
        blocks: [
          'Consider an employee requesting elevated access to a production system. The employee qualifies and the manager approves the request, so the agent grants the access. Everything appears fine until someone discovers that a required system-owner approval was missing.',
          'The transaction was completed, and the employee may even have had a legitimate business need. But the agent’s technical ability to execute the change had been mistaken for authority to make the decision.',
          'A great deal of the AI conversation has centered on what these systems can do. We have watched them move from generating text to analyzing information, using tools, and performing increasingly complex work. Now they are beginning to act inside operational workflows.',
          'An agent may be authorized to gather information and recommend a decision without having authority to execute it. That separation looks straightforward in a policy. It becomes much less obvious when the technology can perform the entire process from beginning to end.',
          'If the agent can review the access request, determine that the employee qualifies, prepare the entitlement change, and technically execute it, where exactly do we tell it to stop?',
          'That boundary has to be designed.'
        ]
      },
      {
        heading: 'Give the Agent a Boundary',
        blocks: [
          'I think we should begin thinking about agents in terms of authority rather than capability. What may the agent see? What may it recommend? What may it actually do?',
          'Those three questions create a useful control boundary.',
          'An agent reviewing an access request may need permission to read the policy and examine the supporting evidence. It may also be useful for the agent to recommend approval or escalation. Neither permission necessarily gives it authority to change someone’s access.',
          'That final step belongs to whoever the organization has decided can make that decision. The technology may be capable of crossing the boundary, but the control should prevent it from doing so.'
        ]
      },
      {
        heading: 'Sometimes the Correct Answer Is Stop',
        blocks: [
          'Automation has traditionally rewarded completion. We measure transactions processed, time saved, and work completed. Those measures make sense when the process follows predictable rules.',
          'Agentic systems introduce another measure that deserves equal attention: whether the agent knew when not to continue.',
          'Suppose required evidence is missing or two approved sources disagree. The agent may be capable of making an inference and continuing the workflow. I want it to recognize the exception, preserve what it found, and send the decision to the person who owns it.',
          'A controlled refusal is not a failed transaction. Sometimes it is evidence that the control worked.'
        ]
      },
      {
        heading: 'The Human Approval Problem',
        blocks: [
          'There is another weakness hiding inside many discussions about AI governance: the phrase “human in the loop.”',
          'Putting a person at the end of a workflow does not automatically create meaningful oversight. If an agent reviews the case, resolves inconsistencies, selects the evidence, and presents the reviewer with “Recommended: Approve,” the human may technically own the final click. But the agent has already shaped almost everything the reviewer sees.',
          'That can turn human approval into ceremony.',
          'The reviewer needs enough evidence to challenge the recommendation, not simply accept it. Missing or conflicting information should be visible. The record should also show when the agent reached the edge of its authority.',
          'The evidence has to travel with the decision.'
        ]
      },
      {
        heading: 'Show Me What Happened',
        blocks: [
          'I do not need an AI system to produce pages describing everything it supposedly thought about while completing a task. I need something more useful.',
          'I need the record.',
          'What evidence did the agent use? What action did it take or recommend? Who ultimately authorized the decision?',
          'With those facts, we can begin reconstructing what happened. Without them, even a correct outcome can become difficult to defend later.',
          'Anyone who has worked around Risk, Audit, or Compliance knows where this eventually leads. Months after the transaction is complete, someone asks a very simple question:',
          'Show me what happened.',
          'The organization should be able to answer.'
        ]
      },
      {
        heading: 'We May Be Measuring the Wrong Things',
        blocks: [
          'Speed and productivity will continue to matter. Organizations are investing heavily in AI and will understandably want to know whether those investments improve performance.',
          'But speed alone tells us very little about control. I also want to know whether the agent recognized exceptions, remained within its authority, and left enough evidence to reconstruct an important decision.',
          'Those measurements tell us something productivity statistics cannot. They tell us whether the system remained under control while doing the work.'
        ]
      },
      {
        heading: 'Capability Is Not Permission',
        blocks: [
          'AI agents will continue becoming more capable. They will use more tools, reach more systems, and perform more of the work that currently requires human intervention. That makes the boundary around their authority increasingly important.',
          'Organizations will have to decide where assistance ends and authority begins. That boundary should exist before the agent enters production, not after an incident forces someone to define it.',
          'Eventually, an agent will encounter something its designers did not anticipate. It may understand the situation, know what action would resolve it, and possess the technical ability to execute that action.',
          'Whether it can do it will not be the problem.',
          'Whether it should have been allowed to do it will be.'
        ]
      }
    ]
  };

  const humanJudgmentArticle = {
    title: 'AI Is Not an Answer Machine. It Is a Test of Human Judgment.',
    slug: 'ai-human-judgment-education',
    category: 'Human-Centered AI',
    author: 'Juan A. Martinez Diaz',
    tags: ['AI in Education', 'Critical Thinking', 'Digital Wisdom', 'Human Agency', 'AI Ethics', 'Future of Learning'],
    subtitle: 'A research-backed argument for teaching students to use AI as a disciplined partner in thought — not as a substitute for judgment, curiosity, or human agency.',
    socialDescription: 'The future of learning will not be defined by who can prompt the fastest. It will be defined by who can think clearly when fluent machines are in the room.',
    articleAnchorOrUrl: '/ai-human-judgment-education',
    callToActionText: 'Read the full feature here:',
    fullReadMoreUrl: 'https://www.juanmartinez.ai/ai-human-judgment-education',
    originalVisiblePostingDate: 'May 29, 2026',
    homepageFeaturedDate: 'May 29, 2026',
    archiveNote: 'Preserved in the featured archive with its original posting date.',
    callout: {
      title: 'The Human Agency Test for AI Use',
      intro: 'Before accepting an AI-generated answer, ask:',
      items: [
        'What did I think before AI responded?',
        'What assumptions is the AI making?',
        'What evidence supports or challenges this answer?',
        'What perspective is missing?',
        'What part of this decision remains mine alone?'
      ],
      bottomLine: 'AI can assist the work. It cannot own the wisdom.'
    },
    body: [
      'The easiest conversation about AI in education is access.',
      'The harder conversation is agency.',
      'Children already have access. According to Pew Research Center, 64% of U.S. teens report using AI chatbots, and 54% say they have used them for help with schoolwork. One in ten teens says chatbots help with all or most of their schoolwork.',
      'The adoption debate is largely over.',
      'The formation debate has just begun.',
      'The real question is not whether students will use AI.',
      'They will.',
      'The real question is whether they will learn to use it without becoming passive in the presence of polished output.',
      'That is the risk.',
      'Not that AI will become intelligent. That students will mistake fluency for intelligence. That they will confuse speed with understanding. That they will treat a generated answer as the end of thought rather than the beginning of inquiry.',
      'AI can be a tutor, editor, challenger, translator, simulator, pattern detector, and research assistant.',
      'It can also become an intellectual crutch.',
      'Which role it plays depends less on the technology itself and more on the habits, expectations, and guardrails surrounding its use.',
      'RAND’s research shows how quickly this issue is moving. Among middle school, high school, and college students, AI use for homework rose from 48% in May 2025 to 62% in December 2025. Even more important, 67% of students agreed that the more students use AI for schoolwork, the more it will harm critical thinking.',
      'That data point matters.',
      'This is not simply adults panicking about a new technology. Students themselves are sensing the tradeoff. They know AI helps. They also know something may be getting weaker when the machine does too much of the mental lifting.',
      'The issue is not AI use.',
      'The issue is cognitive outsourcing.',
      'There is a difference between using AI to clarify your thinking and using AI to avoid thinking. There is a difference between asking AI to challenge your assumptions and asking it to manufacture your conclusion. There is a difference between using AI as a thinking partner and treating it as an answer machine.',
      'That distinction should become foundational in education.',
      'RAND also found that 54% of students and 53% of English language arts, math, and science teachers used AI for school in 2025. Yet more than 80% of students reported that teachers had not explicitly taught them how to use AI for schoolwork.',
      'That is the gap.',
      'Students are using AI, but many are not being formed in how to use it.',
      'When institutions fail to teach disciplined AI use, students do not stop using AI. They learn from the platform, from peers, from shortcuts, from panic, and from trial and error.',
      'That becomes the hidden curriculum.',
      'And hidden curricula are rarely wise.',
      'The wrong response is to frame AI only as cheating.',
      'The wrong response is also to celebrate every use of AI as innovation.',
      'Both positions are too shallow.',
      'Bans push use underground. Uncritical adoption turns learning into workflow optimization. The better path is structured use with clear intellectual expectations.',
      'The question should not be, “Should students use AI?”',
      'The better question is: what parts of thinking should never be delegated?',
      'A student can use AI to generate counterarguments. A student can use AI to compare explanations. A student can use AI to identify weak logic. A student can use AI to rehearse a debate, simplify a complex topic, or pressure-test a thesis.',
      'But the student must still own the judgment.',
      'The meaning belongs to the human. The values belong to the human. The responsibility belongs to the human.',
      'This is where educational AI must become more disciplined.',
      'The U.S. Department of Education has framed “humans in the loop” as a central criterion for AI in education. Its guidance emphasizes that AI does not possess the broad contextual judgment people do, and that educators must retain judgment and control over instructional decisions.',
      'UNESCO reaches a similar conclusion from a global perspective. Its guidance calls for a human-centered approach to generative AI in education, including privacy protection, age-appropriate use, ethical validation, and pedagogical design.',
      'NIST’s framework for trustworthy AI reinforces the same point from a risk and governance perspective: trustworthy AI depends on validity, reliability, safety, accountability, transparency, explainability, privacy, and fairness. It also notes that human judgment is essential in determining context-appropriate thresholds for trustworthiness.',
      'Put plainly: AI literacy is not just prompt literacy.',
      'Prompting is the interface. Judgment is the discipline.',
      'A student who can write clever prompts but cannot evaluate the answer is not AI literate. That student is simply dependent at a higher level of sophistication.',
      'Real AI literacy requires four deeper capacities.',
      'First, functional literacy: understanding what the tool can and cannot do.',
      'Second, ethical literacy: knowing what should not be delegated.',
      'Third, rhetorical literacy: recognizing how language can persuade even when it is unsupported.',
      'Fourth, pedagogical literacy: understanding how AI can support learning rather than replace the work of learning.',
      'Stanford’s AI literacy framework points in this direction, emphasizing functional, ethical, rhetorical, and pedagogical domains. Stanford’s teaching guidance also stresses reflection and metacognition so AI becomes part of student learning rather than a substitute for it.',
      'That is the line.',
      'AI should make learning more demanding, not less.',
      'It should force better questions. It should expose weaker assumptions. It should expand perspective. It should make students defend their conclusions with greater precision.',
      'The danger is not that AI gives students answers.',
      'The danger is that it gives them answers before they have built the internal muscle to question them.',
      'OECD’s Digital Education Outlook makes the same distinction. It warns that general-purpose generative AI can help students produce better task outputs without necessarily producing learning gains. It also notes that cognitive offloading can create risks of metacognitive laziness and disengagement, while generative AI used with clear pedagogical intent can support critical thinking, creativity, collaboration, and sustained learning.',
      'That should become the standard.',
      'Not “Did AI help you finish?”',
      'But: did AI help you think? Did it make your reasoning stronger? Did it reveal what you missed? Did it force you to revise? Did it deepen your understanding? Did you remain responsible for the final judgment?',
      'This is where education, leadership, and risk governance intersect.',
      'Every school, company, and institution adopting AI is creating a control environment whether it names it or not. There are questions of permitted use, data protection, source validation, human review, decision rights, transparency, escalation, and accountability.',
      'But the most important control is not a policy document.',
      'It is the human habit of not surrendering agency.',
      'For students, that means learning to think before prompting. For teachers, it means designing assignments where AI use strengthens reasoning rather than bypassing it. For parents, it means asking children not just what AI produced, but what they concluded and why. For leaders, it means resisting the lazy metric of output volume and asking whether AI is improving judgment.',
      'The future will not belong merely to people who know how to use AI.',
      'It will belong to people who can think clearly with AI in the room.',
      'That is the educational challenge of this moment.',
      'Not dependency. Not fear. Not blind acceleration. Not intellectual outsourcing dressed up as innovation.',
      'Discernment. Reflection. Verification. Moral judgment. Human agency.',
      'AI can help build a better future of learning. But only if we stop teaching it as an answer machine and start teaching it as a disciplined partner in thought.',
      'The future of education is not humans versus AI.',
      'The future is whether humans can use AI without becoming smaller in the process.'
    ],
    sources: [
      { label: 'Pew Research Center, “How Teens Use and View AI,” February 2026', href: 'https://www.pewresearch.org/internet/2026/02/24/how-teens-use-and-view-ai/' },
      { label: 'RAND, student AI use research report', href: 'https://www.rand.org/pubs/research_reports/RRA4742-1.html' },
      { label: 'RAND, teacher and student AI use research report', href: 'https://www.rand.org/pubs/research_reports/RRA4180-1.html' },
      { label: 'U.S. Department of Education, “Artificial Intelligence and Future of Teaching and Learning”', href: 'https://www.ed.gov/sites/ed/files/documents/ai-report/ai-report.pdf' },
      { label: 'UNESCO, “Guidance for generative AI in education and research”', href: 'https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research' },
      { label: 'NIST AI Risk Management Framework: trustworthy AI characteristics', href: 'https://airc.nist.gov/airmf-resources/airmf/3-sec-characteristics/' },
      { label: 'OECD Digital Education Outlook 2026', href: 'https://www.oecd.org/en/publications/oecd-digital-education-outlook-2026_062a7394-en.html' },
      { label: 'Stanford Teaching Commons, Understanding AI Literacy', href: 'https://teachingcommons.stanford.edu/teaching-guides/artificial-intelligence-teaching-guide/understanding-ai-literacy' }
    ]
  };


  const aiFluencyPremiumArticle = {
    title: 'The Artificial Intelligence Fluency Premium Is Becoming the Real Jobs Story',
    slug: 'ai-fluency-premium',
    category: 'AI, Work, and Human Advantage',
    author: 'Juan A. Martinez Diaz',
    tags: ['Artificial Intelligence', 'Future of Work', 'AI Fluency', 'Workforce Strategy', 'Human Judgment', 'Career Resilience'],
    subtitle: 'Artificial intelligence may not erase work as quickly as feared. The more immediate risk is that opportunity shifts toward people who know how to use it with judgment, context, and discipline.',
    socialDescription: 'The real labor-market divide may not be humans versus artificial intelligence. It may be between workers who can turn artificial intelligence into better judgment, faster learning, and stronger execution — and workers who cannot.',
    articleAnchorOrUrl: '/ai-fluency-premium',
    callToActionText: 'Read the full feature here:',
    fullReadMoreUrl: 'https://www.juanmartinez.ai/ai-fluency-premium',
    originalVisiblePostingDate: 'June 22, 2026',
    homepageFeaturedDate: 'June 22, 2026',
    archiveNote: '',
    callout: {
      title: 'A practical AI fluency checklist',
      intro: 'Being fluent with artificial intelligence is not the same thing as using a chatbot. A useful worker can:',
      items: [
        'Break work into tasks that artificial intelligence can and cannot responsibly support.',
        'Write clear instructions, constraints, examples, and success criteria.',
        'Check outputs against source evidence, business context, and risk appetite.',
        'Use artificial intelligence to compare options, not to avoid making decisions.',
        'Protect sensitive data, customer information, and confidential business context.',
        'Translate machine output into action that a team, customer, regulator, or executive can trust.',
        'Keep learning as tools, workflows, and expectations change.'
      ],
      bottomLine: 'The premium is not for prompting. The premium is for judgment amplified by artificial intelligence.'
    },
    body: [
      'I am less convinced by the simple version of the artificial intelligence (AI) jobs panic.',
      'That does not mean the risk is fake. It means the story is probably more uneven, more practical, and more uncomfortable than “AI takes all the jobs.”',
      'The stronger signal is not mass unemployment. It is separation.',
      'People who learn to use AI well may become more valuable. People whose work can be reduced to routine output may find the labor market less forgiving.',
      'That is a different problem.',
      'It is also the one leaders should be preparing for.',
      'The International Labour Organization (ILO) has been careful on this point. Its global analysis of generative AI found that the overwhelming effect is more likely to be augmentation than full automation. Most jobs are only partly exposed. The larger impact may be job quality: intensity, autonomy, and how much control workers retain over the work.',
      'The International Monetary Fund (IMF) is more cautious, and more sobering. It estimates that almost 40% of global employment is exposed to AI, rising to about 60% in advanced economies. But exposure is not the same as disappearance. Some exposed jobs are more likely to be complemented. Others are more vulnerable to substitution.',
      'That distinction matters because it points to where returns may concentrate.',
      'AI fluency is becoming a labor-market advantage.',
      'By AI fluency, I do not mean typing clever prompts into a tool. I mean the ability to use AI to improve real work: framing the problem, selecting the right task, setting constraints, checking the output, protecting sensitive information, applying context, and turning machine assistance into a better human decision.',
      'That is not a technical skill alone.',
      'It is a judgment skill.',
      'The industry data is already moving in that direction. Microsoft and LinkedIn’s Work Trend Index reported that 75% of global knowledge workers were using generative AI at work. It also found that 66% of leaders said they would not hire someone without AI skills, and 71% said they would rather hire a less experienced candidate with AI skills than a more experienced candidate without them.',
      'Those numbers should get attention.',
      'They do not prove that every hiring manager will behave that way. They do show that AI aptitude is moving from novelty to expectation.',
      'PwC’s AI Jobs Barometer makes a similar point from the labor-market side. PwC reports that skills required for the most AI-exposed jobs are changing more than twice as fast as those for the least exposed roles. It also reports that “professionalised” jobs — roles reshaped by AI to require more human expertise — are growing twice as fast as “democratised” roles, with 42% faster wage growth since 2021.',
      'That is the AI fluency premium in plain language.',
      'The market is not only rewarding people who know AI exists. It is beginning to reward people who can combine AI with expertise, judgment, leadership, creativity, empathy, and execution.',
      'The World Economic Forum (WEF) points in the same direction. Its Future of Jobs Report 2025 says AI and big data are expected to be among the fastest-growing skills through 2030. It also says 63% of employers identify skills gaps as a major barrier to business transformation, while 85% plan to prioritize upskilling their workforce.',
      'The National Bureau of Economic Research (NBER) study “Generative AI at Work” gives a useful example of what this can look like inside a real workflow. In a study of 5,179 customer support agents, access to a generative AI assistant increased productivity by 14% on average. The gains were larger for novice and lower-skilled workers, suggesting that AI can help people move faster down the experience curve when the tool is embedded in the work.',
      'That finding is important because it cuts against a lazy assumption.',
      'The AI advantage may not belong only to elite technologists. It may also belong to practical workers who learn faster, compare options better, communicate more clearly, and use AI to close experience gaps.',
      'But there is a catch.',
      'AI does not automatically make someone better at work. It can also make weak work faster.',
      'A person who cannot define the problem will prompt the wrong problem. A person who cannot evaluate evidence will accept polished nonsense. A person who does not understand risk will move confidential or regulated work into unsafe tools. A person who lacks judgment will use AI to sound more confident than the facts allow.',
      'That is why AI fluency has to be broader than tool use.',
      'It has five parts.',
      'First, task judgment. Know which parts of the work should be accelerated, which should be reviewed, and which should not be delegated.',
      'Second, instruction quality. Give the system context, constraints, examples, and standards. Vague work in produces vague work out.',
      'Third, verification discipline. Check sources, assumptions, calculations, citations, and missing context before trusting the output.',
      'Fourth, domain understanding. AI is most useful when paired with someone who understands the business, the customer, the process, the risk, and the consequences.',
      'Fifth, ethical and operational control. Protect data. Respect policy. Know when human approval is required. Keep evidence of important decisions.',
      'This is where companies often get the training problem wrong.',
      'They teach the tool before teaching the work.',
      'The better approach is to teach people how AI changes the work itself. What gets faster? What gets riskier? What becomes more valuable? What should remain human? What needs a new control? What does “good” look like now that the first draft is cheap?',
      'For workers, the practical path is clear.',
      'Start with your own workflow. Identify the repetitive parts, the research-heavy parts, the communication-heavy parts, and the decision-heavy parts. Use AI first where the stakes are low and the feedback is fast. Build a habit of asking it for alternatives, assumptions, counterarguments, summaries, and structure. Then verify everything that matters.',
      'Do not outsource your judgment.',
      'Use AI to put more pressure on it.',
      'For leaders, the responsibility is different.',
      'If AI fluency becomes a premium, then organizations cannot leave it to individual improvisation. They need clear permitted-use rules, secure tools, role-specific training, updated career paths, and managers who know how to evaluate AI-assisted work. They also need to protect entry-level development. If AI compresses the early career ladder, companies will have to become more intentional about apprenticeship, feedback, and judgment-building.',
      'The Bureau of Labor Statistics (BLS) still projects total United States employment to grow from 2024 to 2034. The future is not obviously jobless. But the composition of advantage is changing.',
      'That is the point.',
      'The labor market may not simply divide between people replaced by AI and people untouched by it.',
      'It may divide between people who can use AI to produce better work and people whose work becomes easier to copy, measure, fragment, or automate.',
      'Artificial general intelligence (AGI) and artificial superintelligence (ASI) may dominate the long-term debate. The nearer-term question is more concrete: can people use today’s AI systems to become more capable without becoming more dependent?',
      'That is where the premium will be.',
      'Not in using AI for everything.',
      'In knowing what to use it for, what not to trust, and how to turn its speed into better human work.'
    ],
    sources: [
      { label: 'International Labour Organization (ILO), “Generative AI and Jobs: A global analysis of potential effects on job quantity and quality”', href: 'https://www.ilo.org/publications/generative-ai-and-jobs-global-analysis-potential-effects-job-quantity-and' },
      { label: 'International Monetary Fund (IMF), “Artificial Intelligence and the Future of Work”', href: 'https://www.imf.org/en/Publications/Staff-Discussion-Notes/Issues/2024/01/14/Gen-AI-Artificial-Intelligence-and-the-Future-of-Work-542379' },
      { label: 'Microsoft and LinkedIn, “AI at Work Is Here. Now Comes the Hard Part”', href: 'https://www.microsoft.com/en-us/worklab/work-trend-index/ai-at-work-is-here-now-comes-the-hard-part' },
      { label: 'PwC, “AI Jobs Barometer”', href: 'https://www.pwc.com/gx/en/services/ai/ai-jobs-barometer.html' },
      { label: 'World Economic Forum (WEF), “The Future of Jobs Report 2025”', href: 'https://www.weforum.org/publications/the-future-of-jobs-report-2025/digest/' },
      { label: 'National Bureau of Economic Research (NBER), “Generative AI at Work”', href: 'https://www.nber.org/papers/w31161' },
      { label: 'United States Bureau of Labor Statistics (BLS), “Occupations with the most job growth, 2024 and projected 2034”', href: 'https://www.bls.gov/emp/tables/occupations-most-job-growth.htm' }
    ]
  };

  const featuredArticles = [careerRecoveryArticle, thoughtPartnerArticle, workflowArticle, rpaPart2Article, aiFluencyPremiumArticle, humanJudgmentArticle, rpaArticle];
  const articleRoutes = {
    '/career-recovery': careerRecoveryArticle,
    '/stop-starting-with-ai-start-with-the-workflow': workflowArticle,
    '/thought-partner': thoughtPartnerArticle,
    '/from-rpa-to-agentic-ai-new-control-problem-part-2-capability-is-not-permission': rpaPart2Article,
    '/ai-fluency-premium': aiFluencyPremiumArticle,
    '/ai-human-judgment-education': humanJudgmentArticle,
    '/from-rpa-to-agentic-ai-new-control-problem-part-1': rpaArticle
  };
  const currentPath = typeof window !== 'undefined' ? window.location.pathname.replace(/\/$/, '') || '/' : '/';
  const isContentAnalyticsDashboard = currentPath === contentAnalyticsDashboardPath;
  const isMartinezMethodPage = currentPath === '/martinez-method';
  const currentStandaloneArticle = articleRoutes[currentPath] || null;
  const isArticlePage = Boolean(currentStandaloneArticle);

  const getArticleAnalyticsMetadata = (article) => {
    const slug = getSlugFromArticle(article);
    const configuredMetadata = articleAnalyticsBySlug[slug] || {};
    const campaign = getCampaign() || configuredMetadata.campaign || slug;

    return {
      title: article.title,
      slug,
      published_date: article.publishedDateIso || configuredMetadata.published_date || article.originalVisiblePostingDate,
      category: article.category || configuredMetadata.category || 'Article',
      campaign,
      author: article.author || configuredMetadata.author || 'Juan A. Martinez Diaz, MBA',
      estimated_read_time: configuredMetadata.estimated_read_time || estimateReadTime(article)
    };
  };

  const currentArticleAnalyticsMetadata = currentStandaloneArticle
    ? getArticleAnalyticsMetadata(currentStandaloneArticle)
    : null;

  const trackContactIntent = (destination) => {
    if (!currentArticleAnalyticsMetadata) return;

    track('article_contact_intent', {
      article_slug: currentArticleAnalyticsMetadata.slug,
      article_title: currentArticleAnalyticsMetadata.title,
      published_date: currentArticleAnalyticsMetadata.published_date,
      category: currentArticleAnalyticsMetadata.category,
      campaign: currentArticleAnalyticsMetadata.campaign,
      author: currentArticleAnalyticsMetadata.author,
      estimated_read_time: currentArticleAnalyticsMetadata.estimated_read_time,
      destination
    });

    if (destination === 'linkedin_profile') {
      track('linkedin_profile_click', {
        article_slug: currentArticleAnalyticsMetadata.slug,
        article_title: currentArticleAnalyticsMetadata.title,
        published_date: currentArticleAnalyticsMetadata.published_date,
        category: currentArticleAnalyticsMetadata.category,
        campaign: currentArticleAnalyticsMetadata.campaign,
        author: currentArticleAnalyticsMetadata.author,
        estimated_read_time: currentArticleAnalyticsMetadata.estimated_read_time,
        destination: 'linkedin'
      });
    }
  };

  const renderArticleSection = (article, standalone = false) => (
    <section
      key={article.title}
      id={article.articleAnchorOrUrl.replace(/^#|\//, '')}
      className={`mx-auto max-w-4xl px-6 ${standalone ? 'py-16 md:py-24' : 'py-20'}`}
    >
      <article className="overflow-hidden rounded-[2rem] border border-[color:var(--oc-line)] bg-[rgba(10,18,37,0.78)] p-8 shadow-[0_14px_36px_rgba(0,0,0,0.26),0_0_22px_rgba(99,170,255,0.06)] backdrop-blur-xl md:p-12">
        <div className="text-sm uppercase tracking-[0.2em] text-stone-400">Featured Article</div>
        {article.category && <div className="mt-3 text-sm font-medium text-[var(--oc-cyan)]">{article.category}</div>}
        {standalone ? (
          <h1 className="mt-3 break-words text-4xl font-semibold leading-tight md:text-5xl">{article.title}</h1>
        ) : (
          <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">{article.title}</h2>
        )}
        {article.subtitle && <p className="mt-4 text-lg leading-8 text-stone-300">{article.subtitle}</p>}
        {article.tags && (
          <div className="mt-5 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-[color:var(--oc-line)] bg-[rgba(8,16,31,0.72)] px-3 py-1 text-xs text-stone-300">
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="mt-6 space-y-3 text-sm text-stone-400">
          {article.author && <div>By {article.author}</div>}
          <div>Publish date: {article.originalVisiblePostingDate}</div>
          {article.archiveNote && <div>{article.archiveNote}</div>}
        </div>
        {(!standalone || article.showStandaloneCallToAction) && !article.hideCallToAction && (
        <div className="mt-6 rounded-2xl border border-[color:var(--oc-line)] bg-[rgba(8,16,31,0.72)] p-5 text-sm text-stone-300">
          <div className="font-medium text-white">{article.callToActionText}</div>
          <a href={article.fullReadMoreUrl} className="mt-2 inline-block break-all text-[var(--oc-cyan)] hover:text-white">
            {article.fullReadMoreUrl}
          </a>
        </div>
        )}
        <div className="mt-10 space-y-6 text-base leading-8 text-stone-200">
          {article.body.map((block, index) => (
            Array.isArray(block) ? (
              <ul key={index} className="list-disc space-y-3 pl-6">
                {block.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : (
              <p key={index}>{block}</p>
            )
          ))}
        </div>
        {article.sections && (
          <div className="mt-10 space-y-10 text-base leading-8 text-stone-200">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-semibold leading-tight text-white md:text-3xl">{section.heading}</h2>
                <div className="mt-5 space-y-6">
                  {section.blocks.map((block, index) => (
                    Array.isArray(block) ? (
                      <ul key={index} className="list-disc space-y-3 pl-6">
                        {block.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p key={index}>{block}</p>
                    )
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
        {article.framework && (
          <div className="mt-12 rounded-[2rem] border border-[color:var(--oc-line-strong)] bg-[rgba(8,16,31,0.82)] p-6 shadow-[0_12px_30px_rgba(0,0,0,0.22),0_0_18px_rgba(67,231,255,0.06)]">
            <h3 className="text-2xl font-semibold text-white">{article.frameworkTitle}</h3>
            <div className="mt-6 grid gap-4">
              {article.framework.map((item, index) => (
                <div key={`${item.letter}-${item.title}-${index}`} className="rounded-2xl border border-[color:var(--oc-line)] bg-[rgba(10,18,37,0.72)] p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[color:var(--oc-line-strong)] bg-[rgba(67,231,255,0.12)] text-lg font-semibold text-[var(--oc-cyan)]">
                      {item.letter}
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">{item.title}</h4>
                      <p className="mt-2 leading-7 text-stone-300">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {article.closingBody && (
          <div className="mt-10 space-y-6 text-base leading-8 text-stone-200">
            {article.closingBody.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        )}
        {article.callout && (
          <aside className="mt-10 rounded-[2rem] border border-[color:var(--oc-line-strong)] bg-[rgba(8,16,31,0.88)] p-6 shadow-[0_12px_30px_rgba(0,0,0,0.24),0_0_20px_rgba(67,231,255,0.08)]">
            <div className="text-sm uppercase tracking-[0.2em] text-stone-400">Sidebar / Callout</div>
            <h2 className="mt-3 text-2xl font-medium text-white">{article.callout.title}</h2>
            <p className="mt-4 leading-7 text-stone-300">{article.callout.intro}</p>
            <ol className="mt-5 list-decimal space-y-3 pl-5 text-stone-200">
              {article.callout.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
            <p className="mt-6 font-medium text-white">Bottom line: {article.callout.bottomLine}</p>
          </aside>
        )}
        {article.sources && (
          <section className="mt-10 rounded-[2rem] border border-[color:var(--oc-line)] bg-[rgba(8,16,31,0.72)] p-6 shadow-[0_12px_30px_rgba(0,0,0,0.22),0_0_18px_rgba(99,170,255,0.06)] backdrop-blur-xl">
            <h2 className="text-sm uppercase tracking-[0.2em] text-stone-400">Sources</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-stone-300">
              {article.sources.map((source) => (
                <li key={source.href}>
                  <a href={source.href} className="text-[var(--oc-cyan)] hover:text-white">{source.label}</a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>
    </section>
  );

  useEffect(() => {
    const articlePath = currentStandaloneArticle?.articleAnchorOrUrl;
    const articleMeta = currentStandaloneArticle ? {
      title: currentStandaloneArticle.metaTitle || `${currentStandaloneArticle.title} | Juan Martinez`,
      description: currentStandaloneArticle.metaDescription || currentStandaloneArticle.subtitle,
      socialDescription: currentStandaloneArticle.socialDescription || currentStandaloneArticle.metaDescription || currentStandaloneArticle.subtitle,
      url: currentStandaloneArticle.canonicalUrl || currentStandaloneArticle.fullReadMoreUrl
    } : null;
    const homeMeta = {
      title: 'Juan A. Martinez Diaz | Technology Leadership, Risk & Applied AI',
      description: 'The executive portfolio of Juan A. Martinez Diaz: technology leadership, cybersecurity, operational resilience, enterprise risk, and practical AI governance.',
      socialDescription: "The test of technology is what happens after everyone says yes. Explore Juan Martinez's executive record and current work.",
      url: 'https://www.juanmartinez.ai/'
    };
    const methodMeta = {
      title: martinezMethodMetadata.title,
      description: martinezMethodMetadata.description,
      socialDescription: martinezMethodMetadata.description,
      url: martinezMethodMetadata.canonical
    };

    const setMeta = (selector, value) => {
      const element = document.head.querySelector(selector);
      if (element) element.setAttribute('content', value);
    };

    const updateMeta = () => {
      const normalizedPath = window.location.pathname.replace(/\/$/, '') || '/';
      const isArticlePath = Boolean(articlePath && normalizedPath === articlePath);
      const meta = normalizedPath === '/martinez-method'
        ? methodMeta
        : isArticlePath ? articleMeta : homeMeta;

      document.title = meta.title;
      setMeta('meta[name="description"]', meta.description);
      setMeta('meta[property="og:title"]', meta.title);
      setMeta('meta[property="og:description"]', meta.socialDescription);
      setMeta('meta[property="og:url"]', meta.url);
      setMeta('meta[name="twitter:title"]', meta.title);
      setMeta('meta[name="twitter:description"]', meta.socialDescription);

      const canonical = document.head.querySelector('link[rel="canonical"]');
      if (canonical) canonical.setAttribute('href', meta.url);

      const existingSchema = document.getElementById('article-schema');
      if (existingSchema) existingSchema.remove();

      if (isArticlePath) {
        const schema = document.createElement('script');
        schema.id = 'article-schema';
        schema.type = 'application/ld+json';
        schema.textContent = JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: currentStandaloneArticle.title,
          description: articleMeta.description,
          author: { '@type': 'Person', name: currentStandaloneArticle.author },
          publisher: { '@type': 'Person', name: currentStandaloneArticle.author },
          datePublished: currentStandaloneArticle.publishedDateIso || (currentStandaloneArticle.originalVisiblePostingDate === 'June 22, 2026' ? '2026-06-22' : '2026-05-29'),
          dateModified: currentStandaloneArticle.publishedDateIso || (currentStandaloneArticle.originalVisiblePostingDate === 'June 22, 2026' ? '2026-06-22' : '2026-05-29'),
          mainEntityOfPage: articleMeta.url,
          image: 'https://www.juanmartinez.ai/og-image.svg',
          articleSection: currentStandaloneArticle.category,
          keywords: currentStandaloneArticle.tags.join(', ')
        });
        document.head.appendChild(schema);
      }
    };

    const scrollToArticlePath = () => {
      const normalizedPath = window.location.pathname.replace(/\/$/, '') || '/';
      if (!articlePath || normalizedPath !== articlePath) return false;
      const target = document.getElementById(articlePath.replace(/^#|\//, ''));
      if (!target) return false;
      window.requestAnimationFrame(() => {
        target.scrollIntoView({ behavior: 'auto', block: 'start' });
      });
      return true;
    };

    const scrollToHash = () => {
      updateMeta();

      if (scrollToArticlePath()) return;

      const hash = window.location.hash;

      if (!hash) return;

      const target = document.getElementById(decodeURIComponent(hash.slice(1)));

      if (!target) return;

      window.requestAnimationFrame(() => {
        target.scrollIntoView({ behavior: 'auto', block: 'start' });
      });
    };

    const timeoutId = window.setTimeout(scrollToHash, 0);

    window.addEventListener('hashchange', scrollToHash);
    window.addEventListener('popstate', scrollToHash);

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener('hashchange', scrollToHash);
      window.removeEventListener('popstate', scrollToHash);
    };
  }, [
    currentStandaloneArticle
  ]);

  useEffect(() => {
    if (!currentArticleAnalyticsMetadata) return undefined;

    trackArticleEventOnce('article_viewed', currentArticleAnalyticsMetadata);

    const trackReadDepth = () => {
      const documentElement = document.documentElement;
      const scrollableHeight = documentElement.scrollHeight - window.innerHeight;
      const scrollDepth = scrollableHeight <= 0 ? 1 : (window.scrollY / scrollableHeight);
      const scrollPercentage = Math.min(100, Math.round(scrollDepth * 100));

      if (scrollPercentage >= 75) {
        trackArticleEventOnce('article_read_75_percent', currentArticleAnalyticsMetadata, {
          read_percentage: 75
        });
      }

      if (scrollPercentage >= 95) {
        trackArticleEventOnce('article_completed', currentArticleAnalyticsMetadata, {
          completion_percentage: scrollPercentage
        });
      }

      const completionKey = `article:article_completed:${currentArticleAnalyticsMetadata.slug}:${currentArticleAnalyticsMetadata.campaign}`;
      try {
        if (window.sessionStorage.getItem(completionKey)) {
          window.removeEventListener('scroll', trackReadDepth);
        }
      } catch {
        if (scrollPercentage >= 95) {
          window.removeEventListener('scroll', trackReadDepth);
        }
      }
    };

    trackReadDepth();
    window.addEventListener('scroll', trackReadDepth, { passive: true });

    return () => {
      window.removeEventListener('scroll', trackReadDepth);
    };
  }, [
    currentArticleAnalyticsMetadata
  ]);

  if (isContentAnalyticsDashboard) {
    return <ContentAnalyticsDashboard />;
  }

  if (isMartinezMethodPage) {
    return <MartinezMethodPage />;
  }

  if (!isArticlePage) {
    return <ExecutiveHomePage />;
  }

  return (
    <div className="min-h-screen text-[var(--oc-text)]">
      <header className="sticky top-0 z-50 border-b border-[color:var(--oc-line)] bg-[rgba(10,18,37,0.82)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">
          <div className="min-w-0">
            <div className="text-xl font-semibold tracking-wide text-[var(--oc-text)]">Juan A. Martinez Diaz</div>
            <div className="text-sm text-[var(--oc-muted)]">AI governance, technology risk, operational resilience, and executive leadership</div>
          </div>
          <nav className="hidden gap-6 text-sm text-[var(--oc-muted)] md:flex">
            <a href="#about" className="hover:text-[var(--oc-cyan)]">About</a>
            <a href="#impact" className="hover:text-[var(--oc-cyan)]">Impact</a>
            <a href="#flagship" className="hover:text-[var(--oc-cyan)]">Flagship Perspective</a>
            <a href="/martinez-method" className="hover:text-[var(--oc-cyan)]">M.A.R.T.I.N.E.Z. Method</a>
            <a href="#point-of-view" className="hover:text-[var(--oc-cyan)]">Point of View</a>
            <a href="#contact" onClick={() => trackContactIntent('contact_section')} className="hover:text-[var(--oc-cyan)]">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        {isArticlePage ? (
          renderArticleSection(currentStandaloneArticle, true)
        ) : (
          <>
        <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-start">
            <div>
              <div className="inline-flex rounded-full border border-[color:var(--oc-line-strong)] bg-[rgba(10,18,37,0.55)] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[var(--oc-cyan)] shadow-[0_0_20px_rgba(67,231,255,0.08)]">
                AI Governance • Technology Risk • Executive Judgment • Regulated Environments
              </div>
              <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
                AI, Technology Risk, and Governance Leadership for Regulated Environments
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--oc-muted)] md:text-lg">
                Juan Martinez helps leaders translate artificial intelligence, technology risk, governance complexity, and operational pressure into decisions they can actually use.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--oc-muted)] md:text-lg">
                He brings a practical executive perspective shaped by real operating environments where control quality, resilience, and disciplined execution matter. The focus is not technology theater. It is helping organizations adopt change in ways that are useful, governable, and credible under pressure.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#flagship"
                  className="rounded-2xl border border-[color:var(--oc-line-strong)] bg-[linear-gradient(90deg,var(--oc-cyan),var(--oc-blue))] px-5 py-3 text-sm font-medium text-[#06101f] shadow-[0_0_24px_rgba(67,231,255,0.18)] transition hover:-translate-y-0.5"
                >
                  Read the flagship perspective
                </a>
                <a
                  href="https://www.linkedin.com/in/juan-martinez-diaz-mba-itil-50943411"
                  className="rounded-2xl border border-[color:var(--oc-line)] bg-[rgba(10,18,37,0.54)] px-5 py-3 text-sm font-medium text-[var(--oc-text)] transition hover:border-[color:var(--oc-line-strong)]"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>

            <aside className="rounded-[2rem] border border-[color:var(--oc-line)] bg-[rgba(10,18,37,0.72)] p-6 shadow-[0_12px_40px_rgba(0,0,0,0.28),0_0_22px_rgba(67,231,255,0.08)] backdrop-blur-xl">
              <div className="space-y-4">
                {audiencePaths.map((item) => (
                  <a key={item.title} href={item.href} className="block rounded-2xl border border-[color:var(--oc-line)] bg-[rgba(8,16,31,0.72)] p-5 transition hover:border-[color:var(--oc-line-strong)] hover:shadow-[0_0_20px_rgba(67,231,255,0.08)]">
                    <div className="text-sm text-[var(--oc-cyan)]">{item.title}</div>
                    <div className="mt-2 text-[15px] leading-7 text-[var(--oc-text)]">{item.text}</div>
                  </a>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section id="impact" className="border-y border-[color:var(--oc-line)] bg-[rgba(10,18,37,0.42)] backdrop-blur-sm">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.2em] text-stone-400">Selected Impact</p>
              <h2 className="mt-3 text-3xl font-semibold">Credibility comes from proof, not posture.</h2>
              <p className="mt-4 text-base leading-8 text-stone-300">
                These indicators show the scope, complexity, and operating context behind the work.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {impactItems.map((item) => (
                <div key={item.metric} className="rounded-[2rem] border border-[color:var(--oc-line)] bg-[rgba(8,16,31,0.72)] p-6 shadow-[0_0_18px_rgba(99,170,255,0.05)]">
                  <div className="text-3xl font-semibold text-white">{item.metric}</div>
                  <p className="mt-3 leading-7 text-stone-300">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-[color:var(--oc-line)] bg-transparent">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-stone-400">About</p>
                <h2 className="mt-3 text-3xl font-semibold">Leadership grounded in operating reality.</h2>
              </div>
              <div className="space-y-5 text-base leading-8 text-stone-300">
                <p>
                  Juan's background spans banking, military leadership, technology operations, and enterprise risk. That mix matters because it shapes a view of organizations that is grounded in what actually happens when pressure, incentives, and weak assumptions collide.
                </p>
                <p>
                  This perspective is most useful in environments where the stakes are real, the facts are messy, and leaders need clarity without drama. Strong controls matter, but control language is useless if it cannot survive contact with real operations.
                </p>
                <p id="recruiters">
                  For executive recruiters and hiring leaders, the core through-line is clear: Juan works where artificial intelligence, governance, resilience, and executive judgment meet, especially in regulated or high-consequence environments.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm uppercase tracking-[0.2em] text-stone-400">What Juan Helps Leaders Do</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold">Useful authority starts with useful outcomes.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {valueItems.map((item) => (
              <div key={item} className="rounded-2xl border border-stone-800 bg-stone-900 px-5 py-4 text-stone-200 shadow-xl">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20 pt-0">
          <p className="text-sm uppercase tracking-[0.2em] text-stone-400">Proof and Leadership Scope</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold">A stronger signal for recruiters, peers, and decision makers.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {proofItems.map((item) => (
              <div key={item.title} className="rounded-[2rem] border border-stone-800 bg-stone-900 p-7 shadow-xl">
                <h3 className="text-xl font-medium text-white">{item.title}</h3>
                <p className="mt-4 leading-7 text-stone-300">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="flagship" className="border-y border-[color:var(--oc-line)] bg-[rgba(10,18,37,0.42)] backdrop-blur-sm">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-400">Flagship Perspective</p>
            <h2 className="mt-3 max-w-4xl text-3xl font-semibold md:text-5xl">Practical AI Governance and Executive Judgment in Regulated Environments</h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-300">
              How leaders can adopt artificial intelligence without losing control, credibility, or execution discipline.
            </p>
            <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-stone-200">
              <p>
                Artificial intelligence is becoming an executive issue, not just a technical one. In regulated environments, the question is not simply where AI can create value. The question is whether leaders can adopt it in ways that preserve accountability, protect control quality, and strengthen execution rather than weaken it.
              </p>
              <p>
                Useful AI depends on governance, operating discipline, clear decision rights, and an honest understanding of where complexity can break a system that looks stable on paper.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {flagshipSections.map((section) => (
                <div key={section.title} className="rounded-[2rem] border border-[color:var(--oc-line)] bg-[rgba(8,16,31,0.78)] p-7 shadow-[0_12px_30px_rgba(0,0,0,0.22),0_0_18px_rgba(67,231,255,0.06)] backdrop-blur-xl">
                  <h3 className="text-xl font-medium text-white">{section.title}</h3>
                  <p className="mt-4 leading-7 text-stone-300">{section.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 rounded-[2rem] border border-[color:var(--oc-line-strong)] bg-[rgba(8,16,31,0.82)] p-8 shadow-[0_14px_40px_rgba(0,0,0,0.28),0_0_24px_rgba(67,231,255,0.08)] backdrop-blur-xl">
              <h3 className="text-2xl font-medium text-white">Questions executive teams should be asking now</h3>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {questionItems.map((item) => (
                  <div key={item} className="rounded-2xl border border-stone-800 bg-stone-900 px-5 py-4 text-stone-200">
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-8 max-w-3xl text-base leading-8 text-stone-300">
                Juan Martinez works at the intersection of artificial intelligence, technology risk, governance, resilience, and operating reality. His focus is practical: helping leaders translate emerging technology into decisions they can use, connect AI opportunity to governance reality, and keep transformation useful, governable, and grounded in real work.
              </div>
            </div>
          </div>
        </section>

        <section id="point-of-view" className="border-y border-[color:var(--oc-line)] bg-[rgba(8,16,31,0.35)] backdrop-blur-sm">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-400">Point of View</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold">Perspectives on AI, risk, and accountable execution.</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {povItems.map((item) => (
                <a key={item.title} href={item.href} className="block rounded-[2rem] border border-[color:var(--oc-line)] bg-[rgba(10,18,37,0.72)] p-7 shadow-[0_12px_30px_rgba(0,0,0,0.22),0_0_18px_rgba(99,170,255,0.06)] transition hover:-translate-y-1 hover:border-[color:var(--oc-line-strong)] hover:shadow-[0_14px_36px_rgba(0,0,0,0.24),0_0_20px_rgba(67,231,255,0.1)] backdrop-blur-xl">
                  <div className="text-sm text-[var(--oc-cyan)]">{item.status}</div>
                  <h3 className="mt-2 text-xl font-medium text-white">{item.title}</h3>
                  <p className="mt-4 leading-7 text-stone-300">{item.text}</p>
                  <div className="mt-5 text-sm font-medium text-stone-200">{item.status === 'Coming next' ? 'In development' : 'Read perspective'}</div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {featuredArticles.map((article) => renderArticleSection(article))}

        <section id="coming-next" className="mx-auto max-w-6xl px-6 py-20 pt-0">
          <div className="overflow-hidden rounded-[2rem] border border-[color:var(--oc-line)] bg-[rgba(10,18,37,0.78)] p-8 shadow-[0_14px_36px_rgba(0,0,0,0.26),0_0_22px_rgba(99,170,255,0.06)] backdrop-blur-xl md:p-12">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-400">Coming Next</p>
            <h2 className="mt-3 text-3xl font-semibold">Why Control Environments Fail Under Pressure</h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-stone-300">
              A practical look at the gap between elegant control language and what actually happens inside stressed operating environments.
            </p>
          </div>
        </section>

          </>
        )}

        <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
          <div className="overflow-hidden rounded-[2rem] border border-[color:var(--oc-line)] bg-[rgba(10,18,37,0.78)] p-8 shadow-[0_14px_36px_rgba(0,0,0,0.26),0_0_22px_rgba(99,170,255,0.06)] backdrop-blur-xl md:p-12">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-400">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold">If your organization needs calm, clear thinking in a noisy environment, we should talk.</h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-stone-300">
              If your work involves enterprise artificial intelligence adoption, technology risk, governance, control quality, or operational resilience, there is likely something useful to discuss.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-stone-200">
              <a href="mailto:sgmmartinez@gmail.com" onClick={() => trackContactIntent('email_click')} className="rounded-2xl border border-stone-700 px-4 py-3 transition hover:border-stone-500">Email: sgmmartinez@gmail.com</a>
              <a href="https://www.linkedin.com/in/juan-martinez-diaz-mba-itil-50943411" onClick={() => trackContactIntent('linkedin_profile')} className="rounded-2xl border border-stone-700 px-4 py-3 transition hover:border-stone-500">LinkedIn profile</a>
            </div>
            <p className="mt-6 max-w-3xl text-xs leading-6 text-stone-500">
              This site uses privacy-conscious analytics to understand page visits, traffic sources, campaign performance, and general engagement. It does not use advertising trackers, remarketing pixels, or LinkedIn Insight Tag.
            </p>
          </div>
        </section>
      </main>
      <Analytics />
    </div>
  );
}
