"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
  image: string; // Background Image
  title: string; // Business Title
}

export default function HeroSection({ image, title }: Props) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="relative w-full h-screen flex items-center justify-center overflow-hidden text-white">
      {/* 🔲 Background Image with black/white gradient overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={image}
          alt="Hero Background"
          fill
          className="object-cover object-center grayscale contrast-125"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-white/10 backdrop-blur-sm" />
      </div>

      {/* 🍰 Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        {/* Logo with soft white ring */}
        <div className="inline-block mb-6 rounded-full bg-white/10 p-2 ring-4 ring-white/30 shadow-xl backdrop-blur-md">
          <Image
            src="/raracake/raraLogo.png"
            alt="RaraCake Logo"
            width={100}
            height={100}
            className="object-contain rounded-full"
            priority
          />
        </div>

        {/* Business Title */}
        <h1
          className={`text-5xl md:text-7xl font-extrabold tracking-wide bg-gradient-to-r from-white to-pink-900 bg-clip-text text-transparent drop-shadow-md transition-all duration-700 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          } transform`}
        >
          {title}
        </h1>

        {/* Tagline */}
        <p className="mt-6 text-xl md:text-2xl text-gray-200 font-medium drop-shadow-sm max-w-xl mx-auto">
          Handmade Cakes with <span className="text-white font-bold">❤️</span>{" "}
          in Galați, Romania
        </p>

        {/* 🎯 CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="#menu"
            className="bg-white text-black px-6 py-3 rounded-full font-semibold shadow-md hover:bg-gray-200 transition"
          >
            🎂 See Our Menu
          </a>
          <a
            href="https://wa.me/40758700277"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-pink-300 px-6 py-3 rounded-full font-semibold text-white hover:bg-white hover:text-pink-600 transition"
          >
            💬 Order on WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
