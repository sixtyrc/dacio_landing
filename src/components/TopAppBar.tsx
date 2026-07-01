import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function TopAppBar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-surface/80 border-b border-white/10">
      <div className="container-max mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src="/Logo_original_dacio.jpeg" alt="DACIO Logo" width={40} height={40} className="rounded-sm object-cover" />
          <span className="text-xl font-bold tracking-tight text-on-surface">DACIO</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#inicio" className="text-sm font-medium text-secondary hover:text-primary transition-colors">Inicio</Link>
          <Link href="#nosotros" className="text-sm font-medium text-secondary hover:text-primary transition-colors">Nosotros</Link>
          <Link href="#productos" className="text-sm font-medium text-secondary hover:text-primary transition-colors">Productos</Link>
          <Link href="#contacto" className="text-sm font-medium text-secondary hover:text-primary transition-colors">Contacto</Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <a 
            href="https://gestionzen.ctsoft.com.ar" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-gradient-to-br from-primary to-primary-dark px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:brightness-110 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary"
          >
            Portal Clientes
          </a>
          <button className="md:hidden p-2 text-on-surface">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
