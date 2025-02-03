"use client"
import TabsNav from "../components/TabsNav"
import GsapAnimation from '../components/Gsap'
import { Power3 } from 'gsap'

const OurExpertise = () => {
    return (
        <section>
            <div className="container">
                <div className="row justify-between gap-y-10">
                    <GsapAnimation animation={{ opacity: 1, duration: 1, ease: Power3.easeInOut }} className="col-lg-4 col-12 opacity-0">
                        <h2 className="text-white heading-5 border-l-4 border-solid border-indigo-500 pl-[25px]">Our Expertise</h2>
                    </GsapAnimation>
                    <GsapAnimation animation={{ opacity: 1, duration: 1, delay: 0.5, ease: Power3.easeInOut }} className="col-xxl-7 col-lg-8 offset-xxl-1 opacity-0">
                        <TabsNav track={true} color="#fff" trackColor="#232323" />
                    </GsapAnimation>
                </div>
            </div>
        </section>
    )
}

export default OurExpertise