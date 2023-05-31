import Link from 'next/link';
import Image from 'next/image';

import { churchLogo } from '../assets';

export const Logo = () => {
  return (
    <Link href="/">
      <Image
        src={`${churchLogo.src}`}
        className="mr-5"
        width={60}
        height={60}
        alt="Logo"
      />
    </Link>
  );
};
