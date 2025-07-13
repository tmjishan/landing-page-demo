"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center gap-10">
      {/* Left Text */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Premium <span className="text-white">Packaging</span> Solutions
        </h1>

        <p className="mt-4 text-lg text-[#333]">
          Passion For Packaging in {/* Romania highlight */}
          <span className="relative font-semibold inline-block">
            Romania
            <span
              aria-hidden="true"
              className="absolute left-0 bottom-0 w-full h-3 rounded-sm bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 opacity-70"
              style={{ zIndex: -1 }}
            />
          </span>
          , {/* Brasov highlight */}
          <span className="relative font-semibold inline-block">
            Brasov
            <span
              aria-hidden="true"
              className="absolute left-0 bottom-0 w-full h-3 rounded-sm bg-yellow-400 opacity-70"
              style={{ zIndex: -1 }}
            />
          </span>
        </p>

        <Link
          href="/contact"
          className="mt-6 inline-block bg-white text-[#222] font-bold px-6 py-3 rounded-full shadow hover:bg-black hover:text-white transition"
        >
          Get a Quote
        </Link>
      </div>

      {/* Right Image (Tilted Style) */}
      <div className="md:w-1/2 flex justify-center items-center">
        <div className="w-80 h-80 rounded-xl bg-white shadow-2xl overflow-hidden transform rotate-[-6deg] hover:rotate-0 transition duration-500 ease-in-out">
          <img
            src="/ambacproduct/banner.webp"
            alt="Packaging Showcase"
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
