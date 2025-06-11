import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const HeaderIcon = () => {
  return (
    <Link href="/" className="flex items-center coursor-pointer">
     
        <Image
          src="/logo.png"
          alt="Steam Wrecked Logo"
          width={50}
          height={50}
          className="rounded-full"
        />
    
    </Link>
  );
};

export default HeaderIcon;
