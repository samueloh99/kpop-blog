import { NewsCard } from "./newscard";

export function NewsRow() {
  return (
    <div className="main-container flex flex-col gap-10 w-full justify-start items-start">
      <h4 className="font-bold text-2xl">Últimas notícias</h4>
      <div className="flex flex-col w-full px-5 justify-start items-start bg-white divide-y divide-slate-300">
        <NewsCard
          type="row"
          withImage={true}
          tag="music"
          time="3 hours ago"
          title="BTS’s Jimin Becomes 3rd Korean Soloist In RIAA History To Go Platinum
          In U.S. With A Single"
        />
        <NewsCard
          type="row"
          withImage={true}
          tag="music"
          time="3 hours ago"
          title="BTS’s Jimin Becomes 3rd Korean Soloist In RIAA History To Go Platinum
          In U.S. With A Single"
        />
        <NewsCard
          type="row"
          withImage={true}
          tag="music"
          time="3 hours ago"
          title="BTS’s Jimin Becomes 3rd Korean Soloist In RIAA History To Go Platinum
          In U.S. With A Single"
        />
        <NewsCard
          type="row"
          withImage={true}
          tag="music"
          time="3 hours ago"
          title="BTS’s Jimin Becomes 3rd Korean Soloist In RIAA History To Go Platinum
          In U.S. With A Single"
        />
        <NewsCard
          type="row"
          withImage={true}
          tag="music"
          time="3 hours ago"
          title="BTS’s Jimin Becomes 3rd Korean Soloist In RIAA History To Go Platinum
          In U.S. With A Single"
        />
        <NewsCard
          type="row"
          withImage={true}
          tag="music"
          time="3 hours ago"
          title="BTS’s Jimin Becomes 3rd Korean Soloist In RIAA History To Go Platinum
          In U.S. With A Single"
        />
        <NewsCard
          type="row"
          withImage={true}
          tag="music"
          time="3 hours ago"
          title="BTS’s Jimin Becomes 3rd Korean Soloist In RIAA History To Go Platinum
          In U.S. With A Single"
        />
        <NewsCard
          type="row"
          withImage={true}
          tag="music"
          time="3 hours ago"
          title="BTS’s Jimin Becomes 3rd Korean Soloist In RIAA History To Go Platinum
          In U.S. With A Single"
        />
      </div>
    </div>
  );
}
