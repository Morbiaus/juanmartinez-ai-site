export const contentAnalyticsDashboardPath = '/admin/content-analytics';

export const articleAnalyticsConfig = [
  {
    title: 'A LinkedIn Profile Cannot Fix the Job Market. It Can Keep You from Disappearing.',
    slug: 'career-recovery',
    published_date: '2026-08-24',
    category: 'AI Build Lab',
    campaign: 'career_recovery_mission_15',
    author: 'Juan A. Martinez Diaz, MBA',
    estimated_read_time: '9 min'
  },
  {
    title: 'Stop Starting with AI. Start with the Workflow.',
    slug: 'stop-starting-with-ai-start-with-the-workflow',
    published_date: '2026-07-20',
    category: 'Enterprise AI',
    campaign: 'workflow_before_ai',
    author: 'Juan A. Martinez Diaz, MBA',
    estimated_read_time: '3 min'
  },
  {
    title: 'A Thought Partner Should Make Your Thinking Harder to Fool',
    slug: 'thought-partner',
    published_date: '2026-08-19',
    category: 'AI Build Lab',
    campaign: 'thought_partner_mission_14',
    author: 'Juan A. Martinez Diaz',
    estimated_read_time: '8 min'
  },
  {
    title: 'From RPA to Agentic AI: The New Control Problem — Part 2: Capability Is Not Permission',
    slug: 'from-rpa-to-agentic-ai-new-control-problem-part-2-capability-is-not-permission',
    published_date: '2026-08-19',
    category: 'AI Governance and Controls',
    campaign: 'rpa_to_agentic_control_problem_part_2',
    author: 'Juan A. Martinez Diaz',
    estimated_read_time: '5 min'
  },
  {
    title: 'The Artificial Intelligence Fluency Premium Is Becoming the Real Jobs Story',
    slug: 'ai-fluency-premium',
    published_date: '2026-06-22',
    category: 'AI, Work, and Human Advantage',
    campaign: 'ai_fluency_premium',
    author: 'Juan A. Martinez Diaz, MBA',
    estimated_read_time: '6 min'
  },
  {
    title: 'AI Is Not an Answer Machine. It Is a Test of Human Judgment.',
    slug: 'ai-human-judgment-education',
    published_date: '2026-05-29',
    category: 'Human-Centered AI',
    campaign: 'human_judgment_education',
    author: 'Juan A. Martinez Diaz, MBA',
    estimated_read_time: '5 min'
  },
  {
    title: 'From RPA to Agentic AI: The New Control Problem — Part 1',
    slug: 'from-rpa-to-agentic-ai-new-control-problem-part-1',
    published_date: '2026-06-29',
    category: 'AI Governance and Controls',
    campaign: 'rpa_to_agentic_control_problem',
    author: 'Juan A. Martinez Diaz, MBA',
    estimated_read_time: '6 min'
  }
];

export const articleAnalyticsBySlug = Object.fromEntries(
  articleAnalyticsConfig.map((article) => [article.slug, article])
);
