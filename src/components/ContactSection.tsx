'use client';
import { MapPin, Phone, Mail } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ContactSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contacto" className="py-24 bg-surface-container-low">
      <div className="container-max mx-auto px-4" ref={ref}>
        <div className="max-w-5xl mx-auto">
          <div className={`mb-16 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <h2 className="text-sm font-mono text-tertiary uppercase tracking-widest mb-2">Contacto</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">Hablemos de su Negocio</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className={`bg-surface p-8 rounded-lg border border-white/5 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-secondary mb-2 uppercase">Nombre Completo</label>
                  <input type="text" id="name" className="w-full bg-surface-container-low border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="Ej. Juan Pérez" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-xs font-mono text-secondary mb-2 uppercase">Empresa / Negocio</label>
                  <input type="text" id="company" className="w-full bg-surface-container-low border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="Nombre de su carnicería" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-secondary mb-2 uppercase">Email Profesional</label>
                  <input type="email" id="email" className="w-full bg-surface-container-low border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="contacto@empresa.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-secondary mb-2 uppercase">Mensaje</label>
                  <textarea id="message" rows={4} className="w-full bg-surface-container-low border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none" placeholder="¿En qué podemos ayudarle?"></textarea>
                </div>
                <button type="submit" className="w-full h-12 bg-gradient-to-r from-primary to-primary-dark text-white font-medium rounded shadow-lg hover:shadow-primary/20 transition-all">
                  Enviar Mensaje
                </button>
              </form>
            </div>

            <div className={`flex flex-col gap-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}>
              <div className="bg-surface p-8 rounded-lg border border-white/5 flex-grow">
                <h4 className="text-xl font-bold text-white mb-6">Información de Contacto</h4>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-surface-container rounded-full text-primary">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-secondary uppercase mb-1">Dirección</p>
                      <p className="text-white">Juan Ramón Lestani 276<br/>Resistencia, Chaco (CP 3500)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-surface-container rounded-full text-primary">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-secondary uppercase mb-1">WhatsApp / Teléfono</p>
                      <p className="text-white">+54 9 362 408-3708</p>
                      <p className="text-xs text-secondary mt-1">Lun - Sáb: 08:00 a 20:00</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-surface-container rounded-full text-primary">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-mono text-xs text-secondary uppercase mb-1">Email</p>
                      <p className="text-white">gonzalopablos1@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-64 bg-surface rounded-lg border border-white/5 relative overflow-hidden flex items-center justify-center grayscale opacity-80">
                <span className="font-mono text-sm text-secondary">Mapa Interactivo (Integración Google Maps)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
