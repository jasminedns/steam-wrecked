'use client'
import { useState,useEffect } from "react"
import Image from "next/image"

const BottomToTopArrow = () => {

    const [arrowVisiblity,setArrowVisiblity] = useState<Boolean>(false)

    const visible = () => {
        setArrowVisiblity(window.scrollY>50);
    }

    useEffect(() => {
        visible();
        window.addEventListener("scroll", visible);
        return () => window.removeEventListener("scroll", visible);
    },[])

    const ScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <button onClick={ScrollToTop}>
               <Image src="/images/background/upArrow.png" alt="upArrow" width={0} height={0} sizes="100vw"
                        className="w-[50%] h-auto"></Image> 
        </button>
    )
}

export default BottomToTopArrow