import Image from "next/image";
import Link from "next/link";

import Banner1 from "../../public/banner1.webp";

interface NewsCardProps {
  title: string;
  tag: string;
  time: string;
  withImage: boolean;
}

export function NewsCard({ tag, time, title, withImage }: NewsCardProps) {
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
          <div className="flex flex-row gap-2">
            <div className="bg-pink-400 rounded-lg px-2">
              <p>{tag}</p>
            </div>
            <p>{time}</p>
          </div>
          <h4 className="font-bold text-2xl">{title}</h4>
        </div>
      </div>
    </Link>
  );
}
