"use client"
import React from 'react'
import Logo from "../components/Logo"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"

const Footer = () => {
    const pathname = usePathname()

    return (
        <footer className="pb-[120px] lg:pb-[90px] md:pb-[75px] sm:pb-[50px]">
            <div className="container mb-[80px]">
                <div className="row items-center">
                    <div className="col w-full h-[1px] bg-[rgba(255,255,255,0.2)]"></div>
                    <div className="col text-center">
                        <h2 className="text-white font-semibold mb-[30px] md:mb-[15px] sm:mb-[5px]">{`Let's talk`}</h2>
                        <a href={`mailto:${process.env.NEXT_PUBLIC_MAIL_ID || "info@garudasolutions.com"}`} className="heading-6 font-poppins">{process.env.NEXT_PUBLIC_MAIL_ID || "info@garudasolutions.com"}</a>
                    </div >
                    <div className="col w-full h-[1px] bg-[rgba(255,255,255,0.2)]"></div>
                </div >
            </div >
            <div className="container">
                <div className="row justify-between gap-y-10">
                    <div className="col-lg-3 col-md-6">
                        <Logo className="mb-[40px] inline-block sm:mb-[20px]" width={70} height={70} />
                        <p>© {new Date().getFullYear()} Garuda. All rights reserved.</p>
                    </div>
                    <div className="col-lg-2 col-md-6 offset-xl-2">
                        <h3 className="heading-6 text-white font-semibold mb-[30px] sm:mb-[15px]">Pages</h3>
                        <ul>
                            <li><Link href="/" className={`font-medium hover:text-white leading-[30px] transition-all${pathname === "/" ? " active text-white" : ""}`}>Home</Link></li>
                            <li><Link href="/about" className={`font-medium hover:text-white leading-[30px] transition-all${pathname === "/about" ? " active text-white" : ""}`}>About</Link></li>
                            <li><Link href="/contact" className={`font-medium hover:text-white leading-[30px] transition-all${pathname === "/contact" ? " active text-white" : ""}`}>Contact</Link></li>
                            <li><Link href="/work" className={`font-medium hover:text-white leading-[30px] transition-all${pathname === "/work" ? " active text-white" : ""}`}>Work</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h3 className="heading-6 text-white font-semibold mb-[30px] sm:mb-[15px]">Contact us</h3>
                        <ul>
                            <li className="flex gap-x-[15px] mb-[10px]">
                                <Image width={17} height={25} src="/assets/icons/phone.svg" alt="phone icon" />
                                <a className="hover:text-white transition-all" href="tel:+91919879879879row justify-between gap-y-10">+91 9879879879</a>
                            </li>
                            <li className="flex gap-x-[15px]">
                                <Image width={17} height={25} src="/assets/icons/mail.svg" alt="mail icon" />
                                <a className="hover:text-white transition-all" href={`mailto:${process.env.NEXT_PUBLIC_MAIL_ID || "info@garudasolutions.com"}`}>{process.env.NEXT_PUBLIC_MAIL_ID || "info@garudasolutions.com"}</a>
                            </li >
                        </ul >
                    </div >
                    <div className="col-lg-auto col-md-6">
                        <h3 className="heading-6 text-white font-semibold mb-[30px] sm:mb-[15px]">Follow us on:</h3>
                        <ul className="flex items-center gap-x-[25px]">
                            <li><a href="#" className="hover:opacity-50 transition-all"><Image width={17} height={29} src="/assets/icons/facebook.svg" alt="facebook icon" /></a></li>
                            <li><a href={process.env.NEXT_PUBLIC_TWITTER_ID || "#" || "#"} target="_blank" className="hover:opacity-50 transition-all"><Image width={24} height={24} src="/assets/icons/twitter.svg" alt="twitter icon" /></a></li>
                            <li><a href={process.env.NEXT_PUBLIC_INSTA_ID || "#" || "#"} target="_blank" className="hover:opacity-50 transition-all"><Image width={24} height={24} src="/assets/icons/instagram.svg" alt="instagram icon" /></a></li>
                        </ul>
                    </div>
                </div >
            </div >
        </footer >
    )
}

export default Footer