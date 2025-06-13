'use client'
import { CaretUpIcon } from "@phosphor-icons/react";

const BottomToTopArrow = () => {

    const ScrollToTop = ():void => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <>
        <div className="absolute bottom-30 right-0 md:right-6 z-50 p-3 rounded-full hover:bg-black">
            <CaretUpIcon fill="white" size={32} weight="bold" onClick={ScrollToTop} cursor="pointer"/>
        </div>
        </>
    )
}

export default BottomToTopArrow