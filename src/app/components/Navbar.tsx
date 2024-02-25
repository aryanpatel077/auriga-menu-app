import { MenuIcon, SearchIcon } from "lucide-react";
import Link from "next/link";
import SearchBox from "./SearchBox";
import { Input } from "@/components/ui/input";
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between h-24 md:h-14 px-4 border-b lg:h-20 xl:px-8">
      {/* <div className="md:hidden">
        <button className="rounded-full w-8 h-8">
          <MenuIcon className="w-4 h-4" />
          <span className="sr-only">Toggle search</span>
        </button>
      </div> */}
       <Link href={"/"} className="font-bold text-gray-700 text-2xl">
        Shoping Menu
      </Link>
      <div className="flex md:flex-row  flex-col gap-2 sm:text-sm font-semibold lg:gap-8 lg:text-base">
        <Link href="/product">Product</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
      
      {/* <div className="ml-auto">
          <button className="rounded-full w-8 h-8 ">
            <input type="button" value="" />
            <SearchIcon className="w-4 h-4" />
          </button>
        </div> */}
      {/* <div className="hidden w-full max-w-xs lg:flex lg:ml-auto lg:max-w-sm lg:gap-2 lg:w-auto">
          <button className="hidden lg:block">
           Products
          </button>
        </div> */}
    </nav>
  );
}
