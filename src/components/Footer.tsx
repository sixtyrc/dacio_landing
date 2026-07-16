import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/5 py-12">
      <div className="container-max mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo-dacio.webp" alt="DACIO Logo" width={32} height={32} className="rounded-sm object-cover grayscale opacity-80" />
              <span className="text-xl font-bold tracking-tight text-white/90">DACIO</span>
            </div>
            <p className="text-sm text-secondary max-w-sm mb-6">
              Proveedores líderes de insumos, maquinaria y asesoría técnica para la industria cárnica y elaboración de chacinados.
            </p>
            <p className="text-xs text-white/40">CUIT: 20-18440800-8 | IVA: Responsable Inscripto</p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-white mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm text-secondary">
              <li><Link href="#inicio" className="hover:text-primary transition-colors">Inicio</Link></li>
              <li><Link href="#nosotros" className="hover:text-primary transition-colors">Sobre Nosotros</Link></li>
              <li><Link href="#productos" className="hover:text-primary transition-colors">Catálogo de Productos</Link></li>
              <li><a href={site.portalClientesUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Portal Clientes</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-secondary">
              <li><Link href="#" className="hover:text-white transition-colors">Términos y Condiciones</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Política de Privacidad</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Defensa del Consumidor</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-secondary">
          <p>&copy; {new Date().getFullYear()} DACIO. Todos los derechos reservados.</p>
          <p>
            Powered by{" "}
            <a href="https://ctsoft.com.ar" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors font-medium">
              CTSoft
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
