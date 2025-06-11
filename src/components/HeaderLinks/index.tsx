
import Link from 'next/link';
import React from 'react';
import HeaderIcon from '../HeaderIcon';


const HeaderLinks = () => {
  return (
    <nav className="flex space-x-6 text-[#141010] font-charter justify-center">
      <Link href="/media" className="hover:text-[#FFE066]">MEDIA</Link>
      <Link href="/team" className="hover:text-[#FFE066]">THE TEAM</Link>
      <Link href="/game" className="hover:text-[#FFE066]">GAME</Link>
    </nav>
  );
};

export default HeaderLinks;