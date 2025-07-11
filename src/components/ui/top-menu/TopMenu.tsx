import { M_Alternates } from "@/src/config/fonts";
import Link from "next/link";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { ButtonMenu } from "./buttonMenu";

interface category {
  href: string;
  title: string;
}

const categories: category[] = [
  {
    href: "/category/men",
    title: "Men",
  },
  {
    href: "/category/women",
    title: "Women",
  },
  {
    href: "/category/kid",
    title: "Kids",
  },
];

export const TopMenu = () => {
  return (
    <nav className="flex px-5 justify-between items-center w-full">
      <div>
        <Link href="/">
          <span className={`antialiased font-bold`}>Teslo</span>
          <span className={M_Alternates.className}>| Shop</span>
        </Link>
      </div>
      <div className="hidden sm:block">
        {categories.map((category, i) => (
          <Link
            key={i}
            href={category.href}
            className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          >
            {category.title}
          </Link>
        ))}
      </div>
      <div className="flex items-center">
        <Link href="/search" className="mx-2">
          <IoSearchOutline className="w-5 h-5" />
        </Link>
        <Link href="/cart" className="mx-2">
          <div className="relative">
            <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white">
              3
            </span>
            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>
        <ButtonMenu />
      </div>
    </nav>
  );
};
