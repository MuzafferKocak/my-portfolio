import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-wrap items-center justify-between mx-auto p-7">
        <Link href={"/"} className="">
          LOGO
        </Link>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul>
            <li>
              <Link
                href={"#about"}
                className="block py-2 pl-3 pr-4 text-[#adb7be] sm:text-xl rounded md:p-0 hover:text-white"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
