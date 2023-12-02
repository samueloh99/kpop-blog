import { CategorieSection } from "@/components/categoriesection";
import { HeroSection } from "@/components/herosection";
import { NewsRow } from "@/components/newsrow";
import { NewsSection } from "@/components/newssection";
import { TopMusicSection } from "@/components/topmusicsection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-full h-full pb-60">
      <HeroSection />
      <NewsSection />
      <TopMusicSection />
      <CategorieSection />
      <NewsRow />
    </main>
  );
}
