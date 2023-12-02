import Link from "next/link";
import { NewsCard } from "./newscard";

export function NewsRiver() {
  return (
    <div className="flex flex-col w-2/5 gap-5 justify-start items-start bg-white px-2 py-5 border-t-[20px] border-highlightColor">
      <div className="flex flex-row justify-between items-end w-full">
        <h1 className="font-bold text-2xl">Trending now</h1>
        <Link href={"/news/1"}>
          <h1 className="font-bold text-lg text-highlightColor">ver mais</h1>
        </Link>
      </div>
      <div className="flex flex-col gap-5 divide-y divide-slate-300">
        <NewsCard
          withImage={false}
          tag="music"
          time="3 hours ago"
          title="BTS’s Jimin Becomes 3rd Korean Soloist In RIAA History To Go Platinum
          In U.S. With A Single"
        />
        <NewsCard
          withImage={false}
          tag="music"
          time="3 hours ago"
          title="BTS’s Jimin Becomes 3rd Korean Soloist In RIAA History To Go Platinum
          In U.S. With A Single"
        />
        <NewsCard
          withImage={false}
          tag="music"
          time="3 hours ago"
          title="BTS’s Jimin Becomes 3rd Korean Soloist In RIAA History To Go Platinum
          In U.S. With A Single"
        />
        <NewsCard
          withImage={false}
          tag="music"
          time="3 hours ago"
          title="BTS’s Jimin Becomes 3rd Korean Soloist In RIAA History To Go Platinum
          In U.S. With A Single"
        />
      </div>
    </div>
  );
}
