
import Link from 'next/link';
import React from 'react';

const HeaderLinks = () => {
  return (
    <nav className="flex space-x-6 text-[#E3E3E3] font-charter">
      <Link href="/media" className="hover:text-[#FFE066]">MEDIA</Link>
      <Link href="/team" className="hover:text-[#FFE066]">THE TEAM</Link>
      <Link href="/game" className="hover:text-[#FFE066]">GAME</Link>
    </nav>
  );
};

export default HeaderLinks;