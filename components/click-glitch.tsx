"use client";

import { useEffect, useRef, useState } from "react";

export default function ClickGlitch() {
  const [burst, setBurst] = useState<{ x: number; y: number; id: number } | null>(null);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleClick = (event: PointerEvent) => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      // Keep the effect cosmetic; clicks and navigation work normally.
      setBurst({ x: event.clientX, y: event.clientY, id: Date.now() });
      if (timeout.current) clearTimeout(timeout.current);
      timeout.current = setTimeout(() => setBurst(null), 240);
    };
    window.addEventListener("pointerdown", handleClick, { passive: true });
    return () => {
      window.removeEventListener("pointerdown", handleClick);
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, []);

  return burst ? (
    <div
      key={burst.id}
      aria-hidden="true"
      className="matrix-click-glitch"
      style={{ left: burst.x, top: burst.y }}
    >
      <span />
      <span />
      <span />
    </div>
  ) : null;
}
