'use client';
import Hamburger from 'hamburger-react'
import { useState } from 'react'

const HamburgerMobile = () => {
    const [isOpen, setOpen] = useState(false)
    return (
        <Hamburger toggled={isOpen} toggle={setOpen} color="white"/>
    )
}

export default HamburgerMobile