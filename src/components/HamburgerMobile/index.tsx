'use client';
import { Pages } from '@/features/arrays/types';
import Hamburger from 'hamburger-react';
import Link from 'next/link';
import { useState } from 'react';

const HamburgerMobile = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <Hamburger toggled={isOpen} toggle={setOpen} color="white"/>
            {isOpen &&
                <div className='absolute top-[99.5%] bg-[#282523] min-h-[30px] min-w-full z-99'>
                    <div className='flex flex-col justify-between text-[#E3E3E3] uppercase text-lg text-center p-5'>
                        <Link href="/" className='p-2 focus:font-bold' onClick={() => setOpen(false)}>Homepage</Link>
                        {Pages.map((item:string,index:number) => (
                            <Link 
                                key={index} 
                                href={`/${item.replace(/^the /i, "")}`} 
                                className='p-2 focus:font-bold'
                                onClick={() => setOpen(false)}>
                            {item.includes("the") ? `about  ${item}` : item}
                            </Link>
                        ))}
                    </div>
                </div>
            }
        </>
    )
}

export default HamburgerMobile