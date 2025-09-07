import Image from "next/image";

type CategoryItem = {
  title: string;
  images: { src: string; alt: string }[];
};

export default function CategorySection({ items }: { items: CategoryItem[] }) {
  return (
    <section
      aria-labelledby="categories-title"
      className="relative w-full bg-white"
    >
      {/* top accent */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 via-lime-500 to-emerald-500" />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2
            id="categories-title"
            className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl"
          >
            Soluciones en cajas de cartón corrugado
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-gray-600">
            Modelos más comunes — con o sin impresión.
          </p>
        </div>

        {/* cards grid */}
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((cat) => (
            <article
              key={cat.title}
              className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-lg font-semibold leading-snug text-gray-900">
                {cat.title}
              </h3>

              {/* images inside each card */}
              <div className="mt-4 grid grid-cols-1 ">
                {cat.images.map((img, i) => (
                  <div
                    key={img.src + i}
                    className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-contain transition duration-300 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, (max-width: 1280px) 22vw, 20vw"
                    />
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
