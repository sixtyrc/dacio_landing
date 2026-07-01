'use client';
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-24 bg-surface-container-low">
      <div className="container-max mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-mono text-tertiary uppercase tracking-widest mb-2">Nuestra Esencia</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">Liderazgo y Tradición</h3>
            <p className="text-lg text-secondary leading-relaxed mb-6">
              En DACIO entendemos que la elaboración de chacinados y el procesamiento cárnico requieren de una precisión absoluta. Con años de experiencia en el sector, nos hemos consolidado como el aliado estratégico de carnicerías y frigoríficos que buscan la excelencia.
            </p>
            <p className="text-lg text-secondary leading-relaxed">
              Nuestro compromiso es brindar insumos, maquinaria y asesoría de la más alta calidad, impulsando la rentabilidad y el estándar de los productos de nuestros clientes a través de innovación constante y servicio dedicado.
            </p>
          </motion.div>
        </div>
        
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          {[
            { title: "Misión", desc: "Proveer soluciones integrales de máxima calidad que optimicen la producción cárnica." },
            { title: "Valores", desc: "Precisión técnica, confianza absoluta e innovación continua en cada eslabón." },
            { title: "Compromiso", desc: "Ser el socio silencioso pero fundamental detrás del éxito de cada cliente." }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface p-8 rounded-lg border border-white/5 hover:border-primary/30 transition-colors group"
            >
              <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-primary transition-colors">{item.title}</h4>
              <p className="text-secondary">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
