// components/ContactBlock.tsx

export default function ContactBlock() {
  return (
    <section id="contacto" className="relative bg-neutral-50">
      {/* subtle gradient bg */}
      <div className="absolute inset-0 bg-[radial-gradient(40rem_20rem_at_50%_-10%,#a7f3d0_0%,transparent_60%)]/40" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-14 lg:grid-cols-5">
        {/* Map */}
        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
            <iframe
              title="Ubicación CartonChile"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d53174.08220411765!2d-70.661308!3d-33.59544!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d9991b80eca5%3A0xc754870cfadb4f41!2sFresia%201440%2C%208840031%20La%20Pintana%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1757321438294!5m2!1ses!2scl"
              className="h-[360px] w-full"
              loading="lazy"
            />
          </div>
        </div>

        {/* Info Card */}
        <div className="lg:col-span-2">
          <div className="rounded-2xl border bg-white/80 p-6 shadow-sm backdrop-blur">
            <h3 className="text-xl font-bold tracking-tight">CartonChile</h3>
            <p className="mt-1 text-sm text-neutral-600">
              Fresia 148D, La Pintana, Región Metropolitana
            </p>

            <div className="mt-5 space-y-3">
              <a
                href="tel:+56996825284"
                className="flex items-center gap-3 rounded-lg border px-4 py-3 hover:bg-neutral-50"
              >
                📞 <span className="font-medium">+56 9 9682 5284</span>
              </a>
              <a
                href="mailto:ventas@cartonchile.cl"
                className="flex items-center gap-3 rounded-lg border px-4 py-3 hover:bg-neutral-50"
              >
                ✉️ <span className="font-medium">ventas@cartonchile.cl</span>
              </a>
              <a
                href="https://wa.me/56996825284?text=Hola%20necesito%20cotizar%20cajas%20a%20medida"
                target="_blank"
                className="flex items-center gap-3 rounded-lg border px-4 py-3 hover:bg-neutral-50"
              >
                💬 <span className="font-medium">WhatsApp</span>
              </a>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-lg bg-emerald-50 p-3">
                <p className="font-semibold text-emerald-700">Producción</p>
                <p className="text-neutral-600">24/7</p>
              </div>
              <div className="rounded-lg bg-blue-50 p-3">
                <p className="font-semibold text-blue-700">Impresión</p>
                <p className="text-neutral-600">4 Colores</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
