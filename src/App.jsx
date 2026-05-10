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
      title: 'Why Control Environments Fail Under Pressure',
      text: 'A practical look at the gap between elegant control language and what actually happens inside stressed operating environments.',
      href: '#coming-next',
      status: 'Coming next'
    },
    {
      title: 'The Spreadsheet May Improve Before Society Does',
      text: 'AI may raise output before institutions are ready to convert that efficiency into broad opportunity, training, and mobility.',
      href: '#article-the-spreadsheet-may-improve-before-society-does',
      status: 'Currently featured'
    },
    {
      title: 'The White-Collar Squeeze Has Already Begun',
      text: 'AI is not only automating tasks. It is eroding the career ladders, entry points, and institutional norms that once made white-collar work feel durable.',
      href: '#article-the-white-collar-squeeze-has-already-begun',
      status: 'Previously featured'
    }
  ];

  const featuredArticle = {
    title: 'The Spreadsheet May Improve Before Society Does',
    subtitle: 'AI may raise output before institutions are ready to convert that efficiency into broad opportunity, training, and mobility.',
    articleAnchorOrUrl: '#article-the-spreadsheet-may-improve-before-society-does',
    callToActionText: 'Read more on this topic here:',
    fullReadMoreUrl: 'https://www.juanmartinez.ai/#article-the-spreadsheet-may-improve-before-society-does',
    originalVisiblePostingDate: 'May 11, 2026',
    homepageFeaturedDate: 'May 11, 2026',
    archiveNote: 'When a new featured article replaces this one, this article should move into the featured archive with its original posting date preserved.',
    archive: [
      {
        title: 'The Spreadsheet May Improve Before Society Does',
        originalVisiblePostingDate: 'May 11, 2026',
        status: 'Current featured article'
      },
      {
        title: 'The White-Collar Squeeze Has Already Begun',
        originalVisiblePostingDate: 'May 4, 2026',
        status: 'Previously featured article'
      },
      {
        title: 'The Quiet Erosion of White-Collar Work',
        originalVisiblePostingDate: 'April 14, 2026',
        status: 'Previously featured article'
      }
    ],
    body: [
      "AI’s productivity story is too clean.",
      "It assumes that if firms produce more with fewer people, society has moved forward.",
      "Maybe.",
      "But productivity is not the same thing as prosperity. Efficiency is not the same thing as mobility. And a better corporate spreadsheet is not proof that the labor market underneath it is getting healthier.",
      "That is the part of the AI conversation I think we are still underpricing.",
      "A company can become leaner, faster, and more profitable while the surrounding labor market becomes harder to enter, harder to climb, and less capable of producing the next generation of trusted professionals.",
      "That is not an anti-AI argument. It is a distribution argument.",
      "The evidence already points in two directions at once.",
      "On one side, AI can raise productivity. In a large real-world study of more than 5,000 customer support agents, Erik Brynjolfsson, Danielle Li, and Lindsey Raymond found that access to a generative AI assistant increased productivity by 14% on average, with much larger gains for novice and lower-skilled workers. The tool appeared to spread the practices of stronger workers and help newer workers move faster down the experience curve.",
      "That is the optimistic case.",
      "Better tools can raise the floor. They can shorten learning curves. They can make less experienced workers more effective sooner.",
      "But that same finding contains the harder question.",
      "If AI lets newer workers perform more like experienced workers, how many newer workers will firms still hire? And if AI lets already-skilled workers produce dramatically more, how much of the old training layer survives?",
      "This is where productivity becomes politically and socially complicated.",
      "Brookings has warned that more than 30% of workers could see at least half of their occupational tasks affected by generative AI, with exposure concentrated heavily in cognitive and white-collar work. Goldman Sachs Research has argued that generative AI could eventually raise labor productivity meaningfully, while also creating a transition period of job displacement. The IMF has warned that AI could affect roughly 40% of jobs globally and closer to 60% in advanced economies, with inequality effects depending on who is complemented, who is substituted, and who captures the gains.",
      "None of those institutions is saying the same thing in exactly the same way.",
      "But together they point to the same uncomfortable reality: AI may raise output and still destabilize access.",
      "That is the controversy.",
      "We are used to treating productivity as an almost sacred metric. If output per worker rises, the economy is presumed to be improving. But that assumption only holds if the gains are absorbed through institutions that can convert efficiency into broad opportunity.",
      "Hiring systems have to adapt.",
      "Education has to adapt.",
      "Apprenticeship paths have to adapt.",
      "Management practices have to adapt.",
      "Policy has to adapt.",
      "If they do not, AI may create a strange and brittle outcome: more output, fewer entry points, more leverage for already-trusted workers, and a narrower path for everyone trying to become one.",
      "The spreadsheet improves before society does.",
      "That sentence should make leaders uncomfortable.",
      "Because the incentives inside firms are immediate. If one experienced analyst with AI support can produce what previously required three junior analysts, the efficiency case is obvious. Costs fall. Cycle times improve. Margins look better. The organization appears smarter.",
      "But what happened to the two people who no longer got hired, trained, corrected, and slowly trusted?",
      "That is not sentimental. It is structural.",
      "White-collar work has never been sustained by credentials alone. It has depended on a messy ecosystem of first drafts, research passes, client support, documentation, coordination, review cycles, mistakes, correction, repetition, and gradual trust.",
      "Some of that work was inefficient.",
      "Some of it was boring.",
      "Some of it was exactly the work people now want AI to absorb.",
      "But it also taught people how organizations function. It gave them context, judgment, pattern recognition, and the right to be trusted with more serious decisions later.",
      "If firms automate too much of that layer without redesigning how people learn, they may get short-term productivity and long-term capability erosion.",
      "That is the risk.",
      "Not that AI makes people useless overnight.",
      "That AI makes the path into usefulness narrower.",
      "Microsoft’s 2025 Work Trend Index gives one version of the corporate future: leaner, more fluid organizations where agents act as research assistants, analysts, and creative partners, and where teams form around outcomes rather than fixed functions. That may be powerful. It may also be exactly the kind of model that rewards people who already know how to direct work, judge quality, and own consequences.",
      "The labor market could split around trust.",
      "On one side: people trusted to direct AI systems, evaluate outputs, make decisions, and assume accountability.",
      "On the other: people whose old tasks have been compressed before they were given enough time to build that trust.",
      "That is a much sharper divide than “AI users” versus “non-users.”",
      "The question for leaders is not only how much productivity AI can unlock. It is what kind of workforce they are building while they unlock it.",
      "Are they creating more capable humans?",
      "Or are they extracting more output from fewer trusted people while weakening the path for everyone behind them?",
      "The optimistic future is still possible.",
      "AI could raise the floor for workers, expand access to expertise, improve training, and help more people reach competence faster. The NBER evidence gives real reason to take that possibility seriously.",
      "But that future is not automatic.",
      "It has to be designed.",
      "If organizations treat AI only as a cost-takeout tool, they may quietly starve the systems that produce judgment. If policymakers treat AI only as another wave of technology adoption, they may miss the speed and distribution of the transition. If educators treat AI only as a classroom tool, they may fail to prepare students for a labor market where the first rung has changed shape.",
      "The productivity debate needs to become more honest.",
      "AI may make firms more efficient before it makes society more resilient.",
      "It may increase output before it expands opportunity.",
      "It may reward already-trusted workers before it creates a fair path for new ones.",
      "That does not mean we should resist the technology.",
      "It means we should stop pretending the spreadsheet tells the whole story.",
      "Source anchor: Brookings, “The geography of generative AI’s workforce impacts will likely differ from those of previous technologies,” notes Brookings analysis that more than 30% of workers could see at least 50% of occupational tasks affected by generative AI, with exposure concentrated in cognitive white-collar work.",
      "Source anchor: NBER, Brynjolfsson, Li, and Raymond, “Generative AI at Work,” found 14% average productivity gains among customer support agents, with larger gains for novice/lower-skilled workers and evidence AI may help workers move down the experience curve.",
      "Source anchor: Goldman Sachs Research, “How Will AI Affect the Global Workforce?” estimates generative AI could raise labor productivity substantially while producing a transition period of displacement.",
      "Source anchor: IMF, “AI Will Transform the Global Economy. Let’s Make Sure It Benefits Humanity,” warns AI could affect roughly 40% of jobs globally and a larger share in advanced economies, with inequality implications depending on policy and distribution.",
      "Source anchor: Microsoft Work Trend Index 2025, “The year the Frontier Firm is born,” describes flatter, more fluid organizations using agents as research assistants, analysts, and creative partners."
]
  };

  return (
    <div className="min-h-screen text-[var(--oc-text)]">
      <header className="sticky top-0 z-50 border-b border-[color:var(--oc-line)] bg-[rgba(10,18,37,0.82)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div>
            <div className="text-xl font-semibold tracking-wide text-[var(--oc-text)]">Juan A. Martinez Diaz</div>
            <div className="text-sm text-[var(--oc-muted)]">AI governance, technology risk, operational resilience, and executive leadership</div>
          </div>
          <nav className="hidden gap-6 text-sm text-[var(--oc-muted)] md:flex">
            <a href="#about" className="hover:text-[var(--oc-cyan)]">About</a>
            <a href="#impact" className="hover:text-[var(--oc-cyan)]">Impact</a>
            <a href="#flagship" className="hover:text-[var(--oc-cyan)]">Flagship Perspective</a>
            <a href="#point-of-view" className="hover:text-[var(--oc-cyan)]">Point of View</a>
            <a href="#contact" className="hover:text-[var(--oc-cyan)]">Contact</a>
          </nav>
        </div>
      </header>

      <main>
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
                The site should make clear that this is executive-grade work in serious environments. Here are a few indicators of scope, complexity, and operating context.
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
                <h2 className="mt-3 text-3xl font-semibold">Earned perspective, not borrowed language.</h2>
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
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold">Original thinking is how people remember you.</h2>
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

        <section id={featuredArticle.articleAnchorOrUrl.replace(/^#/, "")} className="mx-auto max-w-4xl px-6 py-20">
          <div className="rounded-[2rem] border border-[color:var(--oc-line)] bg-[rgba(10,18,37,0.78)] p-8 shadow-[0_14px_36px_rgba(0,0,0,0.26),0_0_22px_rgba(99,170,255,0.06)] backdrop-blur-xl md:p-12">
            <div className="text-sm uppercase tracking-[0.2em] text-stone-400">Featured Article</div>
            <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">{featuredArticle.title}</h2>
            <p className="mt-4 text-lg leading-8 text-stone-300">{featuredArticle.subtitle}</p>
            <div className="mt-6 space-y-3 text-sm text-stone-400">
              <div>Originally published: {featuredArticle.originalVisiblePostingDate}</div>
              <div>Featured on homepage: {featuredArticle.homepageFeaturedDate}</div>
              <div>{featuredArticle.archiveNote}</div>
            </div>
            <div className="mt-6 rounded-2xl border border-[color:var(--oc-line)] bg-[rgba(8,16,31,0.72)] p-5 text-sm text-stone-300">
              <div className="font-medium text-white">{featuredArticle.callToActionText}</div>
              <a
                href={featuredArticle.fullReadMoreUrl}
                className="mt-2 inline-block break-all text-[var(--oc-cyan)] hover:text-white"
              >
                {featuredArticle.fullReadMoreUrl}
              </a>
            </div>
            <div className="mt-10 space-y-6 text-base leading-8 text-stone-200">
              {featuredArticle.body.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-10 rounded-[2rem] border border-[color:var(--oc-line)] bg-[rgba(8,16,31,0.72)] p-6 shadow-[0_12px_30px_rgba(0,0,0,0.22),0_0_18px_rgba(99,170,255,0.06)] backdrop-blur-xl">
              <div className="text-sm uppercase tracking-[0.2em] text-stone-400">Featured Archive</div>
              <p className="mt-3 text-sm leading-7 text-stone-300">Each featured article keeps its original visible publish date when rotated off the homepage.</p>
              <div className="mt-5 space-y-3">
                {featuredArticle.archive.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-[color:var(--oc-line)] bg-[rgba(10,18,37,0.72)] p-5">
                    <div className="text-sm text-stone-400">{item.originalVisiblePostingDate}</div>
                    <div className="mt-2 text-base font-medium text-white">{item.title}</div>
                    <div className="mt-2 text-sm leading-7 text-stone-300">{item.status}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="coming-next" className="mx-auto max-w-6xl px-6 py-20 pt-0">
          <div className="rounded-[2rem] border border-[color:var(--oc-line)] bg-[rgba(10,18,37,0.78)] p-8 shadow-[0_14px_36px_rgba(0,0,0,0.26),0_0_22px_rgba(99,170,255,0.06)] backdrop-blur-xl md:p-12">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-400">Coming Next</p>
            <h2 className="mt-3 text-3xl font-semibold">Why Control Environments Fail Under Pressure</h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-stone-300">
              A practical look at the gap between elegant control language and what actually happens inside stressed operating environments. This will be the next authority page added to the site.
            </p>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-[2rem] border border-[color:var(--oc-line)] bg-[rgba(10,18,37,0.78)] p-8 shadow-[0_14px_36px_rgba(0,0,0,0.26),0_0_22px_rgba(99,170,255,0.06)] backdrop-blur-xl md:p-12">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-400">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold">If your organization needs calm, clear thinking in a noisy environment, we should talk.</h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-stone-300">
              This site is less about self-promotion and more about signal. If the problems you are working through involve enterprise artificial intelligence adoption, technology risk, governance, control quality, or operational resilience, there is a good chance there is something useful to discuss.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-stone-200">
              <a href="mailto:sgmmartinez@gmail.com" className="rounded-2xl border border-stone-700 px-4 py-3 transition hover:border-stone-500">Email: sgmmartinez@gmail.com</a>
              <a href="tel:9105514562" className="rounded-2xl border border-stone-700 px-4 py-3 transition hover:border-stone-500">Phone: 910-551-4562</a>
              <a href="https://www.linkedin.com/in/juan-martinez-diaz-mba-itil-50943411" className="rounded-2xl border border-stone-700 px-4 py-3 transition hover:border-stone-500">LinkedIn profile</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
