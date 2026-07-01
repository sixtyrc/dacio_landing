'use client';
import { motion } from "framer-motion";

export default function ClientsSection() {
  return (
    <section className="py-20 bg-surface-container-high border-y border-white/5">
      <div className="container-max mx-auto px-4 text-center">
        <p className="text-sm font-mono text-secondary uppercase tracking-widest mb-10">Empresas que Confían en Nosotros</p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Placeholder for logos */}
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-2xl font-bold font-mono tracking-tighter text-white/30 select-none"
            >
              LOGO {i}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
