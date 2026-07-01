'use client';
import { Phone } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5493624083708"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_14px_rgba(37,211,102,0.4)] transition-transform hover:scale-110 hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)]"
      aria-label="Contactar por WhatsApp"
    >
      <Phone className="h-7 w-7 fill-current" />
    </a>
  );
}
