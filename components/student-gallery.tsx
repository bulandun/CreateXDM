"use client";

import { useState } from "react";
import { projects } from "../app/student-projects";

function OriginalArtwork({ filename, label, project }: { filename: string | null; label: string; project: string }) {
  const [failed, setFailed] = useState(false);
  if (!filename) return null;
  return (
    <div className="min-w-0">
      <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[#a8ff43]">{label}</p>
      <div className="relative flex min-h-44 items-center justify-center overflow-hidden border border-white/15 bg-[#171b17]">
        {failed ? (
          <div className="px-6 py-12 text-center font-mono text-xs leading-loose text-[#aab3a7]">
            <span className="block text-[#a8ff43]">ORIGINAL ARTWORK</span>
            <span>Image awaiting upload from the student presentation.</span>
          </div>
        ) : (
          // Use the student's original presentation image, never generated replacements.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`/hackathon/${filename}`}
            alt={`${project} — ${label.toLowerCase()} created by students`}
            className="h-auto max-h-[530px] w-full object-contain"
            loading="lazy"
            onError={() => setFailed(true)}
          />
        )}
      </div>
    </div>
  );
}

export default function StudentGallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const active = selected !== null ? projects[selected] : null;
  return (
    <section id="student-work" className="mx-auto max-w-7xl px-6 py-24 md:px-10">
      <div className="mb-12">
        <p className="font-mono text-xs font-bold tracking-[0.2em] text-[#a8ff43]">[04] / STUDENT WORK // WYCHWOOD 2026</p>
        <h2 className="mt-5 text-5xl font-black uppercase leading-[0.96] tracking-tighter md:text-7xl">THE CREATIVE<br /><span className="text-[#a8ff43]">ARCHIVE.</span></h2>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#b8c5b8]">Eleven teams. Eleven original creative directions. Explore each design, its inspiration, and the students who made it.</p>
      </div>
      <div className="grid gap-px border border-white/20 bg-white/20 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <button type="button" key={p.id} onClick={() => setSelected(i)} className="group bg-[#0e110e] p-6 text-left transition hover:bg-[#182119]">
            <span className="font-mono text-[11px] text-[#a8ff43]">PROJECT_{String(p.id).padStart(2, "0")} ↗</span>
            <div className="pointer-events-none mt-5"><OriginalArtwork filename={p.hero} label="Final shirt design" project={p.title}/></div>
            <h3 className="mt-6 text-2xl font-black uppercase tracking-tight">{p.title}</h3>
            <p className="mt-3 text-sm text-[#bfcbbd]">{p.students}</p>
            <p className="mt-4 font-mono text-xs text-[#a8ff43]">OPEN PROJECT →</p>
          </button>
        ))}
      </div>
      {active && (
        <div role="dialog" aria-modal="true" aria-label={active.title} className="fixed inset-0 z-[100] overflow-y-auto bg-black/90 p-4 md:p-10" onClick={() => setSelected(null)}>
          <div className="mx-auto max-w-5xl border border-[#a8ff43]/50 bg-[#0b0d0b] p-5 md:p-10" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="font-mono text-xs text-[#a8ff43]">PROJECT_{String(active.id).padStart(2, "0")} // ORIGINAL STUDENT WORK</p>
                <h3 className="mt-4 text-4xl font-black uppercase md:text-6xl">{active.title}</h3>
                <p className="mt-4 text-[#c4ccc2]">Designed by {active.students}</p>
              </div>
              <button type="button" onClick={() => setSelected(null)} aria-label="Close project" className="shrink-0 border border-white/30 px-4 py-2 font-mono text-sm hover:border-[#a8ff43]">✕</button>
            </div>
            <p className="my-9 max-w-3xl border-l-2 border-[#a8ff43] pl-5 text-lg leading-relaxed text-[#d2dacd]">{active.story}</p>
            <div className="grid gap-7 md:grid-cols-2">
              <OriginalArtwork filename={active.hero} label="Final shirt design" project={active.title}/>
              <OriginalArtwork filename={active.moodboard} label="Original moodboard" project={active.title}/>
              <OriginalArtwork filename={active.flat} label="Original 2D design" project={active.title}/>
            </div>
            <div className="mt-8 flex gap-4 border-t border-white/20 pt-6 font-mono text-xs">
              <button type="button" onClick={() => setSelected((selected! + projects.length - 1) % projects.length)} className="border border-white/30 px-5 py-3 hover:border-[#a8ff43]">← PREV</button>
              <button type="button" onClick={() => setSelected((selected! + 1) % projects.length)} className="border border-white/30 px-5 py-3 hover:border-[#a8ff43]">NEXT →</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
