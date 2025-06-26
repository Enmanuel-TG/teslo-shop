"use client";

import Link from "next/link";
import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";
import { useUIStore } from "../../store";
import clsx from "clsx";

interface links {
  title: string;
  icon: React.ReactElement;
  href: string;
}

const pages1: links[] = [
  {
    title: "Orders",
    icon: <IoTicketOutline />,
    href: "/",
  },
  {
    title: "Profile",
    icon: <IoPersonOutline />,
    href: "/",
  },
  {
    title: "LogIn",
    icon: <IoLogInOutline />,
    href: "/",
  },
  {
    title: "LogOut",
    icon: <IoLogOutOutline />,
    href: "/",
  },
];

const pages2: links[] = [
  {
    title: "Products",
    icon: <IoShirtOutline />,
    href: "",
  },
  {
    title: "Orders",
    icon: <IoTicketOutline />,
    href: "/",
  },
  {
    title: "Users",
    icon: <IoPeopleOutline />,
    href: "",
  },
];

export const Sidebar = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeMenu = useUIStore((state) => state.closeSideMenu);

  return (
    <div>
      {isSideMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"></div>
      )}

      {isSideMenuOpen && (
        <div
          onClick={() => closeMenu()}
          className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
        ></div>
      )}

      <nav
        className={clsx(
          "fixed p-5 right-0 top-0 w-[400px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
          {
            "translate-x-full": !isSideMenuOpen,
          }
        )}
      >
        <IoCloseOutline
          size={30}
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => {
            closeMenu();
          }}
        />

        <div className="relative mt-14">
          <IoSearchOutline className="absolute top-2 left-2" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-50 rounded pl-10 pr-10 py-1 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500"
          />
        </div>
        {pages1.map((page, i) => (
          <Link
            key={i}
            href={page.href}
            className="flex items-center mt-6 p-2 hover:bg-gray-100 rounded  transition-all"
          >
            {page.icon}
            <span className="ml-3 text-xl">{page.title}</span>
          </Link>
        ))}
        <div className="w-full h-px bg-gray-200 my-10"></div>
        {pages2.map((page, i) => (
          <Link
            key={i}
            href={page.href}
            className="flex items-center mt-6 p-2 hover:bg-gray-100 rounded  transition-all"
          >
            {page.icon}
            <span className="ml-3 text-xl">{page.title}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};
