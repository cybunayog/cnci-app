import React, { useState } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose, AiFillFacebook } from 'react-icons/ai';

import { Logo } from './Logo';
import { StyledIcon } from './StyledIcon';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-10 bg-[#183d6b]">
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
          <StyledIcon>
            <AiOutlineMenu size={25} />
          </StyledIcon>
        </div>
        <div
          className={
            menuOpen
              ? 'fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#183d6b] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }
        >
          <div className="flex w-full items-center justify-end">
            <div onClick={handleNav} className="cursor-pointer">
              <StyledIcon>
                <AiOutlineClose className="general-icon" size={25} />
              </StyledIcon>
            </div>
          </div>
          <div className="flex-col py-4">
            {/* Mobile View */}
            <ul className="m-[-10]">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer text-xl text-[#f3f3f2] hover:bg-[#315684]"
              >
                <Link href="/">Home</Link>
              </li>
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer text-xl text-[#f3f3f2] hover:bg-[#315684] "
              >
                <Link href="/about">Our Mission</Link>
              </li>
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer text-xl text-[#f3f3f2] hover:bg-[#315684]"
              >
                <Link href="/locations">Locations</Link>
              </li>
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer text-xl text-[#f3f3f2] hover:bg-[#315684]"
              >
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-row justify-around pt-10 items-center">
            {/* Social Media Icons */}
            <a href="https://www.facebook.com/cnci.la">
              <StyledIcon>
                <AiFillFacebook
                  className="general-icon cursor-pointer"
                  size={30}
                />
              </StyledIcon>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
