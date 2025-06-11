import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import HeaderLinks from '../HeaderLinks';


const HeaderIcon = () => {
  return (
    <Link href="/" className="flex items-center coursor-pointer">
     
        <Image
          src="/logo.png"
          alt="Steam Wrecked Logo"
          width={50}
          height={50}
          className="rounded-full drop-shadow-[0-0-40px_#F92A06]"
        />
    
    </Link>
  );
};

export default HeaderIcon;