import Link from "next/link";
import { VideoWithPoster } from "@/components/video-with-poster";

export default function VisualsVideoAudioPage() {
  return (
    <main className="mx-auto w-full max-w-[1500px] px-6 py-12 md:px-12">
      <section className="panel-gradient overflow-hidden rounded-[2rem] border border-white/15">
        <div className="p-8 md:p-12">
          <p className="text-sm uppercase tracking-[0.2em] text-[#b8b2a7]">Faster iteration</p>
          <div className="mt-8 grid gap-8 lg:grid-cols-[0.45fr_0.55fr] lg:items-center">
            <p className="text-base leading-relaxed text-[#d2cbbd]">
              One of my typical workflows, which I developed during the Google for Startups program, begins in Vertex
              AI with an initial prompt that I refine in ChatGPT to sharpen the creative direction. I generate multiple
              images to establish the visual style, then use them to create video sequences with stronger consistency
              across shots. I assemble and edit the sequences in DaVinci Resolve or Premiere Pro, and use ElevenLabs
              for voiceover, sound effects, and music. It is a workflow that combines structured visual development
              with expressive audio storytelling.
            </p>

            <div className="mx-auto w-[68%] overflow-hidden rounded-2xl border border-white/15 bg-black/40 md:w-[72%] lg:w-full">
              <VideoWithPoster
                className="h-full min-h-[16rem] w-full object-cover md:min-h-[20rem]"
                src="/videos/showreel.mp4"
                controls
                preload="metadata"
                playsInline
              >
                Your browser does not support the video tag.
              </VideoWithPoster>
            </div>
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
