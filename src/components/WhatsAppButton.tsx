'use client';
import { Phone } from "lucide-react";
import { whatsappLink } from "@/lib/site";

export default function WhatsAppButton() {
  const waLink = whatsappLink("Hola. Me comunico desde dacio.com.ar y quisiera realizar una consulta.");

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_14px_rgba(37,211,102,0.4)] transition-transform hover:scale-110 hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)]"
      aria-label="Contactar por WhatsApp"
    >
      <Phone className="h-7 w-7 fill-current" />
    </a>
  );
}
