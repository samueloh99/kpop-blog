import Image from "next/image";

import Banner1 from "../../public/banner1.webp";
import { NewsCard } from "./newscard";

export function NewsSection() {
  return (
    <div className="main-container flex flex-row w-full h-full py-40">
      <div className="flex flex-col justify-start items-start w-3/5 gap-5">
        <Image src={Banner1} alt="image" width={800} height={800} />
        <h4 className="font-bold text-2xl w-[800px]">
          BTS’s Jimin Becomes 3rd Korean Soloist In RIAA History To Go Platinum
          In U.S. With A Single
        </h4>
        <div className="flex flex-row w-full items-start justify-start gap-2">
          <div className="bg-pink-400 rounded-lg px-2">
            <p>music</p>
          </div>
          <p>3 hours ago</p>
        </div>
      </div>
      <div className="flex flex-col w-2/5 gap-5 justify-start items-start">
        <h1 className="font-bold text-2xl">Trending now</h1>
        <div className="flex flex-col gap-5">
          <NewsCard
            tag="music"
            time="3 hours ago"
            title="BTS’s Jimin Becomes 3rd Korean Soloist In RIAA History To Go Platinum
          In U.S. With A Single"
          />
          <NewsCard
            tag="music"
            time="3 hours ago"
            title="BTS’s Jimin Becomes 3rd Korean Soloist In RIAA History To Go Platinum
          In U.S. With A Single"
          />
          <NewsCard
            tag="music"
            time="3 hours ago"
            title="BTS’s Jimin Becomes 3rd Korean Soloist In RIAA History To Go Platinum
          In U.S. With A Single"
          />
          <NewsCard
            tag="music"
            time="3 hours ago"
            title="BTS’s Jimin Becomes 3rd Korean Soloist In RIAA History To Go Platinum
          In U.S. With A Single"
          />
        </div>
      </div>
    </div>
  );
}
