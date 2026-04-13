export default function JuanProfessionalLandingPage() {
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

  const workItems = [
    {
      title: 'Risk and control leadership',
      text: 'Helping organizations identify where technology, information security, emerging technology, and operational weaknesses can disrupt execution or create avoidable exposure.'
    },
    {
      title: 'Operational translation',
      text: 'Connecting executive priorities to the processes, systems, and behaviors that determine whether a control environment is strong, scalable, and real.'
    },
    {
      title: 'Practical artificial intelligence',
      text: 'Helping leaders connect artificial intelligence opportunity to governance, operating model decisions, responsible adoption, and measurable execution.'
    }
  ];

  const beliefItems = [
    'A control is only as good as the reality it can withstand. Elegant documentation does not fix weak execution.',
    'Artificial intelligence will not eliminate the need for judgment. It will raise the premium on people who can apply judgment well.',
    'The best leaders do not add noise. They make the right things easier to see, easier to understand, and harder to ignore.'
  ];

  const currentFocus = [
    'Artificial intelligence governance and agent design for regulated environments',
    'Technology and operational resilience leadership roles',
    'Control quality, issue detection, and practical automation',
    'Executive roles where judgment, clarity, and disciplined execution matter'
  ];

  const signatureWins = [
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

  const writingItems = [
    {
      title: 'What Anthropic’s Mythos Decision Signals for Banks and Other Regulated Firms',
      text: 'Anthropic’s decision to restrict Mythos is more than a product story. It is an early warning that frontier artificial intelligence is forcing institutions to rethink cyber risk, model access, governance, and executive accountability.',
      status: 'Featured article',
      href: '#article-mythos'
    },
    {
      title: 'Why Control Environments Fail Under Pressure',
      text: 'A practical look at the gap between elegant control language and what actually happens inside stressed operating environments.',
      status: 'Planned',
      href: '#'
    }
  ];

  const mythosArticle = {
    title: 'What Anthropic’s Mythos Decision Signals for Banks and Other Regulated Firms',
    subtitle: 'A restricted frontier model is not just a product story. It is a signal that capability is beginning to outpace the governance habits of many institutions.',
    body: [
      'Anthropic’s decision to keep Claude Mythos Preview out of general public hands is not just a product release choice. It is an early signal that frontier artificial intelligence is beginning to cross a threshold where capability itself changes the risk environment.',
      'That matters because the conversation is no longer only about productivity, copilots, or faster content generation. It is now about systems that can materially alter cyber risk, accelerate exploit discovery, and compress the time between vulnerability identification and possible misuse.',
      'For banks and other regulated firms, the lesson is straightforward. The old model of artificial intelligence governance is already becoming outdated. It is no longer enough to ask whether a model is accurate, useful, or efficient. Institutions now have to ask who gets access, what the model is allowed to touch, what workflows it can influence, what data boundaries matter, what actions require human validation, and how leadership will know when a capability has crossed into a higher-risk category.',
      'This is why the Mythos moment matters beyond cybersecurity. It reveals a broader truth: frontier artificial intelligence will not arrive in a neat, evenly distributed way. Some capabilities will remain fit for broad use. Others will require restricted access, strong controls, monitored environments, and a much tighter connection between technical teams, business leadership, legal, compliance, and risk.',
      'My prediction is that over the next 12 to 24 months, regulated firms will begin separating artificial intelligence into tiers. One tier will cover low-risk productivity use cases that can be broadly deployed with standard safeguards. Another tier will cover higher-consequence systems such as agentic workflows, code generation, vulnerability discovery, autonomous decision support, and models with access to sensitive internal knowledge or infrastructure. Those higher tiers will need tighter access controls, better logging, human-in-the-loop requirements, stronger vendor oversight, and clearer executive ownership.',
      'That is the real opportunity for leaders in risk, governance, and operational resilience. The value is no longer in saying “be careful with artificial intelligence.” The value is in helping the institution answer harder questions. Which use cases deserve promotion into production? Which ones should remain constrained? What evidence should be required before scale? What fallback mechanisms should exist if the model behaves unexpectedly? What controls prove that a system is not just impressive, but governable?',
      'The institutions that win in this next phase will not be the ones with the loudest artificial intelligence story. They will be the ones with the strongest ability to govern real capability before capability outruns control.'
    ]
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100">
      <header className="sticky top-0 z-50 border-b border-stone-800 bg-stone-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div>
            <div className="text-xl font-semibold tracking-wide">Juan A. Martinez Diaz</div>
            <div className="text-sm text-stone-400">Executive partnership. Enterprise AI adoption. Governance-led transformation.</div>
          </div>
          <nav className="hidden gap-6 text-sm text-stone-300 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#impact" className="hover:text-white">Impact</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#point-of-view" className="hover:text-white">Point of View</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-start">
            <div>
              <div className="inline-flex rounded-full border border-stone-700 px-3 py-1 text-xs uppercase tracking-[0.2em] text-stone-300">
                Enterprise AI Adoption • Technology Risk • Governance-Led Transformation
              </div>
              <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
                I help organizations see risk clearly, speak plainly, and make better decisions before problems become headlines.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-stone-300 md:text-lg">
                Most executive profiles sound interchangeable. I am not interested in that. My work has lived where technology, operations, accountability, and judgment meet. I have spent years helping leaders sort signal from noise, challenge weak assumptions, and bring structure to issues that can damage trust, resilience, and execution.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-8 text-stone-300 md:text-lg">
                Lately, that includes a strong focus on artificial intelligence in regulated environments: not the hype, but the real work of making these systems useful, governable, and worth trusting.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#impact"
                  className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-stone-900 shadow-lg transition hover:-translate-y-0.5"
                >
                  See selected impact
                </a>
                <a
                  href="#point-of-view"
                  className="rounded-2xl border border-stone-700 px-5 py-3 text-sm font-medium text-stone-100 transition hover:border-stone-500"
                >
                  Read my perspective
                </a>
              </div>
              <div className="mt-6 text-sm text-stone-400">
                Best fit: Chief Information Officer, Head of Technology Risk, Controls Executive, Operational Resilience, Executive AI Partnership, or Artificial Intelligence governance leadership roles.
              </div>
            </div>

            <aside className="rounded-[2rem] border border-stone-800 bg-stone-900 p-6 shadow-2xl">
              <div className="space-y-4">
                {[
                  ['What I do', 'Help senior leaders translate emerging technology, artificial intelligence, and control complexity into decisions they can actually use.'],
                  ['How I work', 'Direct, structured, and grounded in the real operating environment rather than theory.'],
                  ['Where I add value', 'Highly regulated, high-consequence environments where credibility, judgment, and disciplined execution matter.'],
                  ['What I care about now', 'Helping organizations adopt artificial intelligence in ways that are useful, governable, and tied to measurable execution.']
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-stone-800 bg-stone-950 p-5">
                    <div className="text-sm text-stone-400">{label}</div>
                    <div className="mt-2 text-[15px] leading-7 text-stone-200">{value}</div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section id="impact" className="border-y border-stone-900 bg-stone-900/30">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.2em] text-stone-400">Selected Impact</p>
              <h2 className="mt-3 text-3xl font-semibold">Credibility comes from proof, not posture.</h2>
              <p className="mt-4 text-base leading-8 text-stone-300">
                The story matters, but measurable scope matters too. Here are a few indicators of the environments I have worked in and the scale at which I have operated.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {impactItems.map((item) => (
                <div key={item.metric} className="rounded-[2rem] border border-stone-800 bg-stone-950 p-6">
                  <div className="text-3xl font-semibold text-white">{item.metric}</div>
                  <p className="mt-3 leading-7 text-stone-300">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-stone-900 bg-stone-950">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-stone-400">About</p>
                <h2 className="mt-3 text-3xl font-semibold">Earned perspective, not borrowed language.</h2>
              </div>
              <div className="space-y-5 text-base leading-8 text-stone-300">
                <p>
                  My background spans banking, military leadership, technology operations, and enterprise risk. That mix matters because it changed how I see organizations. I do not look at risk as a checklist exercise. I look at it as the point where people, systems, incentives, and pressure reveal what is actually true.
                </p>
                <p>
                  I am drawn to environments where the stakes are real, the facts are messy, and leaders need someone who can bring clarity without drama. I respect strong controls, but I also believe control language is useless if it cannot survive contact with real operations.
                </p>
                <p>
                  Outside the office, I am deeply interested in science, Bitcoin, exercise physiology, and the future of artificial intelligence. Those interests shape how I think: stay curious, test ideas, and never confuse confidence with understanding.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <p className="text-sm uppercase tracking-[0.2em] text-stone-400">Signature Wins</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold">A better story is useful. Specific wins are better.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {signatureWins.map((item) => (
              <div key={item.title} className="rounded-[2rem] border border-stone-800 bg-stone-900 p-7 shadow-xl">
                <h3 className="text-xl font-medium text-white">{item.title}</h3>
                <p className="mt-4 leading-7 text-stone-300">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="work" className="mx-auto max-w-6xl px-6 py-20 pt-0">
          <p className="text-sm uppercase tracking-[0.2em] text-stone-400">Work</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold">The through-line in my work is simple: make the important things visible early enough to act on them.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {workItems.map((item) => (
              <div key={item.title} className="rounded-[2rem] border border-stone-800 bg-stone-900 p-7 shadow-xl">
                <h3 className="text-xl font-medium text-white">{item.title}</h3>
                <p className="mt-4 leading-7 text-stone-300">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-stone-900 bg-stone-900/30">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-stone-400">What I’m Focused On</p>
              <h2 className="mt-3 text-3xl font-semibold">Where I am leaning in now.</h2>
              <div className="mt-8 space-y-4">
                {currentFocus.map((item) => (
                  <div key={item} className="rounded-2xl border border-stone-800 bg-stone-950 px-5 py-4 text-stone-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div id="point-of-view">
              <p className="text-sm uppercase tracking-[0.2em] text-stone-400">Point of View</p>
              <h2 className="mt-3 text-3xl font-semibold">A few things I believe.</h2>
              <div className="mt-8 space-y-4">
                {beliefItems.map((item) => (
                  <div key={item} className="rounded-[2rem] border border-stone-800 bg-stone-950 p-6">
                    <p className="leading-8 text-stone-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-stone-900 bg-stone-950/60">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-400">Writing</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold">Original thinking is how people remember you.</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {writingItems.map((item) => (
                <a key={item.title} href={item.href} className="block rounded-[2rem] border border-stone-800 bg-stone-900 p-7 shadow-xl transition hover:-translate-y-1 hover:border-stone-700">
                  <div className="text-sm text-stone-400">{item.status}</div>
                  <h3 className="mt-2 text-xl font-medium text-white">{item.title}</h3>
                  <p className="mt-4 leading-7 text-stone-300">{item.text}</p>
                  <div className="mt-5 text-sm font-medium text-stone-200">{item.status === 'Featured article' ? 'Read article' : 'Coming soon'}</div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="article-mythos" className="mx-auto max-w-4xl px-6 py-20">
          <div className="rounded-[2rem] border border-stone-800 bg-stone-900 p-8 shadow-2xl md:p-12">
            <div className="text-sm uppercase tracking-[0.2em] text-stone-400">Featured Article</div>
            <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">{mythosArticle.title}</h2>
            <p className="mt-4 text-lg leading-8 text-stone-300">{mythosArticle.subtitle}</p>
            <div className="mt-10 space-y-6 text-base leading-8 text-stone-200">
              {mythosArticle.body.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-[2rem] border border-stone-800 bg-stone-900 p-8 shadow-2xl md:p-12">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-400">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold">If your organization needs calm, clear thinking in a noisy environment, we should talk.</h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-stone-300">
              This site is less about self-promotion and more about signal. If the problems you are working through involve enterprise artificial intelligence adoption, technology risk, governance, control quality, or operational resilience, there is a good chance we will have something useful to talk about.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-stone-200">
              <a href="mailto:sgmmartinez@gmail.com" className="rounded-2xl border border-stone-700 px-4 py-3 transition hover:border-stone-500">Email: sgmmartinez@gmail.com</a>
              <a href="tel:9105514562" className="rounded-2xl border border-stone-700 px-4 py-3 transition hover:border-stone-500">Phone: 910-551-4562</a>
              <a href="https://linkedin.com/in/juan-martinez-diaz-50943411" className="rounded-2xl border border-stone-700 px-4 py-3 transition hover:border-stone-500">LinkedIn: linkedin.com/in/juan-martinez-diaz-50943411</a>
              <a href="#" className="rounded-2xl border border-stone-700 px-4 py-3 transition hover:border-stone-500">Resume: PDF link coming next</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}