import Link from "next/link";

const supplyChainStages = [
  {
    title: "Input + intent alignment",
    text: "Capture goals, tone, references, legal constraints, and output specs so every team starts from the same source of truth."
  },
  {
    title: "Multimodal prototyping",
    text: "Generate and compare options across image, video, audio, and copy to quickly pressure-test creative routes before production."
  },
  {
    title: "Decision gates + approval",
    text: "Add clear checkpoints for brand, legal, and stakeholder sign-off so quality and compliance stay consistent at scale."
  },
  {
    title: "Production orchestration",
    text: "Route approved concepts into repeatable workflows with assigned owners, handoff rules, and visibility across stages."
  }
];

export default function CreativeSupplyChainPage() {
  return (
    <main className="mx-auto w-full max-w-[1500px] px-6 py-12 md:px-12">
      <section className="overflow-hidden rounded-[2rem] border border-white/15 bg-black">
        <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[22rem] overflow-hidden border-b border-white/10 bg-gradient-to-br from-[#8f8a7f] via-[#1e1d1b] to-[#090909] p-8 md:p-12 lg:border-b-0 lg:border-r">
            <img
              src="/images/words-references-collage.svg"
              alt="Creative supply chain workflow collage"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/45" />
            <p className="relative text-sm uppercase tracking-[0.2em] text-[#b8b2a7]">Build your creative supply chain</p>
            <h1 className="relative mt-5 max-w-xl font-serif text-4xl uppercase leading-[0.9] text-[#f6f4ef] md:text-6xl">
              Creative supply chain
            </h1>
          </div>

          <div className="p-8 md:p-12">
            <p className="max-w-xl text-base leading-relaxed text-[#d2cbbd]">
              We help guide your team in building a creative supply chain that gives you complete control over your creative AI
              production, creating clearer workflows, stronger consistency, faster turnaround times, and better visibility across
              every stage of the process.
            </p>

            <div className="mt-8 space-y-4">
              {supplyChainStages.map((stage, index) => (
                <article key={stage.title} className="border border-white/15 bg-white/[0.03] p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#b8b2a7]">0{index + 1}</p>
                  <h2 className="mt-1 text-lg text-[#f6f4ef]">{stage.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#d2cbbd]">{stage.text}</p>
                </article>
              ))}
            </div>

            <Link
              href="/"
              className="mt-8 inline-flex w-fit border border-white/30 px-5 py-2 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-black"
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
