import Link from "next/link";

export default function VisualsVideoAudioPage() {
  return (
    <main className="mx-auto w-full max-w-[1500px] px-6 py-12 md:px-12">
      <section className="grid overflow-hidden rounded-[2rem] border border-white/15 bg-black lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative min-h-[24rem] bg-gradient-to-br from-[#d9d4cd] via-[#6d685f] to-[#101010] p-8 md:min-h-[30rem] md:p-12">
          <img
            src="/images/images-video-audio-eye.svg"
            alt="Macro iris close-up"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/35" />
          <h1 className="relative mt-4 max-w-xl font-serif text-4xl uppercase leading-[0.9] text-[#f7f5ef] md:text-6xl">
            Visuals, Video and audio
          </h1>
        </div>

        <div className="flex flex-col justify-between p-8 md:p-12">
          <p className="text-sm uppercase tracking-[0.2em] text-[#b8b2a7]">Faster iteration</p>
          <p className="mt-8 max-w-md text-base leading-relaxed text-[#d2cbbd]">
            We explore creative directions across visuals, video, and sound to quickly identify the strongest route
            forward. Gen AI Expertise: Our expertise in generative AI ensures you are guided by specialists who
            understand the latest visual and video generation models, helping bring your vision to life with the most
            realistic, high-quality results.
          </p>
          <Link
            href="/"
            className="mt-6 w-fit border border-white/30 px-5 py-2 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-black"
          >
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}
