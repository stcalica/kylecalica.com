import React from 'react'
import MagneticButton from '../components/MagneticButton'
import Image from 'next/image'
import Link from "next/link"
import Bubble from '../components/Bubble'

const HomeBanner = () => {
    return (
        <>
            {/* HomeBanner */}
            <section className="py-[320px] relative flex items-center xl:py-[250px] lg:pt-[200px] lg:pb-[100px] sm:pt-[150px]">
                <Bubble className="opacity-50" style={{ top: 0, left: "auto", right: 0, "--bubble-bg": "linear-gradient(#261362, #F900B7)" }} />
                <Bubble className="opacity-50" style={{ top: 300, left: -150, "--bubble-bg": "linear-gradient(#261362, #F900B7)" }} />
                <div className='row justify-center relative z-0 mx-0 w-full'>
                    <div className='col-xl-6 col-lg-8'>
                        <div className="text-center relative">
                            <h1 className='heading-2 font-bold text-white mb-[50px] w-[82%] mx-auto xl:w-full xl:text-[50px] xl:leading-[60px] sm:text-[40px] sm:mb-[30px]'>Take your ideas to the next level</h1>
                            <p className='text-[18px] w-full mx-auto mb-[50px] xl:w-[65%] sm:mb-[30px] sm:w-[80%] xs:w-full'>We design simple things beautifully <br /> We love what we do.</p>
                            <MagneticButton buttonClass="bg-[#6e5afd] py-[20px] px-[55px] rounded-[35px]">
                                <Link href="/contact" className="text font-poppins">Contact Us</Link>
                            </MagneticButton>
                        </div>
                    </div>
                </div>
                <div className="absolute text-center z-[1] top-1/2 -translate-y-1/2 left-[15%] xl:left-[10%] lg:hidden">
                    <MagneticButton buttonClass="bg-[#ffdb1e] mb-[10px] overflow-hidden rounded-[114px]">
                        <Image width={150} height={225} className="h-[auto]" src="https://placehold.co/150/png" alt="yash s." />
                    </MagneticButton>
                    <h4 className='text-white font-poppins -mb-[5px]'>Yohan A.</h4>
                    <span className='font-poppins text-white'>Frontend Developer</span>
                </div>
                <div className="absolute text-center z-[1] bottom-[50px] right-[25%] xl:right-[20%] lg:hidden">
                    <MagneticButton buttonClass="bg-[#6e5aef] mb-[10px] overflow-hidden rounded-full py-[15px] px-[15px]">
                        <Image width={433} height={577} className="w-[150px] h-[auto] inline-flex" src="https://placehold.co/150/png" alt="akhil k." />
                    </MagneticButton>
                    <h4 className='text-white font-poppins -mb-[5px]'>Amelia C.</h4>
                    <span className='font-poppins text-white'>Web &amp; UI Designer</span>
                </div>
                <div className="absolute text-center z-[1] top-[150px] right-[13%] xl:right-[10%] lg:hidden">
                    <MagneticButton buttonClass="bg-[#ff83af] mb-[10px] overflow-hidden rounded-full py-[15px]">
                        <Image width={150} height={150} className="inline-flex" src="https://placehold.co/150/png" alt="niken p." />
                    </MagneticButton>
                    <h4 className='text-white font-poppins -mb-[5px]'>Nathan T.</h4>
                    <span className='font-poppins text-white'>Branding and UX</span>
                </div>
            </section>
        </>
    )
}

export default HomeBanner
