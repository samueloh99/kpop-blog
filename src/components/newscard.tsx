import Image from "next/image";
import Link from "next/link";

import Banner1 from "../../public/banner1.webp";
import { Badge } from "./ui/badge";

interface NewsCardProps {
  title: string;
  tag: string;
  time: string;
  withImage: boolean;
  type: string;
}

export function NewsCard({ tag, time, title, withImage, type }: NewsCardProps) {
  if (type === "row") {
    return (
      <Link href={"/news/1"}>
        <div className="flex flex-row gap-5 justify-center items-center cursor-pointer py-5">
          {withImage ? (
            <div className="w-[250px] h-full flex justify-center items-start">
              <Image src={Banner1} alt="image" width={250} height={250} />
            </div>
          ) : (
            ""
          )}
          <div className="flex flex-col w-full gap-4">
            <div className="flex flex-row justify-start items-center gap-2">
              <Badge className="text-base bg-highlightColor">music</Badge>
              <p>{time}</p>
            </div>
            <h4 className="font-bold text-xl">{title}</h4>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={"/news/1"}>
      <div className="flex flex-col bg-white gap-5 justify-center items-center cursor-pointer pb-5">
        <div className="w-full h-full flex justify-center items-start relative">
          <Image src={Banner1} alt="image" objectFit="cover" />
        </div>
        <div className="flex flex-col w-full gap-4 px-5">
          <div className="flex flex-col gap-3">
            <p
              className="underline font-bold uppercase decoration-highlightColor"
              style={{
                textUnderlineOffset: "5px",
                textDecorationThickness: "5px",
              }}
            >
              {tag}
            </p>
            <p>{time}</p>
          </div>
          <h4 className="font-bold text-xl">{title}</h4>
        </div>
      </div>
    </Link>
  );
}
