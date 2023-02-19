import Link from "next/link";
import React from "react";
import { GrCart } from "react-icons/gr";
import { AiOutlineUser } from "react-icons/ai";

function Header() {
  return (
    <header className="flex justify-between px-16 py-4">
      <div>
        <Link href="/">
          <span className="text-lg">Logo</span>
        </Link>
      </div>
      <nav className="flex justify-center items-center">
        <ul className="flex gap-8">
          <li className="hover:underline">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:underline">
            <Link href="/products">Products</Link>
          </li>
        </ul>
      </nav>
      <div>
        <input
          type="text"
          className="max-w-xl border border-gray-400 py-2 px-2 outline-none"
        />
        <button className="border border-gray-400 py-2 px-4 hover:text-white hover:bg-gray-400 transition">
          Search
        </button>
      </div>
      <div className="flex gap-4">
        <Link href="/cart">
          <span className="block p-3 rounded-md bg-gray-200 hover:bg-gray-400 transition">
            <GrCart size={20} />
          </span>
        </Link>
        <Link href="/userprofile">
          <span className="block p-3 rounded-md bg-gray-200 hover:bg-gray-400 transition">
            <AiOutlineUser size={20} />
          </span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
