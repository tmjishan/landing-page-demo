"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when mobile menu is open (nice UX touch)
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <nav className="fixed inset-x-0 top-11 z-50  text-white shadow">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="https://cdn.prod.website-files.com/5c6f93ec9b547730f9f6df60/63a2bc93fe5e827ff000de4c_2212-JV-Footer-Logo.svg"
            alt="Tanvir Mehedi Web Developer Logo"
            width={150}
            height={50}
            className="h-9 w-auto"
            priority
          />
        </Link>

        {/* Desktop Menu (no social icons) */}
        <div className="hidden items-center space-x-10 md:flex text-xl font-medium">
          <Link href="/projects" className="transition hover:text-red-500">
            Projects
          </Link>
          <Link href="/#services" className="transition hover:text-red-500">
            Services
          </Link>
          <Link href="/#about" className="transition hover:text-red-500">
            About
          </Link>
          <Link href="/#approach" className="transition hover:text-red-500">
            Approach
          </Link>
          <a
            href="https://shop.jimmyviquez.design/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-red-500"
          >
            Store
          </a>
          <Link href="/resources" className="transition hover:text-red-500">
            Resources
          </Link>
          <Link href="/#contact" className="transition hover:text-red-500">
            Contact
          </Link>
        </div>

        {/* Desktop CTA */}
        <Link
          href="#"
          className="hidden rounded bg-red-600 px-4 py-2 font-semibold text-white transition hover:bg-red-700 "
        >
          Start a project
        </Link>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          className="flex flex-col space-y-1 md:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-white transition ${
              isOpen ? "translate-y-1.5 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition ${
              isOpen ? "-translate-y-1.5 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu (links + social + CTA). Hidden on md+ */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-gray-800 transition-[max-height] duration-300 overflow-hidden ${
          isOpen ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <div className="flex flex-col space-y-4 px-6 py-4">
          <Link
            href="/projects"
            className="transition hover:text-red-500"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/#services"
            className="transition hover:text-red-500"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/#about"
            className="transition hover:text-red-500"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="/#approach"
            className="transition hover:text-red-500"
            onClick={() => setIsOpen(false)}
          >
            Approach
          </Link>
          <a
            href="https://shop.jimmyviquez.design/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-red-500"
            onClick={() => setIsOpen(false)}
          >
            Store
          </a>
          <Link
            href="/resources"
            className="transition hover:text-red-500"
            onClick={() => setIsOpen(false)}
          >
            Resources
          </Link>
          <Link
            href="/#contact"
            className="transition hover:text-red-500"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>

          {/* Social (mobile only) */}
          <div className="border-t border-gray-700 pt-3">
            <div className="mb-3 text-sm text-gray-300">Social</div>
            <div className="flex items-center space-x-4">
              {[
                {
                  href: "https://www.instagram.com/jimmyviquez/",
                  src: "https://cdn.prod.website-files.com/5c6f93ec9b547730f9f6df60/6390450c9311828d9ba978dd_Light-Grey-Social-Media-Icons-Instagram.svg",
                  alt: "Instagram",
                },
                {
                  href: "https://www.behance.net/jimmyviquez",
                  src: "https://cdn.prod.website-files.com/5c6f93ec9b547730f9f6df60/6390450cf1ad115cefed6481_Light-Grey-Social-Media-Icons-Behance.svg",
                  alt: "Behance",
                },
                {
                  href: "https://www.facebook.com/jimmyviquezdesign",
                  src: "https://cdn.prod.website-files.com/5c6f93ec9b547730f9f6df60/6390450ccedc3f7ead2a4f6c_Light-Grey-Social-Media-Icons-Facebook.svg",
                  alt: "Facebook",
                },
                {
                  href: "https://www.linkedin.com/in/jimmyviquez/",
                  src: "https://cdn.prod.website-files.com/5c6f93ec9b547730f9f6df60/6390450c538296b43b08ed10_Light-Grey-Social-Media-Icons-LinkedIn.svg",
                  alt: "LinkedIn",
                },
                {
                  href: "https://dribbble.com/jimmyviquez",
                  src: "https://cdn.prod.website-files.com/5c6f93ec9b547730f9f6df60/6390450c3644732fa8e37d4c_Light-Grey-Social-Media-Icons-Dribbble.svg",
                  alt: "Dribbble",
                },
                {
                  href: "https://twitter.com/jimmyviquez_",
                  src: "https://cdn.prod.website-files.com/5c6f93ec9b547730f9f6df60/666566f79dd639bb0f3aebf5_Light-Grey-Social-Media-Icons-X.svg",
                  alt: "X",
                },
              ].map((icon) => (
                <a
                  key={icon.href}
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={icon.alt}
                >
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile CTA */}
          <Link
            href="#"
            className="mt-2 w-full rounded bg-red-600 px-4 py-2 text-center font-semibold text-white transition hover:bg-red-700"
            onClick={() => setIsOpen(false)}
          >
            Start a project
          </Link>
        </div>
      </div>
    </nav>
  );
}
