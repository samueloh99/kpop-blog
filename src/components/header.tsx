import { Search } from "lucide-react";

export function Header() {
  return (
    <div className="main-container border border-black flex flex-row gap-10 h-[60px] justify-center items-center">
      <h1 className="text-highlightColor text-2xl font-bold">KPOP SPOT</h1>
      <ul className="flex flex-row gap-5 font-bold justify-center items-center">
        <li>Explore</li>
        <li>Doramas</li>
        <li>Celeb</li>
        <li>Style</li>
        <li>TV/FILM</li>
        <li>Music</li>
      </ul>
      <div className="flex flex-row ml-auto justify-center items-center">
        <Search />
      </div>
    </div>
  );
}
