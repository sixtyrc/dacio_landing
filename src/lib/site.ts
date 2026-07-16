export const site = {
  name: "DACIO",
  url: "https://dacio.com.ar",
  description:
    "Soluciones integrales y maquinaria de alta performance para carnicerías y elaboración de chacinados. Resistencia, Chaco.",
  email: "info@dacio.com.ar",
  phoneDisplay: "+54 9 362 408-3708",
  phoneE164: "+5493624083708",
  whatsappNumber: "5493624083708",
  address: {
    street: "Juan Ramón Lestani 276",
    city: "Resistencia",
    region: "Chaco",
    postalCode: "3500",
    country: "AR",
  },
  portalClientesUrl: "https://gestionzen.ctsoft.com.ar/cliente/login",
  cuit: "20-18440800-8",
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
