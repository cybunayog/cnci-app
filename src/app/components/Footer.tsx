import React from 'react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="relative bottom-0 w-full bg-black text-center text-white">
      <div className="mx-auto px-6 pt-10 pb-10">
        <ul className="flex flex-row justify-center ">
          <li className="px-2 text-sm">
            <Link href="/">Home</Link>
          </li>
          <li className="px-2 text-sm">
            <Link href="/about">Our Mission</Link>
          </li>
          <li className="px-2 text-sm">
            <Link href="/locations">Locations</Link>
          </li>
          <li className="px-2 text-sm">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className=" mx-auto px-6 pt-5 pb-6 text-[#ffffff80]">
        © CNCI USA - All Rights Reserved || Designed & by{' '}
        <a href="https://github.com/cybunayog">Cy</a>
      </div>
    </footer>
  );
};
