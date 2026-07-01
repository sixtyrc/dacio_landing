'use client';
import { MapPin, Phone, Mail } from "lucide-react";
import { FormEvent, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function ContactSection() {
  const { ref, isVisible } = useScrollReveal();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setFeedback("");

    const form = event.currentTarget;
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(form))),
    }).catch(() => null);

    if (response?.ok) {
      form.reset();
      setStatus("success");
      setFeedback("¡Mensaje enviado! Nos comunicaremos a la brevedad.");
      return;
    }

    const result = response ? await response.json().catch(() => null) : null;
    setStatus("error");
    setFeedback(result?.error ?? "No pudimos enviar el mensaje. Intentá nuevamente.");
  }

  return (
    <section id="contacto" className="py-24 bg-surface-container-low">
      <div className="container-max mx-auto px-4" ref={ref}>
        <div className="max-w-5xl mx-auto">
          <div className={`mb-16 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <h2 className="text-sm font-mono text-tertiary uppercase tracking-widest mb-2">Contacto</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white">Hablemos de su Negocio</h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className={`bg-surface p-5 sm:p-8 rounded-lg border border-white/5 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 md:translate-x-0' : 'opacity-0 translate-y-6 md:translate-y-0 md:-translate-x-6'}`}>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-secondary mb-2 uppercase">Nombre Completo</label>
                  <input type="text" id="name" name="name" required maxLength={100} autoComplete="name" className="w-full bg-surface-container-low border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="Ej. Juan Pérez" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-xs font-mono text-secondary mb-2 uppercase">Empresa / Negocio</label>
                  <input type="text" id="company" name="company" maxLength={120} autoComplete="organization" className="w-full bg-surface-container-low border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="Nombre de su carnicería" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-secondary mb-2 uppercase">Email Profesional</label>
                  <input type="email" id="email" name="email" required maxLength={254} autoComplete="email" className="w-full bg-surface-container-low border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="contacto@empresa.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-secondary mb-2 uppercase">Mensaje</label>
                  <textarea id="message" name="message" required maxLength={3000} rows={4} className="w-full bg-surface-container-low border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none" placeholder="¿En qué podemos ayudarle?"></textarea>
                </div>
                <div className="absolute -left-[9999px]" aria-hidden="true">
                  <label htmlFor="website">Sitio web</label>
                  <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                </div>
                <button type="submit" disabled={status === "sending"} className="w-full h-12 bg-gradient-to-r from-primary to-primary-dark text-white font-medium rounded shadow-lg hover:shadow-primary/20 transition-all disabled:cursor-wait disabled:opacity-60">
                  {status === "sending" ? "Enviando..." : "Enviar Mensaje"}
                </button>
                <p
                  role="status"
                  aria-live="polite"
                  className={`min-h-5 text-sm ${status === "success" ? "text-green-400" : "text-red-400"}`}
                >
                  {feedback}
                </p>
              </form>
            </div>

            <div className={`flex flex-col gap-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 md:translate-x-0' : 'opacity-0 translate-y-6 md:translate-y-0 md:translate-x-6'}`}>
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

              <div className="h-64 bg-surface rounded-lg border border-white/5 relative overflow-hidden">
                <iframe
                  title="Ubicación de DACIO en Google Maps"
                  src="https://www.google.com/maps?q=Juan+Ram%C3%B3n+Lestani+276,+Resistencia,+Chaco,+Argentina&output=embed"
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Juan+Ram%C3%B3n+Lestani+276%2C+Resistencia%2C+Chaco%2C+Argentina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-surface/95 px-4 py-2 text-xs font-medium text-white shadow-lg transition-colors hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  Abrir en Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
