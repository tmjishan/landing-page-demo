// app/page.tsx
import Link from "next/link";

export default function Home() {
  const demos = [
    {
      slug: "ambacproduct",
      title: "Ambacproduct Packaging",
      desc: "Premium Packaging Solutions",
    },
    {
      slug: "raracake",
      title: "Rara Cake",
      desc: "Handmade Cakes with ❤️ in Galați, Romania",
    },
  ];

  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
        Landing Page Demos
      </h1>
      <p className="mt-3 text-lg text-neutral-700 max-w-2xl">
        Explore beautifully crafted landing pages — each built to inspire and
        convert.
      </p>

      <ul className="mt-8 space-y-4">
        {demos.map((demo) => (
          <li key={demo.slug} className="rounded-lg border p-4 hover:shadow-sm">
            <h3 className="text-lg font-semibold">{demo.title}</h3>
            <p className="text-sm text-neutral-600">{demo.desc}</p>
            <Link
              href={`/${demo.slug}`}
              className="mt-2 inline-block text-sm font-medium text-blue-600 hover:underline"
            >
              View Demo →
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
