import React from 'react'
import Bubble from "../components/Bubble"

const AboutBanner = () => {
    return (
        <section className="about-banner h-[100vh] flex items-center justify-center absolute top-0 bg-[#080a0e] z-0 w-full lg:relative lg:h-[auto] lg:py-[200px] sm:py-[100px]">
            <Bubble className="sm:opacity-50" style={{ top: 0, left: "auto", right: 0, "--bubble-bg": "linear-gradient(#261362, #F900B7)" }} />
            <Bubble className="sm:opacity-50" style={{ top: 300, left: -150, "--bubble-bg": "linear-gradient(#261362, #F900B7)" }} />
            <div className="container relative">
                <div className="row">
                    <div className="col text-center">
                        <h1 className="text-white sm:text-[40px]">About us</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutBanner