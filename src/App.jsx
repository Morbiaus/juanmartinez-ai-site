import { useEffect } from 'react';

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
      title: 'The Artificial Intelligence Fluency Premium Is Becoming the Real Jobs Story',
      text: 'A practical guide to the emerging advantage for workers who can use artificial intelligence with judgment, verification, and domain context.',
      href: '/ai-fluency-premium',
      status: 'Currently featured'
    },
    {
      title: 'AI Is Not an Answer Machine. It Is a Test of Human Judgment.',
      text: 'A research-backed argument for teaching students to use AI as a disciplined partner in thought — not as a substitute for judgment, curiosity, or human agency.',
      href: '/ai-human-judgment-education',
      status: 'Featured archive'
    },
    {
      title: 'Agentic Artificial Intelligence Is Not Robotic Process Automation With Better Vocabulary',
      text: 'Regulated institutions are moving from deterministic automation to probabilistic agency. The control question is no longer just whether the bot followed the script, but whether the firm can govern systems that choose their own path through regulated work.',
      href: '#article-agentic-artificial-intelligence-is-not-robotic-process-automation-with-better-vocabulary',
      status: 'Featured archive'
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
    archiveNote: 'Preserved in the featured archive with its original posting date.',
    archive: [
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
      'The challenge is bringing that same discipline into AI governance, technology risk, information security risk, and risk and control self-assessment (RCSA) without pretending the old automation taxonomy is sufficient.',
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
      'In a risk and control self-assessment environment, the issue is not whether an AI agent can summarize a control narrative. The issue is whether it can evaluate the completeness of the control statement, identify weak remediation language, flag gaps in regulatory traceability, preserve evidence, and still remain inside a governed operating boundary. That requires more than prompt design. It requires access discipline, auditability, escalation logic, and clear human approval before consequential action.',
      'That is a harder standard.',
      'It also introduces a new kind of accountability gap. Regulated institutions are comfortable assigning accountability to process owners, model owners, technology owners, risk owners, and vendor owners. Agentic AI cuts across all of them. A single outcome may involve a foundation model from one provider, a retrieval layer from another, internal policy documents, external data feeds, identity infrastructure, workflow tools, human approval checkpoints, and logging pipelines.',
      'When something goes wrong, “the AI did it” will not be an acceptable answer.',
      'Regulators will not care that the system was impressive. They will care whether the firm can explain what happened, why it happened, who approved the authority, what controls constrained the behavior, what evidence was retained, and how the institution prevented recurrence.',
      'The 2026 NIST work on agent identity and authorization is important for precisely this reason. NIST’s National Cybersecurity Center of Excellence emphasized that realizing the benefits of AI agents requires understanding the risks from giving agents access to “diverse data sets, tools, and applications,” and applying identification and authorization controls. That is not a theoretical technicality. It is the difference between treating an agent as a chat interface and treating it as a non-human actor inside the control environment.',
      'The control question begins with identity. What identity does the agent use? Who owns that identity? What authority is delegated to it? Which systems can it reach? What logs prove what it did? How quickly can access be revoked? Treating an agent like a bot account or generic automation service understates the risk.',
      'Every agent needs an identity.',
      'Every identity needs scoped authority.',
      'Every authority needs monitoring.',
      'Every action needs evidence.',
      'Every evidence trail needs to survive scrutiny.',
      'The more discretion the system has, the more its identity, permissions, and evidence trail become core governance artifacts.',
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
      'Practitioner note: this is not only a conceptual governance issue. In risk and control environments, agentic AI has to be designed around bounded authority, traceable execution, access control, human approval, and evidence preservation. The practical opportunity is not to let AI make final risk decisions on its own. It is to build secure, human-supervised agentic systems that can support risk-control review, RCSA artifact assessment, issue-management evidence review, and decision support in regulated contexts without bypassing accountability.',
      'Author Bio',
      'Juan A. Martinez Diaz, MBA, ITIL, is a senior risk, technology, AI, and governance leader focused on regulated environments. His work centers on technology risk, operational resilience, AI governance, risk-control modernization, and the responsible use of agentic AI in control-heavy business contexts.',
      'Sources',
      '- National Institute of Standards and Technology (NIST), “Center for AI Standards and Innovation (CAISI) Issues Request for Information About Securing AI Agent Systems,” January 2026: https://www.nist.gov/news-events/news/2026/01/caisi-issues-request-information-about-securing-ai-agent-systems',
      '- NIST, “Announcing the AI Agent Standards Initiative,” February 2026: https://www.nist.gov/news-events/news/2026/02/announcing-ai-agent-standards-initiative-interoperable-and-secure',
      '- NIST National Cybersecurity Center of Excellence (NCCoE), “Accelerating the Adoption of Software and Artificial Intelligence Agent Identity and Authorization,” February 2026: https://csrc.nist.gov/pubs/other/2026/02/05/accelerating-the-adoption-of-software-and-ai-agent/ipd',
      '- Bank of England, “Summary of AI roundtables,” February 2026: https://www.bankofengland.co.uk/minutes/2026/february/summary-of-ai-roundtables-feb-2026',
      '- Bank of England, Financial Conduct Authority (FCA), and His Majesty’s Treasury (HM Treasury), “Joint statement on Frontier AI models and cyber resilience,” May 2026: https://www.bankofengland.co.uk/news/2026/may/boe-fca-and-hm-treasury-joint-statement-on-frontier-ai-models-and-cyber-resilience'
    ]
  };

  const humanJudgmentArticle = {
    title: 'AI Is Not an Answer Machine. It Is a Test of Human Judgment.',
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
    archiveNote: 'Current featured article in the AI, Work, and Human Advantage series.',
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

  const featuredArticles = [aiFluencyPremiumArticle, humanJudgmentArticle, featuredArticle];
  const articleRoutes = {
    '/ai-fluency-premium': aiFluencyPremiumArticle,
    '/ai-human-judgment-education': humanJudgmentArticle
  };
  const currentStandaloneArticle = typeof window !== 'undefined' ? articleRoutes[window.location.pathname] : null;
  const isArticlePage = Boolean(currentStandaloneArticle);

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
        <p className="mt-4 text-lg leading-8 text-stone-300">{article.subtitle}</p>
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
          <div>Featured on homepage: {article.homepageFeaturedDate}</div>
          <div>{article.archiveNote}</div>
        </div>
        <div className="mt-6 rounded-2xl border border-[color:var(--oc-line)] bg-[rgba(8,16,31,0.72)] p-5 text-sm text-stone-300">
          <div className="font-medium text-white">{article.callToActionText}</div>
          <a href={article.fullReadMoreUrl} className="mt-2 inline-block break-all text-[var(--oc-cyan)] hover:text-white">
            {article.fullReadMoreUrl}
          </a>
        </div>
        <div className="mt-10 space-y-6 text-base leading-8 text-stone-200">
          {article.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
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
        {article.archive && (
          <section className="mt-10 rounded-[2rem] border border-[color:var(--oc-line)] bg-[rgba(8,16,31,0.72)] p-6 shadow-[0_12px_30px_rgba(0,0,0,0.22),0_0_18px_rgba(99,170,255,0.06)] backdrop-blur-xl">
            <h2 className="text-sm uppercase tracking-[0.2em] text-stone-400">Featured Archive</h2>
            <p className="mt-3 text-sm leading-7 text-stone-300">Each featured article keeps its original visible publish date when rotated off the homepage.</p>
            <div className="mt-5 space-y-3">
              {article.archive.map((item) => (
                <div key={item.title} className="rounded-2xl border border-[color:var(--oc-line)] bg-[rgba(10,18,37,0.72)] p-5">
                  <div className="text-sm text-stone-400">{item.originalVisiblePostingDate}</div>
                  <h3 className="mt-2 text-base font-medium text-white">{item.title}</h3>
                  <div className="mt-2 text-sm leading-7 text-stone-300">{item.status}</div>
                </div>
              ))}
            </div>
          </section>
        )}
      </article>
    </section>
  );

  useEffect(() => {
    const articlePath = currentStandaloneArticle?.articleAnchorOrUrl;
    const articleMeta = currentStandaloneArticle ? {
      title: `${currentStandaloneArticle.title} | Juan Martinez`,
      description: currentStandaloneArticle.subtitle,
      socialDescription: currentStandaloneArticle.socialDescription || currentStandaloneArticle.subtitle,
      url: currentStandaloneArticle.fullReadMoreUrl
    } : null;
    const homeMeta = {
      title: 'Juan A. Martinez Diaz | AI, Technology Risk, and Governance Leadership',
      description: 'Juan A. Martinez Diaz is a senior technology, AI, risk, and governance leader focused on enterprise AI adoption, operational resilience, and executive decision support in regulated environments.',
      socialDescription: 'Executive partnership across AI adoption, technology risk, governance, and operational resilience for complex and regulated environments.',
      url: 'https://www.juanmartinez.ai/'
    };

    const setMeta = (selector, value) => {
      const element = document.head.querySelector(selector);
      if (element) element.setAttribute('content', value);
    };

    const updateMeta = () => {
      const isArticlePath = Boolean(articlePath && window.location.pathname === articlePath);
      const meta = isArticlePath ? articleMeta : homeMeta;

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
          datePublished: currentStandaloneArticle.originalVisiblePostingDate === 'June 22, 2026' ? '2026-06-22' : '2026-05-29',
          dateModified: currentStandaloneArticle.originalVisiblePostingDate === 'June 22, 2026' ? '2026-06-22' : '2026-05-29',
          mainEntityOfPage: articleMeta.url,
          image: 'https://www.juanmartinez.ai/og-image.svg',
          articleSection: currentStandaloneArticle.category,
          keywords: currentStandaloneArticle.tags.join(', ')
        });
        document.head.appendChild(schema);
      }
    };

    const scrollToArticlePath = () => {
      if (!articlePath || window.location.pathname !== articlePath) return false;
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
            <a href="#point-of-view" className="hover:text-[var(--oc-cyan)]">Point of View</a>
            <a href="#contact" className="hover:text-[var(--oc-cyan)]">Contact</a>
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

        {featuredArticles.map((article) => renderArticleSection(article))}

        <section id="coming-next" className="mx-auto max-w-6xl px-6 py-20 pt-0">
          <div className="overflow-hidden rounded-[2rem] border border-[color:var(--oc-line)] bg-[rgba(10,18,37,0.78)] p-8 shadow-[0_14px_36px_rgba(0,0,0,0.26),0_0_22px_rgba(99,170,255,0.06)] backdrop-blur-xl md:p-12">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-400">Coming Next</p>
            <h2 className="mt-3 text-3xl font-semibold">Why Control Environments Fail Under Pressure</h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-stone-300">
              A practical look at the gap between elegant control language and what actually happens inside stressed operating environments. This will be the next authority page added to the site.
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
