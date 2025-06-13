import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import HeaderLinks from '../HeaderLinks';


const HeaderIcon = () => {
  return (
    <Link href="/" className="flex items-center coursor-pointer basis-[50%]">
     
        <Image
          src="/images/background/logo.png"
          alt="Steam Wrecked Logo"
          width={0}
          height={0}
          sizes='100vw'
          className='m-1 sm:m-2 w-[35%] sm:w-[25%] md:w-[20%] lg:w-[15%] h-auto'
        />
    
    </Link>
  );
};

export default HeaderIcon;