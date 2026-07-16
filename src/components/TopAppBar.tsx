"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function TopAppBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-surface/90 shadow-[0_8px_30px_rgba(0,0,0,0.22)] backdrop-blur-md">
      <div className="container-max mx-auto px-4 h-[72px] md:h-20 flex items-center justify-between">
        <Link href="#inicio" className="group flex items-center gap-3" aria-label="DACIO — Ir al inicio">
          <span className="relative grid size-14 shrink-0 place-items-center overflow-hidden rounded-lg border border-tertiary/35 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-transform duration-300 group-hover:-translate-y-0.5 sm:size-16 md:size-[70px] md:rounded-xl">
            <Image
              src="/logo-dacio.webp"
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
            href="https://gestionzen.ctsoft.com.ar/cliente/login" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-gradient-to-br from-primary to-primary-dark px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:brightness-110 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
          >
            Portal Clientes
          </a>
          <button
            type="button"
            className="rounded-md p-2 text-on-surface md:hidden"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          className="border-t border-white/10 bg-surface/95 px-4 py-4 shadow-lg backdrop-blur-md md:hidden"
          aria-label="Navegación móvil"
        >
          <div className="container-max mx-auto flex flex-col gap-1">
            <Link href="#inicio" onClick={closeMenu} className="rounded-md px-3 py-3 text-sm font-medium text-secondary hover:bg-white/5 hover:text-primary">Inicio</Link>
            <Link href="#nosotros" onClick={closeMenu} className="rounded-md px-3 py-3 text-sm font-medium text-secondary hover:bg-white/5 hover:text-primary">Nosotros</Link>
            <Link href="#productos" onClick={closeMenu} className="rounded-md px-3 py-3 text-sm font-medium text-secondary hover:bg-white/5 hover:text-primary">Productos</Link>
            <Link href="#contacto" onClick={closeMenu} className="rounded-md px-3 py-3 text-sm font-medium text-secondary hover:bg-white/5 hover:text-primary">Contacto</Link>
            <a
              href="https://gestionzen.ctsoft.com.ar/cliente/login"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-3 inline-flex h-10 items-center justify-center rounded-md bg-gradient-to-br from-primary to-primary-dark px-4 text-sm font-medium text-white shadow hover:brightness-110"
            >
              Portal Clientes
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
