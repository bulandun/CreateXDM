"use client";

import { useEffect, useMemo, useState } from "react";
import type { VideoHTMLAttributes } from "react";

type VideoWithPosterProps = Omit<VideoHTMLAttributes<HTMLVideoElement>, "poster"> & {
  src: string;
  poster?: string;
};

const THUMBNAIL_SECOND = 1.5;

function generateVideoPoster(src: string): Promise<string | null> {
  return new Promise((resolve) => {
    const video = document.createElement("video");
    video.src = src;
    video.muted = true;
    video.playsInline = true;
    video.preload = "auto";
    video.crossOrigin = "anonymous";

    let completed = false;

    const cleanup = () => {
      video.onloadedmetadata = null;
      video.onseeked = null;
      video.onerror = null;
    };

    const finish = (value: string | null) => {
      if (completed) return;
      completed = true;
      cleanup();
      resolve(value);
    };

    video.onloadedmetadata = () => {
      if (video.videoWidth === 0 || video.videoHeight === 0) {
        finish(null);
        return;
      }

      const duration = Number.isFinite(video.duration) ? video.duration : 0;
      const targetTime = duration > 0 ? Math.min(THUMBNAIL_SECOND, Math.max(0, duration - 0.1)) : 0;

      if (targetTime === 0) {
        try {
          const canvas = document.createElement("canvas");
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          const context = canvas.getContext("2d");
          if (!context) {
            finish(null);
            return;
          }
          context.drawImage(video, 0, 0, canvas.width, canvas.height);
          finish(canvas.toDataURL("image/jpeg", 0.85));
        } catch {
          finish(null);
        }
      } else {
        video.currentTime = targetTime;
      }
    };

    video.onseeked = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        const context = canvas.getContext("2d");
        if (!context) {
          finish(null);
          return;
        }

        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        finish(canvas.toDataURL("image/jpeg", 0.85));
      } catch {
        finish(null);
      }
    };

    video.onerror = () => finish(null);
  });
}

export function VideoWithPoster({ src, poster, ...props }: VideoWithPosterProps) {
  const [generatedPoster, setGeneratedPoster] = useState<string | null>(null);
  const resolvedPoster = useMemo(() => poster ?? generatedPoster ?? undefined, [poster, generatedPoster]);

  useEffect(() => {
    if (poster) return;

    let active = true;

    generateVideoPoster(src).then((thumbnail) => {
      if (!active || !thumbnail) return;
      setGeneratedPoster(thumbnail);
    });

    return () => {
      active = false;
    };
  }, [poster, src]);

  return <video {...props} src={src} poster={resolvedPoster} preload={props.preload ?? "metadata"} />;
}
