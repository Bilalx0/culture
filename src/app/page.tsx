import SideCarousel from "./components/SideCarousel";
import ProductGrid from "./components/ProductGrid";
import HorizontalScroll from './components/HorizontalScroll';

export default function Home() {
 

  return (
    <main className="min-h-screen">
      {/* Add your Navbar here */}
      <SideCarousel />
      <ProductGrid />
      <HorizontalScroll />
    </main>
  );
}
