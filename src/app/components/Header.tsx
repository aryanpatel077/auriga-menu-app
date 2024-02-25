import { MenuIcon, SearchIcon } from "lucide-react";
import Link from "next/link";
import SearchBox from "./SearchBox";
import { Input } from "@/components/ui/input";
import Navbar from "./Navbar";
export default function Header() {
  return (
    <div className="h-72 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
    <div className="text-center mt-10 ">
      <h1 className="text-white text-5xl font-bold mb-2">
        Find your product for any occasion
      </h1>
      <div className="mt-5"><SearchBox /></div>
    </div>
  </div>
  );
}
