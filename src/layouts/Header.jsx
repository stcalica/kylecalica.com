"use client"

import React, { useEffect, useRef, useState } from 'react'
import Logo from "../components/Logo"
import Link from "next/link"
import { usePathname } from "next/navigation"
import useWindowScroll from "@react-hook/window-scroll"
import Toggler from "../components/Toggler"

const Header = () => {
    const headerNav = useRef(null)
    const pathname = usePathname()
    const scrollY = useWindowScroll()
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        if (scrollY > 150) {
            headerNav.current.classList.add("bg-[#020206]", "py-[15px]", "px-[25px]", "rounded-[25px]", "shadow-lg")
        } else {
            headerNav.current.classList.remove("bg-[#020206]", "py-[15px]", "px-[25px]", "rounded-[25px]", "shadow-lg")
        }
    }, [scrollY])

    return (
        <header className={`py-[15px] fixed top-0 z-10 w-full`}>
            <div className="container relative">
                <nav ref={headerNav} className={`flex justify-between items-center transition-all ease-in-out duration-[500ms]`}>
                    <Logo width={45} height={45} />
                    <Toggler className="hidden sm:flex" onChange={(val) => setToggle(val)} />
                    <ul
                        className={`flex gap-x-6 sm:absolute sm:top-[115%] sm:left-[15px] sm:bg-darkgray sm:p-[25px] sm:w-[calc(100%-30px)] sm:rounded-[15px] sm:flex-col sm:gap-y-4 overflow-hidden transition-all duration-500${toggle ? " sm:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]" : " sm:[clip-path:polygon(0_0,100%_0,100%_0,0_0)]"}`}
                    >
                        <li><Link href="/" className={`font-medium${pathname === "/" ? " active text-white" : ""}`}>Home</Link></li>
                        <li><Link href="/about" className={`font-medium${pathname === "/about" ? " active text-white" : ""}`}>About</Link></li>
                        <li><Link href="/work" className={`font-medium${pathname === "/work" ? " active text-white" : ""}`}>Work</Link></li>
                        <li><Link href="/contact" className={`font-medium${pathname === "/contact" ? " active text-white" : ""}`}>Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header