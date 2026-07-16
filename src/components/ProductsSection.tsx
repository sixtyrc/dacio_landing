'use client';
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { whatsappLink } from "@/lib/site";

const categories = [
  {
    id: 1,
    name: "Especias y Condimentos",
    desc: "Selección premium para realzar el sabor de sus productos.",
    img: "/cat_especias.webp",
    wa: "Hola, quisiera saber más sobre las especias y condimentos disponibles.",
  },
  {
    id: 2,
    name: "Maquinaria Industrial",
    desc: "Equipos de alto rendimiento para procesamiento cárnico.",
    img: "/cat_maquinaria.webp",
    wa: "Hola, quisiera consultar por la maquinaria industrial para procesamiento cárnico.",
  },
  {
    id: 3,
    name: "Tripas e Insumos",
    desc: "Materiales certificados para elaboración de chacinados.",
    img: "/cat_tripas.webp",
    wa: "Hola, quisiera saber más sobre las tripas e insumos para elaboración de chacinados.",
  },
  {
    id: 4,
    name: "Herramientas de Corte",
    desc: "Precisión y durabilidad para el desposte profesional.",
    img: "/cat_herramientas.webp",
    wa: "Hola, quisiera consultar por las herramientas de corte profesional.",
  },
];

export default function ProductsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="productos" className="py-16 md:py-24 bg-surface overflow-hidden">
      <div className="container-max mx-auto px-4" ref={ref}>
        <div className={`mb-10 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div>
            <h2 className="text-sm font-mono text-tertiary uppercase tracking-widest mb-2">Catálogo</h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Nuestras Categorías</h3>
          </div>
          <p className="text-secondary max-w-md">
            Soluciones integrales de máxima pureza y rendimiento. Todo lo que su industria necesita en un solo proveedor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <a
              key={cat.id}
              href={whatsappLink(cat.wa)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Consultar por WhatsApp sobre ${cat.name}`}
              className={`group cursor-pointer relative overflow-hidden rounded-lg bg-surface-container border border-white/5 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_12px_32px_rgba(0,0,0,0.5)] flex flex-col h-full ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <div className="overflow-hidden h-48 w-full relative">
                <Image
                  src={cat.img}
                  alt={cat.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container to-transparent opacity-80" />
              </div>

              <div className="p-6 flex-grow flex flex-col relative z-10 -mt-8">
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{cat.name}</h4>
                <p className="text-sm text-secondary mb-6 flex-grow">{cat.desc}</p>

                <div className="mt-auto flex items-center text-sm font-medium text-white group-hover:text-primary transition-colors">
                  Consultar <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
