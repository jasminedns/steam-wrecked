'use client'
import { CaretUpIcon } from "@phosphor-icons/react";

type classNameType = {
    className?: string;
}

const BottomToTopArrow = ({className}: classNameType) => {

    const ScrollToTop = ():void => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <>
        <div className={`${className}`}>
            <CaretUpIcon fill="white" size={32} weight="bold" onClick={ScrollToTop} cursor="pointer"/>
        </div>
        </>
    )
}

export default BottomToTopArrow