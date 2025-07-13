"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const menuItems = [
  "RIGID BOXES",
  "DUPLEX / MICRO-CORRUGATED BOXES",
  "PAPER BAGS",
  "PERSONALIZED STATIONERY",
  "ADVERTISING SYMBOLS",
  "friendship",
  "CONTACT",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* 🏷️ Logo */}
        <Link href="/" className="block w-28">
          {" "}
          {/* <-- Logo container width-controlled */}
          <Image
            src="/ambacproduct/LOGO_COREL-180.png"
            alt="Packaging Showcase"
            width={160}
            height={80}
            className="w-full h-auto object-contain drop-shadow-lg"
          />
        </Link>

        {/* 🍔 Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* 🖥️ Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-800">
          {menuItems.map((item, i) => (
            <Link
              key={i}
              href={`/${item.toLowerCase().replace(/[\s\/]+/g, "-")}`}
              className="hover:text-[#f2c279] transition"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>

      {/* 📱 Mobile Menu */}
      {open && (
        <nav className="md:hidden px-4 pb-4 bg-white shadow">
          {menuItems.map((item, i) => (
            <Link
              key={i}
              href={`/${item.toLowerCase().replace(/[\s\/]+/g, "-")}`}
              className="block py-2 text-gray-800 hover:text-[#f2c279] transition"
              onClick={() => setOpen(false)}
            >
              {item}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
