"use client";

import { useEffect, useRef, useState } from "react";
import { projects } from "../app/student-projects";

function OriginalArtwork({ filename, label, project }: { filename: string | null; label: string; project: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="min-w-0">
      <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[#a8ff43]">{label}</p>
      <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden border border-white/15 bg-[#171b17]">
        {!filename || failed ? (
          <div className="px-6 py-12 text-center font-mono text-xs leading-loose text-[#aab3a7]">
            <span className="block text-[#a8ff43]">ORIGINAL ARTWORK</span>
            <span>Image awaiting upload from the student presentation.</span>
          </div>
        ) : (
          // Use the student's original presentation image, never generated replacements.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`/hackathon/${filename}?v=20261016-refresh`}
            alt={`${project} — ${label.toLowerCase()} created by students`}
            className="absolute inset-0 h-full w-full object-contain object-center"
            loading="eager"
            decoding="async"
            onError={() => setFailed(true)}
          />
        )}
      </div>
    </div>
  );
}

export default function StudentGallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selected === null) return;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = oldOverflow; };
  }, [selected !== null]);

  useEffect(() => {
    if (selected !== null && modalRef.current) modalRef.current.scrollTop = 0;
  }, [selected]);
  const active = selected !== null ? projects[selected] : null;
  return (
    <section id="student-work" className="mx-auto max-w-7xl px-6 py-24 md:px-10">
      <div className="mb-12">
        <p className="font-mono text-xs font-bold tracking-[0.2em] text-[#a8ff43]">[04] / WYCHWOOD SCHOOL, OXFORD / 2026</p>
        <h2 className="mt-5 text-5xl font-black uppercase leading-[0.96] tracking-tighter md:text-7xl">DESIGN HACKATHON <span className="text-[#a8ff43]">01</span></h2>
        <h3 className="mt-9 text-2xl font-black uppercase tracking-tight md:text-4xl">35 STUDENTS. 11 TEAMS. 1 CHALLENGE.</h3>
        <div className="mt-6 max-w-4xl space-y-5 text-lg leading-relaxed text-[#c5d0c4]">
          <p>35 students from <a href="https://wychwoodschool.org/" target="_blank" rel="noopener noreferrer" className="font-bold text-white underline decoration-[#a8ff43] underline-offset-4 transition hover:text-[#a8ff43]">Wychwood School, Oxford</a>, designed football shirts for the <a href="https://joshmceachranacademy.com/" target="_blank" rel="noopener noreferrer" className="font-bold text-white underline decoration-[#a8ff43] underline-offset-4 transition hover:text-[#a8ff43]">Josh McEachran Football Academy</a>, founded by the former Chelsea and Oxford United player. Each design reflected the values of the school and academy.</p>
          <p>Students used <a href="https://www.designxdm.com/" target="_blank" rel="noopener noreferrer" className="font-bold text-white underline decoration-[#a8ff43] underline-offset-4 transition hover:text-[#a8ff43]">DesignXDM</a> to discover visual inspiration and develop their ideas, then brought them to life with the <a href="https://adobesparkpost.app.link/TR9Mb7TXFLb?addOnId=w66kkn532" target="_blank" rel="noopener noreferrer" className="font-bold text-white underline decoration-[#a8ff43] underline-offset-4 transition hover:text-[#a8ff43]">Adobe Express football shirt designer add-on</a>.</p>
          <p className="border-l-2 border-[#a8ff43] pl-5 font-bold text-white">The winning design will become a real football shirt.</p>
        </div>
        <p className="mt-12 font-mono text-xs uppercase tracking-[0.18em] text-[#a8ff43]">// EXPLORE THE STUDENT DESIGNS ↓</p>
      </div>
      <div className="grid gap-px border border-white/20 bg-white/20 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <button type="button" key={p.id} onClick={() => setSelected(i)} className="group flex h-full min-w-0 flex-col bg-[#0e110e] p-6 text-left transition hover:bg-[#182119]">
            <span className="font-mono text-[11px] text-[#a8ff43]">PROJECT_{String(p.id).padStart(2, "0")} ↗</span>
            <h3 className="mt-5 min-h-[3.5rem] text-2xl font-black uppercase tracking-tight">{p.title}</h3>
            <p className="mt-3 text-sm text-[#bfcbbd]">{p.students}</p>
            <p className="mt-auto pt-4 font-mono text-xs text-[#a8ff43]">OPEN PROJECT →</p>
          </button>
        ))}
      </div>
      {active && (
        <div ref={modalRef} role="dialog" aria-modal="true" aria-label={active.title} className="project-modal-scroll fixed inset-0 z-[100] overflow-y-auto overscroll-contain bg-black/90 p-4 md:p-10" onClick={() => setSelected(null)}>
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
              <OriginalArtwork filename={active.moodboard} label="Moodcanvas" project={active.title}/>
              <OriginalArtwork filename={active.hero} label="Shirt Design" project={active.title}/>
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
