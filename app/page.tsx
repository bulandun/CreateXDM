import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const services = [
  {
    title: "AI Video",
    text: "Cinematic films and social edits produced through advanced AI pipelines with human-led art direction."
  },
  {
    title: "Visual Design",
    text: "High-impact stills, key visuals, and digital assets shaped for modern platforms and premium audiences."
  },
  {
    title: "Brand Campaigns",
    text: "Narrative-first campaigns that merge cultural relevance with strategic messaging across channels."
  },
  {
    title: "Creative Technology",
    text: "Custom createch tools, generative systems, and interactive prototypes that become part of the brand story."
  },
  {
    title: "Concept Development",
    text: "From first idea to production blueprint, we design concepts that are bold, coherent, and executable."
  }
];

const projects = [
  {
    title: "NOCTURNE / FASHION FILM",
    category: "AI Film Workflow",
    summary:
      "A luxury fashion campaign blending practical direction with AI scene extension to create an atmospheric narrative universe."
  },
  {
    title: "AETHER DEVICE LAUNCH",
    category: "Product Visual System",
    summary:
      "A cross-platform launch language featuring stills, motion assets, and immersive story cuts for a next-gen hardware debut."
  },
  {
    title: "CITY SIGNAL",
    category: "Experimental Branded Content",
    summary:
      "A mixed-media storytelling series translating live city data into evolving brand visuals and short-form films."
  },
  {
    title: "ATLAS STUDIO",
    category: "Interactive Creative Tool",
    summary:
      "A prototype platform allowing teams to generate campaign worlds from narrative prompts, references, and style constraints."
  }
];

const process = ["Strategy", "Concept", "Creation", "Delivery"];

const differentiators = [
  "AI-native from the ground up",
  "Fast execution without compromising craft",
  "Creative direction over commodity generation",
  "Cross-disciplinary output across film, design, and tech",
  "Built for modern brands and emerging ideas"
];

export default function HomePage() {
  return (
    <main>
      <section className="section-shell pb-16 pt-10 md:pt-16">
        <Reveal>
          <header className="luxury-border relative overflow-hidden rounded-3xl p-8 md:p-14">
            <div className="absolute inset-0 bg-grain [background-size:3px_3px] opacity-25" />
            <div className="relative">
              <span className="eyebrow">Creative XDM — AI-native creative agency</span>
              <h1 className="max-w-4xl font-serif text-4xl leading-[1.03] text-white md:text-7xl">
                We direct cinematic ideas with human taste and AI-powered execution.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-silver md:text-xl">
                Creative XDM creates premium video, visual systems, brand campaigns, and creative technology for brands moving at the speed of culture.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <button className="rounded-full bg-cloud px-7 py-3 text-sm font-semibold uppercase tracking-widest text-ink transition hover:bg-white">
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

      <section className="section-shell pt-4">
        <SectionHeading
          eyebrow="Services"
          title="A focused suite built for bold creative outcomes."
          description="We blend narrative intelligence, design precision, and AI-native production to deliver work that feels contemporary and unmistakably premium."
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
          title="Selected directions at the edge of design, story, and technology."
          description="Placeholder case studies below represent the kind of art-directed, high-craft output Creative XDM is built to deliver."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, idx) => (
            <Reveal key={project.title} delay={idx * 0.04}>
              <article className="group overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-white/[0.07] to-white/[0.02]">
                <div className="h-56 bg-gradient-to-br from-iris/30 via-transparent to-neon/25 transition duration-500 group-hover:scale-[1.02]" />
                <div className="space-y-3 p-7">
                  <p className="text-xs uppercase tracking-[0.18em] text-silver">{project.category}</p>
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="text-sm leading-relaxed text-silver">{project.summary}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <div>
              <SectionHeading
                eyebrow="About"
                title="A new model for creative partnership."
                description="Creative XDM is an AI-native agency operating across visual culture, storytelling, design, and emerging technology. We partner with brands, startups, and cultural projects to build work that feels both immediate and enduring."
              />
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="luxury-border rounded-3xl p-8">
              <h3 className="font-serif text-2xl text-white">How we work</h3>
              <ol className="mt-6 space-y-5">
                {process.map((step, idx) => (
                  <li key={step} className="flex items-center gap-4 text-silver">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-xs uppercase tracking-widest text-white">
                      0{idx + 1}
                    </span>
                    <span className="text-base">{step}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-7 text-sm leading-relaxed text-silver">
                Every stage combines human direction with AI execution to increase speed, range, and consistency without sacrificing creative integrity.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-shell">
        <SectionHeading
          eyebrow="Why Creative XDM"
          title="Built for brands shaping what’s next."
          description="We were designed for modern creative demands: faster timelines, higher standards, and stories that need both cultural fluency and technical depth."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {differentiators.map((item, idx) => (
            <Reveal key={item} delay={idx * 0.05}>
              <div className="luxury-border rounded-2xl p-6 text-silver transition hover:border-iris/40 hover:text-cloud">
                {item}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell pt-6">
        <Reveal>
          <div className="luxury-border rounded-3xl p-8 md:p-12">
            <span className="eyebrow">Start a Project</span>
            <h2 className="max-w-2xl font-serif text-3xl text-white md:text-5xl">
              Bring us the brief, the ambition, or just the spark.
            </h2>
            <p className="mt-5 max-w-2xl text-silver">
              We design and produce premium creative outcomes for teams building the next chapter of brand culture.
            </p>

            <form className="mt-10 grid gap-4 md:grid-cols-2">
              <input className="rounded-xl border border-white/20 bg-white/[0.03] p-3 text-sm text-white placeholder:text-silver/70" placeholder="Name" />
              <input className="rounded-xl border border-white/20 bg-white/[0.03] p-3 text-sm text-white placeholder:text-silver/70" placeholder="Email" type="email" />
              <input className="rounded-xl border border-white/20 bg-white/[0.03] p-3 text-sm text-white placeholder:text-silver/70 md:col-span-2" placeholder="Company" />
              <textarea className="min-h-36 rounded-xl border border-white/20 bg-white/[0.03] p-3 text-sm text-white placeholder:text-silver/70 md:col-span-2" placeholder="Project details" />
              <button className="rounded-full bg-cloud px-7 py-3 text-sm font-semibold uppercase tracking-widest text-ink transition hover:bg-white md:col-span-2 md:w-fit">
                Start a Project
              </button>
            </form>

            <div className="mt-8 text-sm text-silver">
              <p>Email: hello@creativexdm.com</p>
              <p>Instagram: @creativexdm · LinkedIn: /company/creativexdm</p>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
