import Image from 'next/image';

import { churchChristmas } from './assets';

export default function Home() {
  return (
    <div className="w-full h-screen">
      <div className="home-background-image-container">
        <Image
          src={`${churchChristmas.src}`}
          fill
          className="home-background-image"
          alt="Home Image"
        />
      </div>
      <div className="container text-center items-center justify-center mx-auto mb-10 mt-10 max-xs:mt-[28%] px-[10%]">
        <h2 className="text-4xl max-sm:text-2xl">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit...
        </h2>
        <p className="text-xl mt-3 max-sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque arcu
          diam, maximus ac vehicula vitae, dapibus gravida purus. Nunc eu tempor
          urna. In in mauris nulla. Donec tincidunt dolor ut massa pharetra, sed
          fringilla metus porttitor. Aenean placerat rhoncus accumsan. Praesent
          malesuada nunc eu suscipit lacinia.
        </p>
      </div>
    </div>
  );
}
