import React from 'react'
import Bubble from '../components/Bubble'

const WorkBanner = () => {
  return (
    <>
      <section className="about-banner h-[50%] flex items-center justify-center py-[200px] bg-[#080a0e] z-0 w-full lg:relative lg:h-[auto] lg:py-[200px] sm:py-[100px]">
        <Bubble className="md:opacity-30" style={{ top: 0, left: 'auto', right: 0, "--bubble-bg": "linear-gradient(#261362, #F900B7)" }} />
        <div className="container relative">
          <div className="row">
            <div className="col text-center">
              <h1 className="text-white sm:text-[40px]">Work</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WorkBanner