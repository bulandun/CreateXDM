"use client";

import { useEffect, useState } from "react";

const photos = [
  { file: "event-01.webp", alt: "Students listening during the design hackathon", caption: "Creative briefing" },
  { file: "event-02.webp", alt: "Students discussing original design directions", caption: "Design collaboration" },
  { file: "event-03.webp", alt: "Student teams presenting football shirt concepts", caption: "Student presentations" },
  { file: "event-04.webp", alt: "Student sharing a visual moodboard with an event mentor", caption: "Creative feedback" },
  { file: "event-05.webp", alt: "Moodboard development on a tablet", caption: "Moodboard exploration" },
  { file: "event-06.webp", alt: "Speaker addressing the Wychwood School hackathon", caption: "Workshop insights" },
  { file: "event-08.webp", alt: "Visual references and creative partners used in the workshop", caption: "Creative inspiration" },
  { file: "event-09.webp", alt: "Design Hackathon Unblank the Canvas at Wychwood School 2026", caption: "Unblank the Canvas" },
  { file: "event-10.webp", alt: "Design Hackathon participation certificates", caption: "Creative achievement" },
];
const imageUrl = (file: string) => `/hackathon/events/${file}`;

export default function EventPics() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key === "ArrowRight") setIndex(i => (i + 1) % photos.length);
      if (event.key === "ArrowLeft") setIndex(i => (i - 1 + photos.length) % photos.length);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button type="button" onClick={() => { setIndex(0); setOpen(true); }}
        className="group relative flex min-h-[210px] flex-col justify-end overflow-hidden bg-[#171b17] p-6 text-left transition hover:bg-[#202920]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={imageUrl(photos[0].file)} alt="" loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-55 transition duration-500 group-hover:scale-105 group-hover:opacity-75" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent"/>
        <span className="relative font-mono text-[11px] uppercase tracking-[0.2em] text-[#a8ff43]">WYCHWOOD / OCT 2026</span>
        <span className="relative mt-3 text-3xl font-black uppercase text-white">EVENT PICS ↗</span>
        <span className="relative mt-2 font-mono text-xs text-[#d5e1d0]">VIEW THE PHOTO GALLERY →</span>
      </button>
      {open && (
        <div role="dialog" aria-modal="true" aria-label="Wychwood School hackathon event photos"
          className="fixed inset-0 z-[110] flex flex-col bg-[#080909]/95 p-4 md:p-10"
          onClick={() => setOpen(false)}>
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 border-b border-white/20 pb-4">
            <div>
              <p className="font-mono text-xs text-[#a8ff43]">EVENT PICS // WYCHWOOD SCHOOL / 14 OCT 2026</p>
              <p className="mt-2 font-mono text-sm text-white">{index + 1} / {photos.length} — {photos[index].caption}</p>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close photo gallery"
              className="border border-white/40 px-4 py-2 font-mono text-white hover:border-[#a8ff43]">✕ CLOSE</button>
          </div>
          <div className="mx-auto flex min-h-0 w-full max-w-6xl flex-1 items-center justify-center py-4" onClick={e => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imageUrl(photos[index].file)} alt={photos[index].alt}
              className="max-h-full max-w-full object-contain" />
          </div>
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 border-t border-white/20 pt-4 font-mono text-sm text-white"
            onClick={e => e.stopPropagation()}>
            <button type="button" onClick={() => setIndex(i => (i - 1 + photos.length) % photos.length)}
              className="border border-white/30 px-4 py-3 hover:border-[#a8ff43]">← PREV</button>
            <span className="hidden text-[#a8ff43] sm:block">UNBLANK THE CANVAS</span>
            <button type="button" onClick={() => setIndex(i => (i + 1) % photos.length)}
              className="border border-white/30 px-4 py-3 hover:border-[#a8ff43]">NEXT →</button>
          </div>
        </div>
      )}
    </>
  );
}
