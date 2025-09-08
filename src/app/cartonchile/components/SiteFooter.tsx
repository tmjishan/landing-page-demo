// components/SiteFooter.tsx
export default function SiteFooter() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-neutral-600">
            © {new Date().getFullYear()} CartonChile — Todos los derechos
            reservados.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#productos" className="hover:text-neutral-900">
              Productos
            </a>
            <a href="#proceso" className="hover:text-neutral-900">
              Proceso
            </a>
            <a href="#contacto" className="hover:text-neutral-900">
              Contacto
            </a>
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-neutral-400">
          Desarrollado por Plasmable.cl
        </p>
      </div>
    </footer>
  );
}
