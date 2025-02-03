import React from 'react'
import '../../app/scss/sections/WorkList.scss'
import Image from 'next/image'

const portfolioData = [
    {
        img: "https://placehold.co/500/png",
        title: "Spin And Destroy",
        link: "#"
    },
    {
        img: "https://placehold.co/500/png",
        title: "Crybaby Oakland",
        link: "#"
    },
    {
        img: "https://placehold.co/500/png",
        title: "Ad Arcade",
        link: "#"
    },
    {
        img: "https://placehold.co/500/png",
        title: "Vanthe",
        link: "#"
    },
    {
        img: "https://placehold.co/500/png",
        title: "Briiz",
        link: "#"
    },
    {
        img: "https://placehold.co/500/png",
        title: "Yin Yoni",
        link: "#"
    },
    {
        img: "https://placehold.co/500/png",
        title: "Listing Link - Real Estate Chat Bots",
        link: "#"
    },
    {
        img: "https://placehold.co/500/png",
        title: "Listing Link - Real Estate Chat Bots",
        link: "#"
    }
]


const WorkList = () => {
    return (
        <section className='portfolio-list pt-0 pb-[250px] md:pb-[75px] sm:pb-[50px]'>
            <div className="container px-[15px] relative">
                <div className="row gap-y-20">
                    {
                        portfolioData.map((data, index) => {
                            return (
                                <div key={index} className="col-lg-6">
                                    <a href={data.link} target='_blank'>
                                        <div className="portfolio-card cursor-pointer">
                                            <Image className="mb-[30px] rounded-3xl overflow-hidden md:w-full md:mb-[15px]" src={data.img} alt={data.title} width={500} height={500} />
                                            <h2 className="worklist-title text-[25px] leading-[30px] text-white before:content-[''] before:w-[85px] before:h-[2px] before:bg-[#fff3] before:inline-block before:align-middle before:mr-[15px] md:text-[20px] md:before:w-[50px]">{data.title}</h2>
                                            <span className="category">{data.content}</span>
                                        </div>
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default WorkList
