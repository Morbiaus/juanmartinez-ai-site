(() => {
  const replacements = new Map([
    [
      'A LinkedIn Profile Cannot Fix the Job Market. It Can Keep You from Disappearing.',
      'Why Good Experience Becomes Invisible During a Job Search'
    ],
    [
      'An evidence-backed guide to using AI to rebuild professional positioning, find better-fit opportunities, and govern an authorized job-application agent without surrendering truth or judgment.',
      'A practical system for rebuilding the record, finding roles that genuinely fit, and setting strict limits on AI-assisted applications.'
    ]
  ]);

  const syncMission15Card = () => {
    document.querySelectorAll('h1, h2, h3, h4, p, span').forEach((element) => {
      const currentText = element.textContent?.trim();
      const replacement = replacements.get(currentText);
      if (replacement) element.textContent = replacement;
    });
  };

  const observer = new MutationObserver(syncMission15Card);
  observer.observe(document.documentElement, { childList: true, subtree: true });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', syncMission15Card, { once: true });
  } else {
    syncMission15Card();
  }

  window.setTimeout(syncMission15Card, 250);
  window.setTimeout(() => {
    syncMission15Card();
    observer.disconnect();
  }, 4000);
})();
