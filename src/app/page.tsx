import TopAppBar from "@/components/TopAppBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import ClientsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-surface text-on-surface">
      <TopAppBar />
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <ClientsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
