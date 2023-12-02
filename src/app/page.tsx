import { CategorieSection } from "@/components/categoriesection";
import { HeroSection } from "@/components/herosection";
import { NewsRow } from "@/components/newsrow";
import { NewsSection } from "@/components/newssection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-full h-full pb-60">
      <HeroSection />
      <NewsSection />
      <CategorieSection />
      <NewsRow />
    </main>
  );
}
