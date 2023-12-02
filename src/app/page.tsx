import { CategorieSection } from "@/components/categoriesection";
import { HeroSection } from "@/components/herosection";
import { NewsGrid } from "@/components/newsgrid";
import { NewsRow } from "@/components/newsrow";
import { NewsSection } from "@/components/newssection";
import { TopMusicSection } from "@/components/topmusicsection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-full h-full pb-60">
      <HeroSection />
      <NewsSection />
      <NewsGrid />
      <TopMusicSection />
      <CategorieSection />
      <NewsRow />
    </main>
  );
}
