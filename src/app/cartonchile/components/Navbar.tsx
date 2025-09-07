"use client";
import { FiPhone, FiMail, FiArrowRight } from "react-icons/fi";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // slow motion
    }
  }, []);

  return (
    <div className="">
      {/* Background video + overlay */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <video
          ref={videoRef}
          src="/cartonchile/flexo-2.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute left-1/2 top-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Top bar */}
      <div className="bg-white/50 backdrop-blur shadow-md w-full">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-3 sm:flex-row sm:gap-6">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Cartonchile Home"
            className="flex-shrink-0"
          >
            <Image
              src="/cartonchile/logo_cartonchile.jpg"
              alt="Cartonchile Logo"
              width={160}
              height={52}
              className="h-auto rounded-xl"
              priority
              sizes="(max-width: 640px) 120px, 160px"
            />
          </Link>

          {/* Contact Block */}
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
            <Link
              href="tel:+56996825284"
              className="flex items-center gap-2 rounded-lg bg-red-700 px-4 py-2 text-lg font-semibold text-white shadow-md transition hover:scale-105 hover:bg-red-800"
            >
              <FiPhone className="text-xl" />
              <span>+56 9 9682 5284</span>
            </Link>

            <span className="hidden font-bold text-xl text-gray-600 sm:inline">
              OR
            </span>

            <Link
              href="mailto:ventas@cartonchile.cl"
              className="flex items-center gap-2 rounded-lg bg-green-700 px-4 py-2 text-lg font-semibold text-white shadow-md transition hover:scale-105 hover:bg-green-800"
            >
              <FiMail className="text-xl" />
              <span>ventas@cartonchile.cl</span>
            </Link>
          </div>

          {/* Chile Recicla badge */}
          <div className="flex-shrink-0">
            <Image
              src="/cartonchile/chilerecicla.png"
              alt="Chile Recicla Logo"
              width={140}
              height={48}
              className="h-auto"
              priority
              sizes="(max-width: 640px) 100px, 140px"
            />
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------------- */}
      {/* Banner / Hero */}
      <div className="relative z-10 min-w-full min-h-screen flex flex-col items-center text-center top-20">
        <h1
          className=" text-2xl sm:text-2xl md:text-5xl font-extrabold text-white tracking-wide uppercase
                       leading-snug md:max-w-3xl px-3"
        >
          We are specialists in the manufacture of custom boxes
        </h1>

        <h2 className="mt-3 text-base sm:text-xl md:text-2xl max-w-xl font-medium text-white/90 leading-relaxed px-4">
          Corrugated packaging done the right way — durable, sustainable, and
          tailored to your brand.
        </h2>

        <button
          type="button"
          className="mt-6 bg-red-800 text-white px-5 py-3 sm:px-6 rounded-md text-base sm:text-lg
                     font-semibold shadow-md transition-transform hover:scale-105 hover:bg-red-700
                     focus:outline-none focus:ring-2 focus:ring-white/50"
        >
          Get a Quote
        </button>
      </div>
    </div>
  );
}
