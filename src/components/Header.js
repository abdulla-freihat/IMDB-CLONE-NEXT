'use client'

import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import DarkModeSwitch from "./DarkModeSwitch";

import { usePathname } from "next/navigation";
const Header = () => {

  const pathname = usePathname();

  return (
    <nav className="p-5 max-w-6xl mx-auto flex items-center justify-between">
      {/* left side */}
      <div className="">
        <ul className="flex items-center  gap-4">
          <li>
            <Link className={`hover:text-amber-500 ${pathname === '/' ?'text-amber-500' : ''} `} href="/">
              <p className="hidden sm:inline"> Home </p>

              <AiFillHome className="hover:text-amber-500 sm:hidden text-2xl" />
            </Link>
          </li>

          <li>
            <Link className={`hover:text-amber-500 ${pathname === '/about' ?'text-amber-500' : ''} `} href="/about">
              <p className="hidden sm:inline"> About </p>

              <BsFillInfoCircleFill className="hover:text-amber-500 sm:hidden text-2xl" />
            </Link>
          </li>
        </ul>
      </div>

      {/* right side */}

      <div className="flex gap-4 items-center">
        <DarkModeSwitch />
        <Link href="/" className="flex gap-1 items-center">
          <span className="text-2xl font-bold bg-amber-500 rounded-lg p-1 px-2">
            IMDB
          </span>
          <span className="text-xl hidden sm:inline">Clone</span>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
