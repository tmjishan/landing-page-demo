"use client";

import Image from "next/image";
import { useEffect, useId, useState } from "react";

type VideoItem = {
  title: string;
  src: string; // mp4/webm url
  thumb: string; // thumbnail (webp/jpg)
  duration?: string; // e.g. "0:26"
};

const videos: VideoItem[] = [
  {
    title: "Convertidora sin Impresión",
    src: "/cartonchile/Carton-sin-impresion.mp4",
    thumb: "/cartonchile/Carton-sin-impresion.png",
    duration: "0:26",
  },
  {
    title: "Pegadora Semiautomática",
    src: "/cartonchile/semi-automatica.mp4",
    thumb: "/cartonchile/semi-automatica.png",
    duration: "0:36",
  },
  {
    title: "Flexo Folder Gluer",
    src: "/cartonchile/flexo-1.mp4",
    thumb: "/cartonchile/flexo-1.png",
    duration: "0:19",
  },
  {
    title: "Flexo Folder Gluer",
    src: "/cartonchile/flexo-2.mp4",
    thumb: "/cartonchile/flexo-2.png",
    duration: "0:32",
  },
];

export default function ProcesoProductivo() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const id = useId();

  // ESC চেপে মডাল বন্ধ
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenIndex(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section
      id="proceso"
      aria-labelledby={`${id}-heading`}
      className="mx-auto max-w-7xl px-4 py-12"
    >
      {/* Title */}
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold tracking-widest text-emerald-500">
            CARTON CHILE
          </p>
          <h2
            id={`${id}-heading`}
            className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl text-white"
          >
            Proceso Productivo
          </h2>
          <p className="mt-1 text-sm text-neutral-300">
            De cartón a caja en cuatro pasos — convertidora, pegado, flexo y
            control de calidad.
          </p>
        </div>
        <a
          href="#cotizar"
          className="hidden rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 sm:inline-block"
        >
          Cotizar ahora
        </a>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {videos.map((v, i) => (
          <button
            key={i}
            onClick={() => setOpenIndex(i)}
            className="group relative rounded-2xl border bg-white text-left shadow-sm transition hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            aria-label={`Reproducir video: ${v.title}`}
          >
            <div className="relative aspect-video overflow-hidden rounded-t-2xl">
              <Image
                src={v.thumb}
                alt={v.title}
                fill
                sizes="(max-width:1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                priority={i === 0}
              />
              {/* Gradient bottom */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent" />
              {/* Play badge */}
              <div className="absolute left-3 top-3 rounded-full bg-black/60 px-2 py-1 text-xs text-white backdrop-blur">
                {v.duration ?? "Video"}
              </div>
              <div className="absolute right-3 bottom-3 grid h-12 w-12 place-items-center rounded-full bg-white/90 shadow group-hover:scale-105">
                {/* Play icon */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-emerald-700"
                >
                  <path d="M4 3.7v12.6c0 .8.9 1.3 1.6.9l10-6.3c.7-.4.7-1.4 0-1.8l-10-6.3C4.9 2.4 4 2.9 4 3.7z" />
                </svg>
              </div>
            </div>
            <div className="p-4">
              <h3 className="line-clamp-2 text-base font-semibold">
                {v.title}
              </h3>
              <p className="mt-1 text-sm text-neutral-600">Ver proceso →</p>
            </div>
          </button>
        ))}
      </div>

      {/* Modal */}
      {openIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4"
          onClick={() => setOpenIndex(null)}
        >
          <div
            className="relative aspect-video w-full max-w-5xl overflow-hidden rounded-2xl bg-black shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              key={openIndex}
              src={videos[openIndex].src}
              controls
              autoPlay
              playsInline
              preload="metadata" // ⬅️ পেজ লোডে হালকা
              poster={videos[openIndex].thumb} // ⬅️ প্লে হওয়ার আগে থাম্ব দেখাবে
              controlsList="nodownload" // ⬅️ ডাউনলোড বাটন লুকাও (সাপোর্টেড ব্রাউজারে)
              className="h-full w-full"
            />
            <button
              onClick={() => setOpenIndex(null)}
              aria-label="Cerrar"
              className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-black hover:bg-white"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
