import { Reveal } from "@/components/reveal";

const services = [
  {
    title: "Visuals & Video",
    text: "Standout brand visuals, campaign imagery, films, social content, launch videos, explainers, key art, and creative assets that give ideas clear, compelling form and bring stories to life across platforms.",
    index: "01"
  },
  {
    title: "Creative Systems",
    text: "Scalable workflows, content pipelines, and creative systems that bring more speed, consistency, and control to modern brand production.",
    index: "02"
  },
  {
    title: "Creative Tech Tools",
    text: "Bespoke tools built for creative teams, designed to improve workflows, unlock new possibilities, and turn creative capability into a competitive advantage.",
    index: "03"
  }
];

const featuredWork = [
  {
    title: "Images + video + audio",
    type: "Rapid prototyping",
    stat: "FASTER ITERATION",
    summary:
      "We explore creative directions across visuals, video, and sound to quickly identify the strongest route forward. Gen AI Expertise: Our expertise in generative AI ensures you are guided by specialists who understand the latest visual and video generation models, helping bring your vision to life with the most realistic, high-quality results.",
    tone: "from-[#d9d4cd] via-[#6d685f] to-[#101010]",
    mediaSrc: "/images/images-video-audio-eye.svg",
    mediaAlt: "Macro iris close-up"
  },
  {
    title: "CREATIVE SUPPLY CHAIN",
    type: "Multimodal input",
    stat: "Build Your Creative Supply Chain",
    summary:
      "We help guide your team in building a creative supply chain that gives you complete control over your creative AI production, creating clearer workflows, stronger consistency, faster turnaround times, and better visibility across every stage of the process.",
    tone: "from-[#8f8a7f] via-[#1e1d1b] to-[#090909]",
    mediaSrc: "/images/words-references-collage.svg",
    mediaAlt: "Collage of reference moments connected by arrows"
  },
  {
    title: "CREATIVE TECH TOOLS",
    type: "Execution-ready systems",
    stat: "Creative Tools Built Around Your Business",
    summary:
      "We build custom creative tech tools tailored to your business requirements, creating solutions that streamline workflows, improve efficiency, and give your team more control over how creative work is produced.",
    tone: "from-[#606878] via-[#272b33] to-[#0a0a0a]",
    mediaSrc: "/images/production-ready-output.svg",
    mediaAlt: "UNBLANK THE CANVAS collage artwork"
  }
];

const process = [
  ["Imagine", "We define the vision, audience, tone, references, and creative opportunity."],
  ["Prototype", "We rapidly explore directions across words, images, video, audio, and references to find the strongest route forward."],
  ["Refine", "We edit, align, and sharpen the work so the output matches the brand, the brief, and the intended creative direction."],
  ["Produce", "We turn the approved direction into production-ready visuals, video, and campaign assets."],
  ["Scale", "Where needed, we build creative systems that make future production faster, smarter, and more consistent."]
];

export default function HomePage() {
  return (
    <main className="relative overflow-x-clip pb-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_12%_8%,rgba(242,228,206,0.16),transparent_34%),radial-gradient(circle_at_22%_18%,rgba(189,124,76,0.18),transparent_38%),radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.08),transparent_35%),linear-gradient(180deg,#111111_0%,#0a0a0a_45%,#090909_100%)]" />

      <section className="mx-auto w-full max-w-[1500px] px-6 pb-14 pt-10 md:px-12 lg:pt-14">
        <Reveal>
          <div className="relative min-h-[70vh] overflow-hidden rounded-[2rem] border border-white/15 bg-[#111111] p-8 md:p-12">
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08),transparent_35%),linear-gradient(320deg,rgba(244,76,43,0.14),transparent_45%)]" />
            <div className="absolute -left-24 top-10 h-52 w-52 rounded-full bg-[#f44c2b]/40 blur-[120px]" />
            <div className="absolute right-[9%] top-[14%] h-72 w-72 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(247,235,221,0.58),rgba(255,116,46,0.34)_40%,rgba(120,74,52,0.14)_68%,rgba(12,18,24,0)_100%)] opacity-45 blur-[20px]" />
            <div className="relative inline-flex max-w-fit flex-wrap items-center gap-4 rounded-md bg-black/30 px-4 py-3">
              <div className="inline-flex items-baseline">
                <span className="text-[clamp(1.5rem,4vw,3.2rem)] font-light tracking-tight text-[#f6f4ef]">
                  Create
                </span>
                <span className="text-[clamp(1.5rem,4vw,3.2rem)] font-semibold tracking-tight text-[#f6f4ef]">
                  XDM
                </span>
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#d7d1c6] md:text-sm">
                Redefining the future of the creative studio
              </p>
            </div>

            <h1 className="relative mt-8 max-w-4xl font-serif text-[clamp(3.2rem,11vw,9.5rem)] leading-[0.9] tracking-tight text-[#f6f4ef]">
              We turn your vision into creative reality
            </h1>

            <p className="relative mt-8 max-w-xl text-base leading-relaxed text-[#d7d1c6] md:text-lg">
              We are experts in generative AI creative technology, creating visuals and video, designing smarter creative supply chains, and developing new creative tech solutions.
            </p>

            <div className="relative mt-12 flex flex-wrap items-center gap-4">
              <button className="rounded-full bg-[#f6f4ef] px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black transition hover:-translate-y-0.5">
                Start a Project
              </button>
              <button className="rounded-full border border-white/45 px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10">
                See how we work
              </button>
            </div>
          </div>
        </Reveal>

      </section>

      <section className="mx-auto w-full max-w-[1500px] px-6 md:px-12">
        <Reveal>
          <div className="grid gap-8 border-y border-white/15 py-16 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[#b8b2a7]">Services</p>
              <h2 className="mt-6 font-serif text-5xl leading-[0.95] text-[#f6f4ef] md:text-7xl">
                What we do
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
              <p className="text-xs uppercase tracking-[0.28em] text-[#b8b2a7]">Process</p>
              <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-[0.95] text-[#f6f4ef] md:text-7xl">
                Taste Not Template
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="space-y-8">
          {featuredWork.map((project, idx) => (
            <Reveal key={project.title} delay={idx * 0.08}>
              <article className="group grid overflow-hidden rounded-[2rem] border border-white/15 bg-black lg:grid-cols-[1.1fr_0.9fr]">
                <div className={`relative min-h-[22rem] bg-gradient-to-br ${project.tone} p-8 md:min-h-[30rem] md:p-12`}>
                  {project.mediaSrc ? (
                    <>
                      <img
                        src={project.mediaSrc}
                        alt={project.mediaAlt ?? project.title}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/35" />
                    </>
                  ) : null}
                  <p className="text-xs uppercase tracking-[0.26em] text-white/70">{project.type}</p>
                  <h3 className="relative mt-4 max-w-xl font-serif text-4xl uppercase leading-[0.9] text-[#f7f5ef] md:text-6xl">
                    {project.title}
                  </h3>
                </div>

                <div className="flex flex-col justify-between p-8 md:p-12">
                  <p className="text-sm uppercase tracking-[0.2em] text-[#b8b2a7]">{project.stat}</p>
                  <p className="mt-8 max-w-md text-base leading-relaxed text-[#d2cbbd]">{project.summary}</p>
                  <button className="mt-6 w-fit border border-white/30 px-5 py-2 text-xs uppercase tracking-[0.2em] text-white transition group-hover:bg-white group-hover:text-black">
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
              Creative built for the pace of now
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#d2cbbd]">
              Creative XDM blends creative direction, AI-native workflows, and production thinking to help brands move from idea to execution without the usual bottlenecks. We create visuals, video, and scalable creative systems designed to be original, effective, and ready for real-world use.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative overflow-hidden border border-white/15 p-8 md:p-10">
            <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(255,255,255,0.06),transparent_40%),radial-gradient(circle_at_90%_10%,rgba(244,76,43,0.16),transparent_38%)]" />
            <h3 className="relative text-xs uppercase tracking-[0.26em] text-[#b8b2a7]">How we work</h3>
            <p className="relative mt-4 text-sm leading-relaxed text-[#d2cbbd]">
              Our multimodal process is built to move quickly from vision to output while keeping quality, originality, and control intact.
            </p>
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
