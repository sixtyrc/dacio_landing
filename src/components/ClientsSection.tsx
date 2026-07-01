'use client';
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ClientsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 bg-surface-high border-y border-white/5" ref={ref}>
      <div className="container-max mx-auto px-4 text-center">
        <p className="text-sm font-mono text-secondary uppercase tracking-widest mb-10">Empresas que Confían en Nosotros</p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {[1, 2, 3, 4, 5].map((i) => (
            <div 
              key={i}
              className={`text-2xl font-bold font-mono tracking-tighter text-white/30 select-none transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              LOGO {i}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
