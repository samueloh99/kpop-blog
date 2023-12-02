import { Search } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <div className="main-container flex flex-row gap-10 h-[60px] justify-center items-center">
      <Link href={"/"}>
        <h1 className="text-highlightColor text-2xl font-bold">KPOP SPOT</h1>
      </Link>
      <ul className="flex flex-row gap-5 font-bold justify-center items-center text-lg">
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
