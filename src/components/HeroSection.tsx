'use client';
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-surface-dim">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero-bg.png)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-surface-dim/80 via-surface-dim/70 to-surface z-0" />

      <div className="container-max mx-auto px-5 relative z-10 flex flex-col items-center text-center mt-8 md:mt-12 animate-fade-in-up">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl">
          Excelencia en Insumos para la <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">Industria Cárnica</span>
        </h1>
        
        <p className="mt-5 text-base sm:text-lg md:text-xl text-secondary max-w-2xl animate-fade-in-up [animation-delay:200ms]">
          Soluciones integrales y maquinaria de alta performance para carnicerías y elaboración de chacinados.
        </p>
        
        <div className="mt-8 flex w-full max-w-xs flex-col gap-3 sm:mt-10 sm:w-auto sm:max-w-none sm:flex-row sm:gap-4 animate-fade-in-up [animation-delay:400ms]">
          <Link href="#contacto" className="inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-br from-primary to-primary-dark px-8 py-3 text-base font-medium text-white shadow-lg transition-all hover:shadow-primary/20 hover:-translate-y-1">
            Contactar
          </Link>
          <Link href="#productos" className="inline-flex h-12 items-center justify-center rounded-md border border-white/20 bg-transparent px-8 py-3 text-base font-medium text-white transition-all hover:bg-white/5 hover:border-white/40">
            Ver Productos
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Link href="#nosotros" className="text-secondary hover:text-white transition-colors">
          <ChevronDown className="w-8 h-8 opacity-50" />
        </Link>
      </div>
    </section>
  );
}
