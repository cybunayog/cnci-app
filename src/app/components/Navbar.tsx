import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { churchLogo } from '../assets';

export const Navbar = () => {
  return (
    <nav className="bg-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <Image
            src={`${churchLogo.src}`}
            className="mr-5"
            width={60}
            height={60}
            alt="Logo"
          />
        </Link>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-200 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <Link
                href="/about"
                className="block py-2 pl-3 pr-4 text-2xl text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                The Mission
              </Link>
            </li>
            <li>
              <Link
                href="/locations"
                className="block py-2 pl-3 pr-4 text-2xl text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                Locations
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 pl-3 pr-4 text-2xl text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
