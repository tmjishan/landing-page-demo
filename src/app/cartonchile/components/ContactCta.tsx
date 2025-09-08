// components/ContactCta.tsx
export default function ContactCta() {
  return (
    <section className="relative isolate">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-emerald-600 via-blue-600 to-indigo-600" />
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-white/10 p-8 text-white backdrop-blur sm:flex-row">
          <div>
            <h2 className="text-2xl font-bold">¿Necesitas más información?</h2>
            <p className="mt-1 text-white/90">
              Respuesta rápida por WhatsApp o correo. Cotizamos el mismo día.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://wa.me/56996825284?text=Hola%20necesito%20cotizar%20cajas%20a%20medida"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-emerald-700 shadow ring-1 ring-white/30 hover:scale-[1.02] transition"
            >
              <span>WhatsApp</span> <span aria-hidden>→</span>
            </a>
            <a
              href="mailto:ventas@cartonchile.cl"
              className="inline-flex items-center gap-2 rounded-xl bg-black/30 px-5 py-3 font-semibold text-white shadow ring-1 ring-white/30 hover:bg-black/40 transition"
            >
              ventas@cartonchile.cl
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
