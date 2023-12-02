import { ChevronRight } from "lucide-react";
import Image from "next/image";

const data = [
  {
    position: 1,
    name: "Love on me",
    artist: "Jack Harlow",
  },
  {
    position: 2,
    name: "Love on me",
    artist: "Jack Harlow",
  },
  {
    position: 3,
    name: "Love on me",
    artist: "Jack Harlow",
  },
  {
    position: 4,
    name: "Love on me",
    artist: "Jack Harlow",
  },
  {
    position: 5,
    name: "Love on me",
    artist: "Jack Harlow",
  },
];

export function TopMusicSection() {
  return (
    <div className="main-container flex flex-col w-full pb-40">
      <div className="flex flex-row w-full justify-between items-center bg-highlightColor text-white p-5 font-bold text-xl">
        <p>HOT 100</p>
        <p>SEMANA DEZEMBRO 2, 2023</p>
      </div>
      <div className="flex flex-row justify-center items-center w-full py-10 bg-white divide-x divide-slate-300">
        {data.map((item, key) => {
          return (
            <div
              key={key}
              className="flex flex-col justify-center items-center px-20 w-full gap-2"
            >
              <Image
                alt="music-chart-1"
                className="rounded-full"
                src="https://charts-static.billboard.com/img/2023/11/jackharlow-i43-lovinonme-y0w-180x180.jpg"
                width={100}
                height={100}
              />
              <p className="font-bold text-3xl text-highlightColor">
                {item.position}
              </p>
              <p className="font-bold text-xl text-orange-400">{item.name}</p>
              <p className="font-bold text-base">{item.artist}</p>
            </div>
          );
        })}
      </div>
      <div className="flex flex-row justify-between px-40 border-t border-slate-300 items-center text-xl font-bold w-full py-10 bg-white">
        <div className="flex flex-row items-center justify-center gap-2">
          <p>TOP 200 MÚSICAS</p>
          <ChevronRight />
        </div>
        <div className="flex flex-row items-center justify-center gap-2">
          <p>TOP 100 ARTISTAS</p>
          <ChevronRight />
        </div>
        <div className="flex flex-row items-center justify-center gap-2">
          <p>TRENDING MÚSICAS SEMANAIS</p>
          <ChevronRight />
        </div>
      </div>
    </div>
  );
}
