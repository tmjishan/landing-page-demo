import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-pink-100 border-t border-pink-200 py-8 mt-12 text-center text-pink-800 font-sans">
      {/* Logo */}
      <div className="flex justify-center mb-4">
        <Image
          src="/raracake/raraLogo.png" // Make sure this is inside public/raracake/
          alt="RaraCake Logo"
          width={60}
          height={60}
          className="rounded-full shadow-md"
        />
      </div>

      {/* Links or tagline */}
      <p className="text-md italic mb-2">Handmade with ❤️ in Galați, Romania</p>

      <div className="flex justify-center gap-6 mt-4 text-sm">
        <a href="#" className="hover:underline hover:text-pink-600 transition">
          Home
        </a>
        <a
          href="https://www.google.com/maps/search/?api=1&query=raracake"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-pink-600 transition"
        >
          Find us
        </a>
        <a
          href="tel:+40758700277"
          className="hover:underline hover:text-pink-600 transition"
        >
          Call now
        </a>
      </div>

      {/* Copyright */}
      <p className="mt-6 text-xs text-pink-600">
        © {new Date().getFullYear()} RaraCake. All rights reserved.
      </p>
    </footer>
  );
}
