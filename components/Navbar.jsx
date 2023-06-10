import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="w-full max-w-[1240px] mx-auto">
      <div className="flex justify-between py-10">
      <div className="text-white font-bold uppercase" >Movie Lab</div>
      <div>
        <ul className="md:flex hidden gap-10">
            <li>
                <Link href={"/"} className="capitalize">home</Link>
            </li>
            <li>
                <Link href={""} className="capitalize">about</Link>
            </li>
            <li>
                <Link href={""} className="capitalize">blog</Link>
            </li>
        </ul>
      </div>
      </div>
    </nav>
  );
};
