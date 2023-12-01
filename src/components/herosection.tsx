import { Search, Star } from "lucide-react";

import { Input } from "@/components/ui/input";

export function HeroSection() {
  return (
    <div className="flex flex-col max-w-[1440px] w-full m-auto">
      <div className="flex flex-col w-full items-center justify-center relative h-[300px]">
        <h1 className="font-bold text-3xl">
          Descubra as mais recentes novidades no mundo K-POP
        </h1>
        <p className="font-normal text-xl">
          Explore as notícias e novidades tudo em só um lugar
        </p>
        <div className="bg-default flex flex-col w-3/4 justify-center items-center absolute bottom-[-90px] text-white gap-9 py-5 rounded-lg">
          <div className="flex flex-row justify-center items-center gap-5 w-2/3">
            <Search />
            <Input />
          </div>
          <div className="flex flex-row justify-center items-center gap-10 w-2/3">
            <div className="flex flex-col justify-center items-center w-full gap-2">
              <Star />
              <p className="text-sm font-bold">Mais recentes</p>
            </div>
            <div className="w-[1px] h-full bg-slate-300" />
            <div className="flex flex-col justify-center items-center w-full gap-2">
              <Star />
              <p className="text-sm font-bold">Mais buscados</p>
            </div>
            <div className="w-[1px] h-full bg-slate-300" />

            <div className="flex flex-col justify-center items-center w-full gap-2">
              <Star />
              <p className="text-sm font-bold">Trending</p>
            </div>
            <div className="w-[1px] h-full bg-slate-300" />

            <div className="flex flex-col justify-center items-center w-full gap-2">
              <Star />
              <p className="text-sm font-bold">Notícias</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
