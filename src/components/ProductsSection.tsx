'use client';
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const categories = [
  { id: 1, name: "Especias y Condimentos", desc: "Selección premium para realzar el sabor de sus productos.", color: "from-amber-900/40 to-surface" },
  { id: 2, name: "Maquinaria Industrial", desc: "Equipos de alto rendimiento para procesamiento cárnico.", color: "from-zinc-800/60 to-surface" },
  { id: 3, name: "Tripas e Insumos", desc: "Materiales certificados para elaboración de chacinados.", color: "from-red-900/30 to-surface" },
  { id: 4, name: "Herramientas de Corte", desc: "Precisión y durabilidad para el desposte profesional.", color: "from-slate-800/50 to-surface" },
];

export default function ProductsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="productos" className="py-24 bg-surface">
      <div className="container-max mx-auto px-4" ref={ref}>
        <div className={`mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div>
            <h2 className="text-sm font-mono text-tertiary uppercase tracking-widest mb-2">Catálogo</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">Nuestras Categorías</h3>
          </div>
          <p className="text-secondary max-w-md">
            Soluciones integrales de máxima pureza y rendimiento. Todo lo que su industria necesita en un solo proveedor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <div 
              key={cat.id}
              className={`group cursor-pointer relative overflow-hidden rounded-lg bg-surface-container border border-white/5 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_12px_32px_rgba(0,0,0,0.5)] flex flex-col h-full ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <div className={`h-48 w-full bg-gradient-to-b ${cat.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
              
              <div className="p-6 flex-grow flex flex-col">
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{cat.name}</h4>
                <p className="text-sm text-secondary mb-6 flex-grow">{cat.desc}</p>
                
                <div className="mt-auto flex items-center text-sm font-medium text-white group-hover:text-primary transition-colors">
                  Consultar <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
