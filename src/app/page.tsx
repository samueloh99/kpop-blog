import { HeroSection } from "@/components/herosection";
import { NewsSection } from "@/components/newssection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-full h-full">
      <HeroSection />
      <NewsSection />
    </main>
  );
}
