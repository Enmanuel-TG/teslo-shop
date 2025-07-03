import { geistSans } from "@/src/config/fonts";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex w-full justify-center text-xs">
      <Link href="/">
        <span className={`${geistSans.className} antialiased font-bold`}>Teslo</span>
        <span>| Shop</span>
        <span>© {new Date().getFullYear()}</span>
      </Link>
      <Link href="/#">Privacy and legal</Link>
      <Link href="/#">Address</Link>
    </div>
  );
};
