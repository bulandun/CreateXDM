import Link from "next/link";

export default function VisualsVideoAudioPage() {
  return (
    <main className="mx-auto w-full max-w-[1500px] px-6 py-12 md:px-12">
      <section className="overflow-hidden rounded-[2rem] border border-white/15 bg-black">
        <div className="flex flex-col justify-between p-8 md:p-12">
          <p className="text-sm uppercase tracking-[0.2em] text-[#b8b2a7]">Faster iteration</p>
          <p className="mt-8 max-w-md text-base leading-relaxed text-[#d2cbbd]">
            We explore creative directions across visuals, video, and sound to quickly identify the strongest route
            forward. Gen AI Expertise: Our expertise in generative AI ensures you are guided by specialists who
            understand the latest visual and video generation models, helping bring your vision to life with the most
            realistic, high-quality results.
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-white/15 bg-black/40 md:min-h-[24rem]">
            <video
              className="h-full min-h-[18rem] w-full object-cover md:min-h-[24rem]"
              src="/videos/showreel.mp4"
              controls
              preload="metadata"
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <Link
            href="/"
            className="mt-8 w-fit border border-white/30 px-5 py-2 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-black"
          >
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}
