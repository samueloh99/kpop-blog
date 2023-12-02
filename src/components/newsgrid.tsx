import { NewsCard } from "./newscard";
import { NewsRiver } from "./newsriver";

export function NewsGrid() {
  return (
    <div className="main-container flex flex-row gap-5 pb-20">
      <div className="flex flex-col w-full gap-5">
        <h4 className="text-xl font-bold">Músicas / Celeb</h4>
        <div className="grid grid-cols-3 w-full gap-5">
          <NewsCard
            withImage={true}
            type="col"
            tag="music"
            time="3 hours ago"
            title="BTS’s Jimin Becomes 3rd Korean Soloist In RIAA History To Go Platinum
        In U.S. With A Single"
          />
          <NewsCard
            withImage={true}
            type="col"
            tag="music"
            time="3 hours ago"
            title="BTS’s Jimin Becomes 3rd Korean Soloist In RIAA History To Go Platinum
      In U.S. With A Single"
          />
          <NewsCard
            withImage={true}
            type="col"
            tag="music"
            time="3 hours ago"
            title="BTS’s Jimin Becomes 3rd Korean Soloist In RIAA History To Go Platinum
        In U.S. With A Single"
          />
          <NewsCard
            withImage={true}
            type="col"
            tag="music"
            time="3 hours ago"
            title="BTS’s Jimin Becomes 3rd Korean Soloist In RIAA History To Go Platinum
        In U.S. With A Single"
          />
          <NewsCard
            withImage={true}
            type="col"
            tag="music"
            time="3 hours ago"
            title="BTS’s Jimin Becomes 3rd Korean Soloist In RIAA History To Go Platinum
        In U.S. With A Single"
          />
          <NewsCard
            withImage={true}
            type="col"
            tag="music"
            time="3 hours ago"
            title="BTS’s Jimin Becomes 3rd Korean Soloist In RIAA History To Go Platinum
        In U.S. With A Single"
          />
        </div>
      </div>
      <NewsRiver typeNews="Últimas notícias" />
    </div>
  );
}
