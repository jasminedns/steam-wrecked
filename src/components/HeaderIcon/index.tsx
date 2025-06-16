import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const HeaderIcon = () => {
  return (
    <Link href="/" className="flex items-center coursor-pointer basis-[50%]">
     
        <Image
          src="/images/logo/SteamWrecked_LOGO.png"
          alt="Steam Wrecked Logo"
          width={0}
          height={0}
          sizes='100vw'
          className='m-1  sm:m-2 md:m-3  w-[30%] sm:w-[20%] md:w-[15%] lg:w-[10%] h-auto'
        />
    
    </Link>
  );
};

export default HeaderIcon;

