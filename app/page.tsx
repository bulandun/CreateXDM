import StudentGallery from "@/components/student-gallery";
import ClickGlitch from "@/components/click-glitch";
import Link from "next/link";

const stages = [
  { id: "01", label: "DISCOVER", command: "find --inspiration", description: "Explore incredible visuals and real stories from science, nature, culture and archives using DesignXDM." },
  { id: "02", label: "DECODE", command: "build --concept", description: "Connect ideas, challenge the obvious and create a design with a story worth telling." },
  { id: "03", label: "DESIGN", command: "make --original", description: "Bring your idea to life with creative tools, including custom-made design tools such as our Adobe Express football shirt designer." },
  { id: "04", label: "DEPLOY", command: "share --your-story", description: "Pitch your creation, explain your choices and celebrate the originality of every team." }
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#080909] text-[#f3f4ee] selection:bg-[#a8ff43] selection:text-black">
      <ClickGlitch />
      <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.045]" style={{backgroundImage: "linear-gradient(transparent 50%, #000 50%)", backgroundSize: "100% 4px"}} aria-hidden="true" />
      <header className="relative z-20 mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 border-b border-white/20 px-6 py-6 md:px-10">
        <Link href="/" className="font-mono text-lg font-black tracking-tighter">DESIGN<span className="text-[#a8ff43]">_</span>XDM <span className="font-normal text-[#9eaaa2]">/ UNBLANK THE CANVAS</span></Link>
        <nav aria-label="Main navigation" className="flex flex-wrap items-center gap-4 font-mono text-[11px] font-bold uppercase tracking-wide sm:gap-7">
          <a href="#mission" className="hover:text-[#a8ff43]">[01] Mission</a>
          <a href="#process" className="hover:text-[#a8ff43]">[02] Process</a>
          <a href="#student-work" className="border border-[#a8ff43] px-4 py-2 text-[#a8ff43] transition hover:bg-[#a8ff43] hover:text-black">[04] Design Hackathons ↗</a>
        </nav>
      </header>

      <section className="matrix-hero relative isolate mx-auto flex min-h-[760px] max-w-7xl flex-col justify-center overflow-hidden px-6 py-24 md:px-10" aria-labelledby="hero-title">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-25" style={{backgroundImage: "linear-gradient(to right, #7e9288 1px, transparent 1px),linear-gradient(to bottom, #7e9288 1px, transparent 1px)", backgroundSize: "48px 48px", maskImage:"linear-gradient(to bottom,black,transparent)"}} aria-hidden="true" />
        <div className="pointer-events-none absolute -right-32 top-16 -z-10 h-[480px] w-[480px] rounded-full bg-[#b6ff4a]/10 blur-[100px]" aria-hidden="true" />
        <div className="mb-10 flex flex-wrap items-center gap-4 font-mono text-xs uppercase tracking-[0.16em] text-[#a8ff43]"><span className="inline-block h-2 w-2 animate-pulse rounded-full bg-[#a8ff43]" />SYSTEM ONLINE <span className="text-[#a5aaa6] text-[1.5em] leading-none">// <span className="hackathon-snake-text">DESIGN HACKATHON</span></span></div>
        <h1 id="hero-title" className="max-w-6xl text-[clamp(3.7rem,11.7vw,10.7rem)] font-black uppercase leading-[0.84] tracking-[-0.085em]">UNBLANK<br />THE <span className="matrix-glitch-text relative text-[#a8ff43]" data-text="CANVAS">CANVAS<span className="text-white">.</span></span></h1>
        <div className="mt-12 grid gap-10 border-t border-white/25 pt-8 md:grid-cols-[1fr_auto] md:items-end">
          <div><p className="font-mono text-xs uppercase tracking-[0.18em] text-[#a8ff43]">Creative thinking // activated</p><p className="mt-5 max-w-2xl text-xl leading-snug text-[#e0e3d9] md:text-2xl">Not another design competition. A creative hackathon where innovative minds discover extraordinary stories, break predictable patterns and turn original ideas into real designs.</p></div>
          <a href="#get-involved" className="inline-flex w-fit items-center justify-center bg-[#a8ff43] px-8 py-5 font-mono text-sm font-black uppercase text-[#080909] transition hover:bg-white">JOIN THE MISSION ↗</a>
        </div>
        <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[11px] uppercase tracking-[0.1em] text-[#a9b0a9]"><span>LOCATION: SECRET</span><span>FORMAT: TEAM HACKATHON</span><span>POWERED BY: DESIGNXDM</span></div>
      </section>

      <section id="mission" className="border-y border-white/15 bg-[#121612]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[0.45fr_0.55fr] md:px-10">
          <div><p className="font-mono text-xs font-bold tracking-[0.2em] text-[#a8ff43]">[01] / THE MISSION</p><h2 className="mt-6 text-5xl font-black uppercase leading-[0.94] tracking-tighter md:text-7xl">HACK<br />THE<br /><span className="text-[#a8ff43]">ORDINARY.</span></h2></div>
          <div className="flex flex-col justify-center"><p className="text-2xl font-semibold leading-snug md:text-3xl">Great design begins long before you open a design tool.</p><p className="mt-7 text-lg leading-relaxed text-[#bac5b9]">Unblank the Canvas gives students space to think differently. Using DesignXDM, they uncover unusual visual references, explore their meaning and develop ideas rooted in curiosity, creativity and human stories.</p><p className="mt-5 text-lg leading-relaxed text-[#bac5b9]">Teams then turn those ideas into something tangible, learning to collaborate, experiment and explain not just what they made — but why.</p></div>
        </div>
      </section>

      <section id="process" className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <p className="font-mono text-xs font-bold tracking-[0.2em] text-[#a8ff43]">[02] / THE CREATIVE PROTOCOL</p>
        <h2 className="mt-5 max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-tighter md:text-7xl">FOUR STAGES.<br />ZERO BLANK CANVASES.</h2>
        <div className="mt-14 grid gap-px border border-white/20 bg-white/20 md:grid-cols-2">
          {stages.map((stage) => (
            <article key={stage.id} className="matrix-stage bg-[#0e100e] p-8 transition hover:bg-[#182017] md:p-10">
              <div className="flex items-start justify-between font-mono text-xs text-[#a8ff43]"><span>STEP_{stage.id}</span><span aria-hidden="true">↗</span></div>
              <h3 className="mt-12 text-4xl font-black tracking-tight md:text-5xl">{stage.label}</h3>
              <p className="mt-4 font-mono text-sm text-[#a8ff43]">&gt; {stage.command}</p>
              <p className="mt-6 max-w-md text-base leading-relaxed text-[#bbc4ba]">{stage.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/20 bg-[#a8ff43] text-[#101510]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[1fr_1fr] md:items-center md:px-10">
          <div><p className="font-mono text-xs font-bold tracking-[0.2em]">FIELD REPORT / OXFORD 2026</p><h2 className="mt-5 text-5xl font-black uppercase leading-[0.94] tracking-tighter md:text-7xl">FROM IDEAS<br />TO REALITY.</h2></div>
          <div><p className="text-xl font-semibold leading-relaxed">At Wychwood School in Oxford, student teams explored visual inspiration, designed original football shirts and presented the stories behind their work.</p><p className="mt-5 text-lg leading-relaxed">The winning design is set to become a real football shirt — showing students how creative thinking can move beyond the screen.</p></div>
        </div>
      </section>

      <StudentGallery />

      <section id="get-involved" className="relative mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="border border-[#a8ff43]/60 bg-[#111811] p-8 md:p-16">
          <p className="font-mono text-xs font-bold tracking-[0.2em] text-[#a8ff43]">[03] / YOUR TURN</p>
          <h2 className="mt-6 max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-tighter md:text-7xl">HOST A DESIGN<br /><span className="text-[#a8ff43]">HACKATHON WITH US.</span></h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#c3cfc1]">We welcome conversations with schools, educators, creative professionals and organisations interested in helping the next generation of designers think bigger.</p>
          <div className="mt-10 flex flex-wrap gap-4"><a href="https://www.designxdm.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-[#a8ff43] px-7 py-4 font-mono text-sm font-bold text-black hover:bg-white">EXPLORE DESIGNXDM ↗</a><a href="https://www.linkedin.com/company/design-xdm" target="_blank" rel="noopener noreferrer" className="inline-flex items-center border border-white/40 px-7 py-4 font-mono text-sm font-bold text-white hover:border-[#a8ff43] hover:text-[#a8ff43]">CONNECT ON LINKEDIN ↗</a><a href="mailto:brendan@designxdm.com" className="inline-flex items-center border border-white/40 px-7 py-4 font-mono text-sm font-bold text-white hover:border-[#a8ff43] hover:text-[#a8ff43]">EMAIL US ↗</a></div>
        </div>
      </section>
      <footer className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-white/15 px-6 py-8 font-mono text-xs uppercase tracking-widest text-[#9ba69b] md:px-10"><span>UNBLANK THE CANVAS // BY DESIGNXDM</span><span>DESIGN WITH MEANING.</span></footer>
    </main>
  );
}
