import ProductCarousel from "./ProductCarousel";

export default function Description() {
  const items = [
    { src: "/cartonchile/caja-exportacion-01.jpg", alt: "Divider box" },
    { src: "/cartonchile/caja-exhibidora-01.jpg", alt: "Pizza style box" },
    { src: "/cartonchile/caja-exportacion-01.jpg", alt: "Produce crate" },
    { src: "/cartonchile/caja-pizza-01.jpg", alt: "Shelf bin" },
    { src: "/cartonchile/caja-vino-tabique-01.jpg", alt: "Shelf bin" },
    { src: "/cartonchile/caja-pizza-01.jpg", alt: "Shelf bin" },
  ];
  return (
    <section aria-labelledby="about-title" className="relative w-full desp">
      {/* subtle top accent */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-500 via-lime-500 to-emerald-500" />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Heading block */}
        <div className="text-center">
          <p className="text-sm font-semibold tracking-widest text-emerald-700">
            CARTON CHILE
          </p>
          {/* h2 kept for SEO; focuses on corrugated packaging */}
          <h2
            id="about-title"
            className="mt-2 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl"
          >
            Expertos en embalaje de cartón corrugado
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
            Fabricación directa de todo tipo de cajas, con soluciones integrales
            y tecnología de última generación.
          </p>
        </div>

        <section className="mx-auto w-full max-w-7xl px-4 py-10">
          <h2 className="mb-6 text-center text-2xl font-bold text-gray-900">
            Corrugated Packaging — Our Boxes
          </h2>

          <ProductCarousel items={items} />
        </section>

        {/* Content grid */}
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-5 items-center">
          {/* Left: main copy */}
          <div className="md:col-span-3">
            <article className="rounded-2xl border border-gray-100 bg-white/70 p-6 shadow-sm backdrop-blur">
              <p className="text-gray-700 leading-relaxed">
                CartonChile Ltda, empresa en el rubro de cajas de cartón
                corrugado, somos fabricantes directos de todo tipo de cajas de
                cartón. Contamos con maquinaria de última generación que nos
                permite entregar una solución integral a nuestros clientes en
                todas sus necesidades de cajas de cartón y cartón corrugado.
                Incorporamos en nuestro proceso de fabricación la más moderna
                impresora a cuatro colores lo que nos permite imprimir cualquier
                imagen.
              </p>

              {/* Bullet points */}
              <ul className="mt-6 space-y-3">
                {[
                  "Fabricación directa y a medida",
                  "Soluciones integrales en cartón corrugado",
                  "Impresión a cuatro colores de alta calidad",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    {/* inline check icon (no extra libs) */}
                    <svg
                      className="mt-1 h-5 w-5 flex-none text-emerald-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          {/* Right: quick stats / highlights */}
          <div className="md:col-span-2">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
              <div className="rounded-xl border border-gray-100 bg-emerald-50 p-5">
                <p className="text-sm font-medium text-emerald-700">
                  Capacidad
                </p>
                <p className="mt-1 text-2xl font-bold text-emerald-900">
                  Producción 24/7
                </p>
                <p className="mt-2 text-sm text-emerald-800/80">
                  Maquinaria de última generación
                </p>
              </div>

              <div className="rounded-xl border border-gray-100 bg-lime-50 p-5">
                <p className="text-sm font-medium text-lime-700">Calidad</p>
                <p className="mt-1 text-2xl font-bold text-lime-900">
                  Impresión 4C
                </p>
                <p className="mt-2 text-sm text-lime-800/80">
                  Colores vivos &amp; detalles nítidos
                </p>
              </div>

              <div className="rounded-xl border border-gray-100 bg-emerald-50 p-5 md:col-span-1 col-span-2">
                <p className="text-sm font-medium text-emerald-700">
                  Sostenibilidad
                </p>
                <p className="mt-1 text-2xl font-bold text-emerald-900">
                  Materiales reciclables
                </p>
                <p className="mt-2 text-sm text-emerald-800/80">
                  Compromiso con el medio ambiente
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA bar
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#quote"
            className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:scale-[1.02] hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
          >
            Solicitar cotización
          </a>
          <a
            href="#catalog"
            className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-800 shadow-sm transition hover:scale-[1.02] hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
          >
            Ver catálogo
          </a>
        </div> */}
      </div>
    </section>
  );
}
