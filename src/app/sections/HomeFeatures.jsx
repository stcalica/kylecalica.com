"use client"
import React from 'react'
import Bubble from '../components/Bubble'
import Image from 'next/image'
import GsapAnimation from '../components/Gsap'
import { Power3 } from 'gsap'

const HomeFeatures = () => {

    const featuresData = [
        {
            icon: "https://placehold.co/70/png",
            title: "User-Centric Design",
            description: "Deliver an exceptional user experience (UX) with our intuitive and aesthetically pleasing user interface (UI) design."
        },
        {
            icon: "https://placehold.co/70/png",
            title: "Secure Web Hosting",
            description: "Keep your website safe and sound with our reliable and secure hosting services. We ensure your site runs smoothly with minimal downtime."
        },
        {
            icon: "https://placehold.co/70/png",
            title: "CMS",
            description: "Take control of your website effortlessly with our user-friendly CMS solutions. Update, edit, and manage your content efficiently."
        }
    ]

    return (
        <section className="relative">
            <Bubble className="opacity-50" style={{ top: 0, left: 0, "--bubble-bg": "linear-gradient(#261362, #F900B7)" }} />
            <div className="container relative">
                <div className="bg-[linear-gradient(135deg,rgba(216,216,216,0.2),transparent)] rounded-[35px] px-[55px] py-[70px] backdrop-blur-2xl backdrop-saturate-100 xl:px-[40px] lg:py-[50px]">
                    <div className="row row-cols-1 row-cols-lg-3 gap-y-10">
                        {
                            featuresData?.map((item, i) => {
                                return (
                                    <div key={i} className="col">
                                        <GsapAnimation
                                            className="inline-block scale-0"
                                            animation={{
                                                scale: 1,
                                                duration: 1,
                                                ease: Power3.easeInOut
                                            }}
                                        >
                                            <Image className="mb-[30px] xl:mb-[15px]" width={70} height={70} src={item.icon} alt={item.title} />
                                        </GsapAnimation>
                                        <GsapAnimation
                                            as="h2"
                                            className="opacity-0 heading-6 text-white font-medium mb-[15px]"
                                            animation={{
                                                opacity: 1,
                                                duration: 1,
                                                delay: 0.4,
                                                ease: Power3.easeInOut
                                            }}
                                        >
                                            {item.title}
                                        </GsapAnimation>
                                        <GsapAnimation
                                            as="p"
                                            className="inline-block opacity-0"
                                            animation={{
                                                opacity: 1,
                                                duration: 1,
                                                delay: 0.8,
                                                ease: Power3.easeInOut
                                            }}
                                        >
                                            {item.description}
                                        </GsapAnimation>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeFeatures