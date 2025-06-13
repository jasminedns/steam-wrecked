import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import HeaderLinks from '../HeaderLinks';


const HeaderIcon = () => {
  return (
    <Link href="/" className="flex items-center coursor-pointer">
     
        <Image
          src="/images/background/logo.png"
          alt="Steam Wrecked Logo"
          width={0}
          height={0}
          sizes='100vw'
          className='w-[5%] h-auto'
        />
    
    </Link>
  );
};

export default HeaderIcon;