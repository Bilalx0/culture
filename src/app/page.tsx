import Image from "next/image";
import SideCarousel from "./components/SideCarousel";
import ProductGrid from "./components/ProductGrid";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Add your Navbar here */}
      <SideCarousel />
      <ProductGrid />
    </main>
  );
}
