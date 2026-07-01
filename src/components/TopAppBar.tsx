import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function TopAppBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-surface/90 shadow-[0_8px_30px_rgba(0,0,0,0.22)] backdrop-blur-md">
      <div className="container-max mx-auto px-4 h-[72px] md:h-20 flex items-center justify-between">
        <Link href="#inicio" className="group flex items-center gap-3" aria-label="DACIO — Ir al inicio">
          <span className="relative grid size-14 shrink-0 place-items-center overflow-hidden rounded-lg border border-tertiary/35 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-transform duration-300 group-hover:-translate-y-0.5 sm:size-16 md:size-[70px] md:rounded-xl">
            <Image
              src="/Logo_original_dacio.jpeg"
              alt=""
              width={70}
              height={70}
              priority
              className="size-full object-cover"
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-lg font-bold tracking-[0.04em] text-on-surface sm:text-xl md:text-2xl">DACIO</span>
            <span className="mt-1 hidden text-[9px] font-medium uppercase tracking-[0.16em] text-tertiary sm:block">
              La calidad del buen sabor
            </span>
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#inicio" className="text-sm font-medium text-secondary hover:text-primary transition-colors">Inicio</Link>
          <Link href="#nosotros" className="text-sm font-medium text-secondary hover:text-primary transition-colors">Nosotros</Link>
          <Link href="#productos" className="text-sm font-medium text-secondary hover:text-primary transition-colors">Productos</Link>
          <Link href="#contacto" className="text-sm font-medium text-secondary hover:text-primary transition-colors">Contacto</Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <a 
            href="https://gestionzen.ctsoft.com.ar" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-gradient-to-br from-primary to-primary-dark px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:brightness-110 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
          >
            Portal Clientes
          </a>
          <button className="md:hidden p-2 text-on-surface">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
