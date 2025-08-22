import Image from "next/image";
import Hero from "./components/Hero";
import ThemeToggleButton from "./components/ThemeToggleButton";

export default function Home() {
  return (
    <div>
      <ThemeToggleButton></ThemeToggleButton>
      <Hero />
    </div>
  );
}
