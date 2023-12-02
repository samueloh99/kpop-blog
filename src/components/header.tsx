import Link from "next/link";
import { fetchCategories } from "@/lib/fetchCategories";
import { UserActionHeader } from "./useractionheader";

export async function Header() {
  const categories = await fetchCategories();

  return (
    <div className="main-container flex flex-row gap-10 h-[60px] justify-center items-center">
      <Link href={"/"}>
        <h1 className="text-highlightColor text-2xl font-bold">KPOP SPOT</h1>
      </Link>
      <ul className="flex flex-row gap-5 font-bold justify-center items-center text-lg">
        {categories.map((item, key) => {
          return (
            <Link href={item.attributes.slug} key={key}>
              {item.attributes.name}
            </Link>
          );
        })}
      </ul>
      <UserActionHeader />
    </div>
  );
}
