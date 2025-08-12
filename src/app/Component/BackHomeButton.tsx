// components/BackHomeButton.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M12 3 3 10h2v9h5v-5h4v5h5v-9h2L12 3z" />
    </svg>
  );
}

export default function BackHomeButton() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <Link
      href="/"
      aria-label="Back to home"
      title="Back to home"
      className="
        group
        fixed bottom-[max(1rem,env(safe-area-inset-bottom))]
        right-[max(0.25rem,env(safe-area-inset-right))]
        z-50
        flex items-center
        h-12 w-12 hover:w-48 focus:w-48
        rounded-full
        bg-white/80 backdrop-blur
        text-neutral-900
        shadow-lg ring-1 ring-black/10
        overflow-hidden
        transition-[width,transform,background-color] duration-300 ease-out
        hover:shadow-xl hover:bg-white
        focus:shadow-xl focus:bg-white
        hover:translate-x-[-0.1rem] focus:translate-x-[-0.1rem]
      "
      // একটু “peeking” ইফেক্ট
      style={{ right: "max(0.25rem, env(safe-area-inset-right))" }}
    >
      <span className="grid place-items-center h-12 w-12">
        <HomeIcon className="h-5 w-5 fill-current transition-transform duration-300 group-hover:scale-110 group-focus:scale-110" />
      </span>

      <span
        className="
          pr-4 text-sm font-medium tracking-wide
          text-neutral-900/90
          opacity-0 translate-x-2
          transition-all duration-300 ease-out
          group-hover:opacity-100 group-hover:translate-x-0
          group-focus:opacity-100 group-focus:translate-x-0
        "
      >
        Back Home
      </span>
    </Link>
  );
}
