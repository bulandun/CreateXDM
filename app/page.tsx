import { Reveal } from "@/components/reveal";

const services = [
  {
    title: "Brand Worlds",
    text: "Ownable campaign worlds that turn strategy into a distinctive visual and narrative system across every touchpoint.",
    index: "01"
  },
  {
    title: "Campaign Content",
    text: "Hero ideas translated into launch films, social narratives, stills, and rollout ecosystems built for full-funnel momentum.",
    index: "02"
  },
  {
    title: "AI Production Systems",
    text: "AI-native production architecture that increases velocity, protects quality, and scales output without losing creative intent.",
    index: "03"
  },
  {
    title: "Creative Technology + Direction",
    text: "Strategic creative leadership paired with custom tools, prototypes, and workflows that modernize internal capability.",
    index: "04"
  }
];

const featuredWork = [
  {
    title: "Maison Nord / The Velvet Signal",
    type: "Global fashion launch",
    stat: "12 markets",
    summary:
      "A campaign world blending practical styling, AI set extension, and editorial finishing into one cinematic release system.",
    tone: "from-[#8f8a7f] via-[#1e1d1b] to-[#090909]"
  },
  {
    title: "AETHER / OBJECT IN MOTION",
    type: "Consumer tech reveal",
    stat: "140 deliverables",
    summary:
      "A full-funnel visual language spanning hero film, still life campaign frames, and adaptive social edits.",
    tone: "from-[#d9d4cd] via-[#6d685f] to-[#101010]"
  },
  {
    title: "Parallel Club / Night Archive",
    type: "Culture campaign",
    stat: "Always-on",
    summary:
      "An editorial-first content engine built to release weekly narrative drops with high-aesthetic consistency.",
    tone: "from-[#606878] via-[#272b33] to-[#0a0a0a]"
  }
];

const process = [
  ["Frame", "Find the cultural pressure point, then define the brand position worth dramatizing."],
  ["Worldbuild", "Translate strategy into image systems, mood grammar, and narrative structures."],
  ["Produce", "Move through AI-native production with hands-on creative direction and ruthless curation."],
  ["Launch", "Deliver deployable assets plus repeatable systems the team can scale after launch."]
];

export default function HomePage() {
  return (
    <main className="relative overflow-x-clip pb-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_10%,rgba(244,76,43,0.15),transparent_35%),radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.09),transparent_35%),linear-gradient(180deg,#111111_0%,#0a0a0a_45%,#090909_100%)]" />

      <section className="mx-auto grid w-full max-w-[1500px] gap-8 px-6 pb-14 pt-10 md:px-12 lg:grid-cols-[1.1fr_0.9fr] lg:pt-14">
        <Reveal>
          <div className="relative min-h-[70vh] overflow-hidden rounded-[2rem] border border-white/15 bg-[#111111] p-8 md:p-12">
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08),transparent_35%),linear-gradient(320deg,rgba(244,76,43,0.14),transparent_45%)]" />
            <div className="absolute -left-24 top-10 h-52 w-52 rounded-full bg-[#f44c2b]/40 blur-[120px]" />
            <p className="relative max-w-fit border border-white/30 px-3 py-1 text-[0.62rem] uppercase tracking-[0.35em] text-white/80">
              Creative XDM / Integrated AI-native creative agency
            </p>

            <h1 className="relative mt-8 max-w-4xl font-serif text-[clamp(3.2rem,11vw,9.5rem)] uppercase leading-[0.9] tracking-tight text-[#f6f4ef]">
              We build
              <br />
              modern brand
              <br />
              campaigns.
            </h1>

            <p className="relative mt-8 max-w-xl text-base leading-relaxed text-[#d7d1c6] md:text-lg">
              Creative XDM helps ambitious brands launch distinctive campaigns, scale high-performing content, and build modern creative capability through integrated strategy, production, and technology.
            </p>

            <div className="relative mt-12 flex flex-wrap items-center gap-4">
              <button className="rounded-full bg-[#f6f4ef] px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black transition hover:-translate-y-0.5">
                Start a Project
              </button>
              <button className="rounded-full border border-white/45 px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10">
                View featured work
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid h-full gap-6">
            <article className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#191816] p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-[#d2cbbd]">Current mode</p>
              <p className="mt-4 text-3xl font-medium leading-tight text-[#f6f4ef]">
                One integrated offer: strategy, campaign creation, and scalable creative systems.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3 text-sm text-[#d2cbbd]">
                <div className="border border-white/20 p-3">Brand worlds</div>
                <div className="border border-white/20 p-3">Campaign content</div>
                <div className="border border-white/20 p-3">AI production</div>
                <div className="border border-white/20 p-3">Creative direction</div>
              </div>
            </article>

            <article className="relative isolate min-h-64 overflow-hidden rounded-[2rem] border border-white/15 bg-black p-8">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-45" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
              <div className="relative">
                <p className="text-xs uppercase tracking-[0.24em] text-white/70">Signal note</p>
                <p className="mt-3 max-w-xs text-xl leading-snug text-white">
                  We design systems where speed scales output, and creative leadership protects brand distinction.
                </p>
              </div>
            </article>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-[1500px] px-6 md:px-12">
        <Reveal>
          <div className="grid gap-8 border-y border-white/15 py-16 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[#b8b2a7]">Services</p>
              <h2 className="mt-6 font-serif text-5xl leading-[0.95] text-[#f6f4ef] md:text-7xl">
                Integrated capabilities
                <br />
                for modern brand growth.
              </h2>
            </div>

            <div className="space-y-4">
              {services.map((service, idx) => (
                <Reveal key={service.title} delay={idx * 0.06}>
                  <article className="group grid items-start gap-5 border border-white/15 bg-white/[0.03] p-5 transition hover:-translate-y-1 hover:bg-white/[0.05] md:grid-cols-[90px_1fr]">
                    <p className="text-sm uppercase tracking-[0.18em] text-[#b8b2a7]">{service.index}</p>
                    <div>
                      <h3 className="text-2xl text-[#f6f4ef] transition group-hover:tracking-wide">{service.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#d2cbbd]">{service.text}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-[1600px] px-6 py-20 md:px-12">
        <Reveal>
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[#b8b2a7]">Featured work</p>
              <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-[0.95] text-[#f6f4ef] md:text-7xl">
                Campaign reveals,
                <br />
                not portfolio thumbnails.
              </h2>
            </div>
            <p className="hidden max-w-sm text-sm leading-relaxed text-[#d2cbbd] lg:block">
              We combine strategic direction, premium craft, and AI-native systems to deliver work that performs now and compounds over time.
            </p>
          </div>
        </Reveal>

        <div className="space-y-8">
          {featuredWork.map((project, idx) => (
            <Reveal key={project.title} delay={idx * 0.08}>
              <article className="group grid overflow-hidden rounded-[2rem] border border-white/15 bg-black lg:grid-cols-[1.1fr_0.9fr]">
                <div className={`min-h-[22rem] bg-gradient-to-br ${project.tone} p-8 md:min-h-[30rem] md:p-12`}>
                  <p className="text-xs uppercase tracking-[0.26em] text-white/70">{project.type}</p>
                  <h3 className="mt-4 max-w-xl font-serif text-4xl uppercase leading-[0.9] text-[#f7f5ef] md:text-6xl">
                    {project.title}
                  </h3>
                </div>

                <div className="flex flex-col justify-between p-8 md:p-12">
                  <p className="text-sm uppercase tracking-[0.2em] text-[#b8b2a7]">{project.stat}</p>
                  <p className="mt-8 max-w-md text-base leading-relaxed text-[#d2cbbd]">{project.summary}</p>
                  <button className="mt-10 w-fit border border-white/30 px-5 py-2 text-xs uppercase tracking-[0.2em] text-white transition group-hover:bg-white group-hover:text-black">
                    View case study
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-[1500px] gap-10 px-6 py-8 md:px-12 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <div className="border border-white/15 bg-[#121110] p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.28em] text-[#b8b2a7]">About</p>
            <h2 className="mt-6 font-serif text-4xl leading-tight text-[#f6f4ef] md:text-6xl">
              We operate as a strategic creative partner, not a production vendor.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#d2cbbd]">
              Creative XDM is an integrated agency that helps brands define their creative direction, launch standout campaigns, and install AI-native ways of working. We partner with ambitious teams that want measurable outcomes and premium execution.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative overflow-hidden border border-white/15 p-8 md:p-10">
            <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(255,255,255,0.06),transparent_40%),radial-gradient(circle_at_90%_10%,rgba(244,76,43,0.16),transparent_38%)]" />
            <h3 className="relative text-xs uppercase tracking-[0.26em] text-[#b8b2a7]">Process</h3>
            <div className="relative mt-5 space-y-5">
              {process.map(([title, text], idx) => (
                <div key={title} className="border-b border-white/15 pb-4 last:border-none">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#f6f4ef]">0{idx + 1} / {title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#d2cbbd]">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto w-full max-w-[1500px] px-6 pt-14 md:px-12">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-[#151311] p-8 md:p-14">
            <div className="absolute -right-28 top-8 h-72 w-72 rounded-full bg-[#f44c2b]/35 blur-[120px]" />
            <p className="relative text-xs uppercase tracking-[0.3em] text-[#d2cbbd]">Contact</p>
            <h2 className="relative mt-6 max-w-4xl font-serif text-4xl uppercase leading-[0.9] text-[#f6f4ef] md:text-7xl">
              Let&apos;s build your next campaign platform.
            </h2>

            <form className="relative mt-10 grid gap-4 md:grid-cols-2">
              <input className="border border-white/25 bg-black/30 p-3 text-sm text-white placeholder:text-white/55 focus:border-[#f44c2b] focus:outline-none" placeholder="Name" />
              <input className="border border-white/25 bg-black/30 p-3 text-sm text-white placeholder:text-white/55 focus:border-[#f44c2b] focus:outline-none" placeholder="Email" type="email" />
              <input className="border border-white/25 bg-black/30 p-3 text-sm text-white placeholder:text-white/55 focus:border-[#f44c2b] focus:outline-none md:col-span-2" placeholder="Brand / company" />
              <textarea className="min-h-36 border border-white/25 bg-black/30 p-3 text-sm text-white placeholder:text-white/55 focus:border-[#f44c2b] focus:outline-none md:col-span-2" placeholder="What are you launching?" />
              <button className="w-fit bg-[#f6f4ef] px-7 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black transition hover:-translate-y-0.5 md:col-span-2">
                Start conversation
              </button>
            </form>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
