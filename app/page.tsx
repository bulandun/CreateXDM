import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const valueStrip = [
  "AI-native from day one",
  "Human creative direction first",
  "Faster production, premium output",
  "Campaigns, content, and custom tools"
];

const services = [
  {
    title: "Campaign Films & AI Video",
    text: "End-to-end campaign films, launch edits, and social cutdowns built with AI-native pipelines and rigorous human creative direction."
  },
  {
    title: "Visual Worlds & Launch Assets",
    text: "Distinctive stills, key visuals, and brand-world systems that carry a launch across paid, social, web, and retail touchpoints."
  },
  {
    title: "Social-First Content Systems",
    text: "Repeatable content systems that let teams ship high-quality, culturally tuned creative at the pace modern channels demand."
  },
  {
    title: "Creative Prototyping & Interactive Concepts",
    text: "Rapid concept prototypes and interactive experiences that pressure-test new ideas before full production investment."
  },
  {
    title: "Custom Createch Tools",
    text: "Bespoke internal tools and workflow layers that improve creative velocity, consistency, and long-term brand capability."
  }
];

const projects = [
  {
    title: "Maison Nord — Future Atelier",
    category: "Fashion Campaign Film",
    summary:
      "AI-assisted campaign film blending practical direction, digital set extension, and editorial-grade finishing for a global drop.",
    deliverables: "Campaign hero film · 12 social cutdowns · OOH motion loops",
    metrics: "6-week turnaround | 3 markets"
  },
  {
    title: "Aether One Launch System",
    category: "Product Visual System",
    summary:
      "A complete visual launch language spanning hero stills, short-form motion, and e-commerce assets for a premium consumer device.",
    deliverables: "Launch key visual suite · PDP motion assets · Paid social toolkit",
    metrics: "120+ assets | 1 visual system"
  },
  {
    title: "Parallel Club Content Engine",
    category: "Social Content Program",
    summary:
      "A social-first content engine designed to produce weekly narrative drops while preserving a consistent and elevated brand signature.",
    deliverables: "Monthly content framework · Creator-ready templates · Performance variants",
    metrics: "4x output cadence | Always-on production"
  },
  {
    title: "Signal Lab Experience",
    category: "Interactive Creative Concept",
    summary:
      "An interactive concept and internal ideation tool enabling teams to explore campaign worlds in real time across narrative and style directions.",
    deliverables: "Clickable prototype · Style simulation environment · Internal playbook",
    metrics: "3-day prototype sprint"
  }
];

const differentiators = [
  "AI-native, but human-led at every critical decision point",
  "Creative direction over prompt churn and generic generation",
  "Fast turnaround managed to premium brand standards",
  "Cross-disciplinary execution across story, design, production, and technology",
  "Systems and tools that compound creative capability over time",
  "Built for modern launches, cultural relevance, and experimental briefs"
];

const process = [
  {
    title: "Strategy",
    text: "Define audience context, business objective, and the creative opportunity worth pursuing."
  },
  {
    title: "Concept",
    text: "Develop bold creative territories with clear direction, references, and production logic."
  },
  {
    title: "Creation",
    text: "Produce with AI-native speed and studio-grade art direction, edit, and finishing oversight."
  },
  {
    title: "Delivery",
    text: "Ship platform-ready assets, workflows, and systems your team can scale and reuse."
  }
];

export default function HomePage() {
  return (
    <main className="pb-16">
      <section className="section-shell pb-12 pt-10 md:pt-16">
        <Reveal>
          <header className="luxury-border relative overflow-hidden rounded-3xl p-8 md:p-14">
            <div className="absolute inset-0 bg-grain [background-size:3px_3px] opacity-20" />
            <div className="absolute -left-24 top-8 h-64 w-64 rounded-full bg-iris/25 blur-3xl" />
            <div className="absolute -right-20 bottom-0 h-52 w-52 rounded-full bg-neon/20 blur-3xl" />

            <div className="relative">
              <span className="eyebrow">Creative XDM — AI-native creative agency</span>
              <h1 className="max-w-5xl font-serif text-4xl leading-[1.02] text-white md:text-7xl">
                Premium creative production for brands moving at AI speed.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-silver md:text-xl">
                We build cinematic visuals, campaign worlds, and custom creative systems that help ambitious teams move faster without sacrificing quality.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <button className="rounded-full bg-cloud px-7 py-3 text-sm font-semibold uppercase tracking-widest text-ink transition hover:-translate-y-0.5 hover:bg-white">
                  Start a Project
                </button>
                <button className="rounded-full border border-white/30 px-7 py-3 text-sm font-semibold uppercase tracking-widest text-cloud transition hover:border-white hover:bg-white/10">
                  View Work
                </button>
              </div>
            </div>
          </header>
        </Reveal>
      </section>

      <section className="section-shell py-6">
        <Reveal>
          <div className="grid gap-3 rounded-2xl border border-white/15 bg-white/[0.02] p-3 md:grid-cols-2 lg:grid-cols-4 lg:p-4">
            {valueStrip.map((item) => (
              <div key={item} className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-4 text-sm text-cloud/95">
                {item}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section-shell">
        <SectionHeading
          eyebrow="Services"
          title="What clients actually buy when speed and quality both matter."
          description="A focused offer built for modern brand teams that need premium output, faster production cycles, and creative systems that scale."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {services.map((service, idx) => (
            <Reveal key={service.title} delay={idx * 0.05}>
              <article className="luxury-border h-full rounded-2xl p-6 transition duration-500 hover:-translate-y-1 hover:border-neon/50 hover:shadow-glow">
                <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-silver">{service.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading
          eyebrow="Featured Work"
          title="Art-directed concepts with commercial intent."
          description="Representative case studies that reflect the level of creative direction, production craft, and execution discipline we bring to every engagement."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, idx) => (
            <Reveal key={project.title} delay={idx * 0.05}>
              <article className="group overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-white/[0.08] to-white/[0.01]">
                <div className="h-56 bg-gradient-to-br from-iris/30 via-transparent to-neon/30 transition duration-500 group-hover:scale-[1.02]" />
                <div className="space-y-3 p-7">
                  <p className="text-xs uppercase tracking-[0.18em] text-silver">{project.category}</p>
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="text-sm leading-relaxed text-silver">{project.summary}</p>
                  <p className="text-xs text-cloud/90">{project.deliverables}</p>
                  <p className="text-xs uppercase tracking-[0.15em] text-neon/90">{project.metrics}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <div>
              <SectionHeading
                eyebrow="Why Creative XDM"
                title="AI-native capability with creative standards premium brands expect."
                description="We are built for teams who need speed, distinctiveness, and operational leverage—without compromising on taste, strategy, or brand integrity."
              />
              <div className="grid gap-3 md:grid-cols-2">
                {differentiators.map((item, idx) => (
                  <Reveal key={item} delay={idx * 0.04}>
                    <div className="rounded-xl border border-white/15 bg-white/[0.02] p-4 text-sm leading-relaxed text-silver">
                      {item}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <aside className="luxury-border rounded-3xl p-8">
              <span className="eyebrow">Responsible AI</span>
              <h3 className="font-serif text-3xl text-white">Human oversight is built into the workflow.</h3>
              <p className="mt-5 text-sm leading-relaxed text-silver">
                We use AI to increase speed and range, never to replace creative judgment. Every output is directed, curated, and quality-controlled by experienced creatives for brand fit, originality, and execution quality.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-cloud/90">
                <li>• Creative director sign-off at concept and final output stages</li>
                <li>• Brand-specific style controls and review checkpoints</li>
                <li>• Editorial quality assurance before delivery</li>
              </ul>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading
          eyebrow="Process"
          title="A modern workflow: human-led, AI-accelerated."
          description="Simple by design, robust in execution—from strategic alignment to production-ready delivery."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {process.map((step, idx) => (
            <Reveal key={step.title} delay={idx * 0.04}>
              <article className="luxury-border h-full rounded-2xl p-6">
                <span className="text-xs uppercase tracking-[0.2em] text-neon/90">0{idx + 1}</span>
                <h3 className="mt-3 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-silver">{step.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <SectionHeading
                eyebrow="About"
                title="A new kind of creative partner for modern brands."
                description="Creative XDM operates at the intersection of storytelling, visual culture, design, and emerging technology. We partner with premium brands, startups, and cultural clients to create work that is strategically sharp, visually distinct, and commercially relevant."
              />
              <p className="max-w-2xl text-base leading-relaxed text-silver">
                Our model combines senior creative direction with AI-native production workflows so teams can launch faster, iterate smarter, and build durable creative capability—not just one-off assets.
              </p>
            </div>
            <div className="rounded-3xl border border-white/15 bg-white/[0.02] p-8">
              <p className="text-xs uppercase tracking-[0.18em] text-silver">Who we work with</p>
              <ul className="mt-5 space-y-3 text-sm text-cloud/95">
                <li>Premium consumer and lifestyle brands</li>
                <li>Founders launching new products or categories</li>
                <li>Cultural institutions and future-facing initiatives</li>
                <li>In-house teams needing high-speed creative scale</li>
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section-shell pt-4">
        <Reveal>
          <div className="luxury-border rounded-3xl p-8 md:p-12">
            <span className="eyebrow">Start a Project</span>
            <h2 className="max-w-2xl font-serif text-3xl text-white md:text-5xl">
              Ready to move faster and raise the creative standard?
            </h2>
            <p className="mt-5 max-w-2xl text-silver">
              Tell us what you are launching and where you need leverage. We will propose a focused approach built for your timeline, audience, and brand ambition.
            </p>

            <form className="mt-10 grid gap-4 md:grid-cols-2">
              <input
                className="rounded-xl border border-white/20 bg-white/[0.03] p-3 text-sm text-white placeholder:text-silver/70 focus:border-neon/60 focus:outline-none"
                placeholder="Name"
              />
              <input
                className="rounded-xl border border-white/20 bg-white/[0.03] p-3 text-sm text-white placeholder:text-silver/70 focus:border-neon/60 focus:outline-none"
                placeholder="Email"
                type="email"
              />
              <input
                className="rounded-xl border border-white/20 bg-white/[0.03] p-3 text-sm text-white placeholder:text-silver/70 focus:border-neon/60 focus:outline-none md:col-span-2"
                placeholder="Company"
              />
              <textarea
                className="min-h-36 rounded-xl border border-white/20 bg-white/[0.03] p-3 text-sm text-white placeholder:text-silver/70 focus:border-neon/60 focus:outline-none md:col-span-2"
                placeholder="Project details"
              />
              <button className="rounded-full bg-cloud px-7 py-3 text-sm font-semibold uppercase tracking-widest text-ink transition hover:-translate-y-0.5 hover:bg-white md:col-span-2 md:w-fit">
                Start a Project
              </button>
            </form>

            <div className="mt-8 space-y-1 text-sm text-silver">
              <p>Email: hello@creativexdm.com</p>
              <p>Instagram: @creativexdm</p>
              <p>LinkedIn: /company/creativexdm</p>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
