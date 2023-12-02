import Image from "next/image";

import Banner1 from "../../public/banner1.webp";
import { NewsCard } from "./newscard";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { NewsRiver } from "./newsriver";

export function NewsSection() {
  return (
    <div className="main-container flex flex-row w-full h-full py-40 justify-between gap-5">
      <div className="flex flex-col h-full justify-start items-start max-w-full gap-5 relative">
        <Link href={"/news/1"}>
          <Image src={Banner1} alt="image" width={800} height={800} />
          <div className="flex flex-col w-full justify-start items-start gap-5 absolute bottom-10 left-3">
            <Badge className="text-base bg-highlightColor">music</Badge>
            <h4 className="font-bold text-2xl leading-10">
              <span className="bg-white">
                BTS’s Jimin Becomes 3rd Korean Soloist In RIAA History To Go
                Platinum In U.S. With A Single
              </span>
            </h4>
          </div>
        </Link>
      </div>
      <NewsRiver />
    </div>
  );
}
