import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose, AiFillFacebook } from 'react-icons/ai';

import { Logo } from './Logo';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed w-full bg-[#1b3375]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Logo />
        <div className="hidden sm:flex">
          {/* Web View */}
          <ul className="hidden sm:flex">
            <li className="ml-10 uppercase hover:border-b text-xl text-[#f3f3f2]">
              <Link href="/about">Our Mission</Link>
            </li>
            <li className="ml-10 uppercase hover:border-b text-xl text-[#f3f3f2]">
              <Link href="/locations">Locations</Link>
            </li>
            <li className="ml-10 uppercase hover:border-b text-xl text-[#f3f3f2]">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} />
        </div>
        <div
          className={
            menuOpen
              ? 'fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-gray-200 p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div className="flex w-full items-center justify-end">
            <div onClick={handleNav} className="cursor-pointer">
              <AiOutlineClose size={25} />
            </div>
          </div>
          <div className="flex-col py-4">
            {/* Mobile View */}
            <ul>
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer text-xl"
              >
                <Link href="/">Home</Link>
              </li>
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer text-xl"
              >
                <Link href="/about">Our Mission</Link>
              </li>
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer text-xl"
              >
                <Link href="/locations">Locations</Link>
              </li>
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer text-xl"
              >
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-row justify-around pt-10 items-center">
            {/* Social Media Icons */}
            <a href="https://www.facebook.com/cnci.la">
              <AiFillFacebook className="cursor-pointer" size={30} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
