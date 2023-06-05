import Image from 'next/image';

import { stage, churchChristmas } from './assets';

export default function Home() {
  return (
    <div className="w-full h-screen">
      <div className="home-background-image-container">
        <Image
          src={`${churchChristmas.src}`}
          fill={true}
          className="home-background-image"
          alt="Home Image"
        />
      </div>
      <div className="h-auto w-full text-center justify-center t-10 bottom-10">
        <h2 className="header-text">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit...
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque arcu
          diam, maximus ac vehicula vitae, dapibus gravida purus. Nunc eu tempor
          urna. In in mauris nulla. Donec tincidunt dolor ut massa pharetra, sed
          fringilla metus porttitor. Aenean placerat rhoncus accumsan. Praesent
          malesuada nunc eu suscipit lacinia. Nunc eget diam sed risus mollis
          pulvinar. Nullam pretium at dolor sed feugiat. Donec tristique purus
          nec dui efficitur auctor. Duis est turpis, dignissim ac scelerisque
          in, tincidunt et lorem.
        </p>
      </div>
    </div>
  );
}
