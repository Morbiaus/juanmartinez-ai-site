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
      title: 'Agentic Artificial Intelligence Is Not Robotic Process Automation With Better Vocabulary',
      text: 'Regulated institutions are moving from deterministic automation to probabilistic agency. The control question is no longer just whether the bot followed the script, but whether the firm can govern systems that choose their own path through regulated work.',
      href: '#article-agentic-artificial-intelligence-is-not-robotic-process-automation-with-better-vocabulary',
      status: 'Currently featured'
    }
  ];

  const featuredArticle = {
    title: 'Agentic Artificial Intelligence Is Not Robotic Process Automation With Better Vocabulary',
    subtitle: 'Regulated institutions are moving from deterministic automation to probabilistic agency. The control question is no longer just whether the bot followed the script, but whether the firm can govern systems that choose their own path through regulated work.',
    articleAnchorOrUrl: '#article-agentic-artificial-intelligence-is-not-robotic-process-automation-with-better-vocabulary',
    callToActionText: 'Read more on this topic here:',
    fullReadMoreUrl: 'https://www.juanmartinez.ai/#article-agentic-artificial-intelligence-is-not-robotic-process-automation-with-better-vocabulary',
    originalVisiblePostingDate: 'May 18, 2026',
    homepageFeaturedDate: 'May 18, 2026',
    archiveNote: 'When a new featured article replaces this one, this article should move into the featured archive with its original posting date preserved.',
    archive: [
      {
        title: 'Agentic Artificial Intelligence Is Not Robotic Process Automation With Better Vocabulary',
        originalVisiblePostingDate: 'May 18, 2026',
        status: 'Current featured article'
      },
      {
        title: 'The Quiet Erosion of White-Collar Work',
        originalVisiblePostingDate: 'April 14, 2026',
        status: 'Previously featured article'
      }
    ],
    body: [
      'Regulated institutions are about to make a familiar mistake.',
      'They will look at agentic artificial intelligence (AI) and try to govern it like a more sophisticated version of robotic process automation (RPA).',
      'That is the wrong mental model.',
      'RPA automated steps. Agentic AI pursues goals.',
      'RPA was usually deterministic. It followed prescribed rules, moved through fixed screens, populated known fields, and failed in ways control teams could often reproduce. The operational risk question was usually: did the bot execute the approved script, inside the approved entitlement, against the approved application, with the approved exception path?',
      'Agentic AI changes the question.',
      'The new question is not only whether the tool followed the script. The new question is whether the institution can govern a system that can interpret context, select tools, call application programming interfaces (APIs), retrieve data, draft reasoning, coordinate with other agents, and adapt its path toward an objective.',
      'That is not the same control problem.',
      'It is a shift from deterministic process risk to probabilistic agency risk.',
      'This distinction matters because regulated firms are not starting from a blank page. Banks, insurers, asset managers, and financial market infrastructures already have control frameworks for model risk, operational resilience, third-party risk, cyber, records management, privacy, change management, access administration, and business continuity. Many also have mature RPA programs. Those frameworks are valuable.',
      'But they were not built for systems that may decide, in real time, which route to take through a business process.',
      'The National Institute of Standards and Technology (NIST) stated the issue plainly in January 2026: “AI agent systems are capable of planning and taking autonomous actions that impact real-world systems or environments.” That single sentence should make every regulated institution pause. Once an AI system can plan and act, governance can no longer sit only at model approval or process design. It has to move into runtime.',
      'The Bank of England’s February 2026 summary of AI roundtables with regulated firms pointed in the same direction. Participants warned that “firms’ traditional model risk management approach to validation wouldn’t be sustainable in its current form as generative AI and agentic systems proliferated.” They also challenged the conventional comfort phrase “human-in-the-loop,” noting that agentic AI forces risk management to put greater emphasis on “testing, monitoring and setting guardrails around the outcomes of broader AI systems.”',
      'That is the heart of the matter.',
      'Agentic AI is not merely a model. It is a model connected to memory, tools, permissions, data, workflows, and institutional consequences.',
      'The risk is not just that the model gets an answer wrong. The risk is that the system takes a plausible chain of actions that no individual control owner fully anticipated.',
      'A deterministic bot breaks when the screen changes.',
      'An agent may route around the break.',
      'That sounds useful until the workaround becomes the risk event.',
      'Consider the difference in a compliance environment.',
      'An RPA bot assigned to gather know-your-customer (KYC) documents might open a known system, extract a known field, attach a file, and update a case status. If it fails, the queue backs up. The failure is visible.',
      'An agentic workflow could interpret a customer profile, search internal and external data, summarize adverse media, draft a risk rationale, recommend enhanced due diligence, escalate the case, and prepare a regulatory filing package. That can be powerful. But the control surface is much larger. Which sources did it treat as authoritative? Which adverse signals did it overweight? Which policy interpretation did it apply? Which tool calls were made under whose entitlement? Which intermediate reasoning was retained? Which exception was suppressed because the agent judged it immaterial?',
      'Traditional automation governance asks whether the process was followed.',
      'Agentic governance must ask whether the system remained inside the institution’s risk appetite while choosing the process.',
      'That is a harder standard.',
      'It also introduces a new kind of accountability gap. Regulated institutions are comfortable assigning accountability to process owners, model owners, technology owners, risk owners, and vendor owners. Agentic AI cuts across all of them. A single outcome may involve a foundation model from one provider, a retrieval layer from another, internal policy documents, external data feeds, identity infrastructure, workflow tools, human approval checkpoints, and logging pipelines.',
      'When something goes wrong, “the AI did it” will not be an acceptable answer.',
      'Regulators will not care that the system was impressive. They will care whether the firm can explain what happened, why it happened, who approved the authority, what controls constrained the behavior, what evidence was retained, and how the institution prevented recurrence.',
      'The 2026 NIST work on agent identity and authorization is important for precisely this reason. NIST’s National Cybersecurity Center of Excellence emphasized that realizing the benefits of AI agents requires understanding the risks from giving agents access to “diverse data sets, tools, and applications,” and applying identification and authorization controls. That is not a theoretical technicality. It is the difference between treating an agent as a chat interface and treating it as a non-human actor inside the control environment.',
      'Every agent needs an identity.',
      'Every identity needs scoped authority.',
      'Every authority needs monitoring.',
      'Every action needs evidence.',
      'Every evidence trail needs to survive scrutiny.',
      'This is where many institutions will be tempted to hide behind the old RPA playbook. They will build approval gates, document use cases, test prompts, create acceptable-use rules, and add a human reviewer at the end. That will help, but it will not be enough.',
      'A human reviewer at the end of an agentic workflow is not the same thing as control over the workflow.',
      'If the human sees only the polished answer, the human is not really in the loop. They are standing at the exit, inspecting a package after the route has already been chosen.',
      'The better model is layered control.',
      'First, constrain the agent’s operating domain. Do not give broad tool access simply because the architecture allows it. The right question is not “what can the agent do?” The right question is “what is the smallest authority this agent needs to complete this specific regulated task?”',
      'Second, separate reasoning from execution. A system that can recommend an action does not automatically need permission to execute it. High-impact decisions should require explicit handoff, not decorative oversight.',
      'Third, log the chain, not just the outcome. Regulated firms need evidence of prompts, retrieved sources, tool calls, policy references, intermediate decisions, exceptions, approvals, overrides, and final actions. If the record is not reconstructable, the control is not mature.',
      'Fourth, monitor behavior at runtime. Pre-production validation remains necessary, but agentic systems can fail through drift, tool misuse, environmental change, adversarial inputs, unclear objectives, and emergent interactions with other systems. Controls have to observe behavior in motion.',
      'Fifth, test the guardrails like an attacker and like a bad process designer. Prompt injection is one risk. So is specification gaming. So is over-compliance. So is quiet policy laundering, where a system converts ambiguous internal guidance into confident operational instruction.',
      'Sixth, preserve human accountability where it actually matters. Human oversight should be placed at decision points that change customer outcomes, risk classifications, regulatory submissions, financial exposure, access rights, or operational resilience. A generic approval button at the end is theatre.',
      'Finally, boards and senior management need a better vocabulary. “Automation,” “AI assistant,” “copilot,” and “agent” should not be used interchangeably. The labels matter because they imply different risk acceptance decisions. A copilot suggests advice. An agent suggests delegated action. Delegated action inside a regulated institution is never just a technology deployment. It is a control design decision.',
      'The Bank of England, Financial Conduct Authority (FCA), and His Majesty’s Treasury (HM Treasury) made a related point in May 2026 when they warned that frontier AI represents a “step-change in capability” with significant implications for cyber security and operational resilience. That warning should not be confined to malicious external use. The same step-change also changes internal automation risk. Speed, scale, autonomy, and low-cost action are not only productivity features. They are risk multipliers.',
      'The institutions that get this right will not be the ones that ban agentic AI or smother it under committees.',
      'They will be the ones that stop pretending it is RPA with a better interface.',
      'They will build agent inventories, identity models, authority maps, runtime monitors, kill switches, evidence trails, adversarial tests, and escalation standards before agents become invisible infrastructure.',
      'They will distinguish between assistive intelligence and delegated agency.',
      'They will understand that the control environment must now govern not only what a system knows, but what it is allowed to do.',
      'That is the real implementation challenge.',
      'Agentic AI will not wait politely for regulated institutions to modernize their control taxonomies.',
      'It will enter through productivity pilots, compliance experiments, developer tools, operations backlogs, vendor platforms, and executive pressure for efficiency.',
      'The firms that treat it as another automation wave will move quickly and accumulate hidden risk.',
      'The firms that treat it as a new class of probabilistic actor will move more deliberately, but they will have a better chance of surviving their own success.',
      'RPA taught institutions to control the script.',
      'Agentic AI will test whether they can control delegated judgment.',
      'That is a different game.',
      'And the serious institutions should start acting like it.',
      '- National Institute of Standards and Technology (NIST), “Center for AI Standards and Innovation (CAISI) Issues Request for Information About Securing AI Agent Systems,” January 2026: https://www.nist.gov/news-events/news/2026/01/caisi-issues-request-information-about-securing-ai-agent-systems',
      '- NIST, “Announcing the AI Agent Standards Initiative,” February 2026: https://www.nist.gov/news-events/news/2026/02/announcing-ai-agent-standards-initiative-interoperable-and-secure',
      '- NIST National Cybersecurity Center of Excellence (NCCoE), “Accelerating the Adoption of Software and Artificial Intelligence Agent Identity and Authorization,” February 2026: https://csrc.nist.gov/pubs/other/2026/02/05/accelerating-the-adoption-of-software-and-ai-agent/ipd',
      '- Bank of England, “Summary of AI roundtables,” February 2026: https://www.bankofengland.co.uk/minutes/2026/february/summary-of-ai-roundtables-feb-2026',
      '- Bank of England, Financial Conduct Authority (FCA), and His Majesty’s Treasury (HM Treasury), “Joint statement on Frontier AI models and cyber resilience,” May 2026: https://www.bankofengland.co.uk/news/2026/may/boe-fca-and-hm-treasury-joint-statement-on-frontier-ai-models-and-cyber-resilience'
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
