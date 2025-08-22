import Image from "next/image";
import Hero from "./components/Hero";
import ThemeToggleButton from "./components/ThemeToggleButton";
import ProductHighlights from "./components/ProductHighlights";

export default function Home() {
  return (
    <div>
      <ThemeToggleButton></ThemeToggleButton>
      <Hero />
      <ProductHighlights></ProductHighlights>
    </div>
  );
}
