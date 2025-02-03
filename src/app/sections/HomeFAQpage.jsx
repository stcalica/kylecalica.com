"use client"
import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import GsapAnimation from '../components/Gsap';
import { Power3 } from 'gsap';

const accordionData = [
  {
    title: "How do you ensure that your services align with our brand identity?",
    description: "Our web design and development process begins with a thorough discovery phase, where we gain insights into your brand's values and vision. We then create a customized design strategy that reflects your brand identity, ensuring a seamless representation throughout the development journey."
  },
  {
    title: "Can you handle the entire process, from design to deployment?",
    description: "Absolutely! As a full-service IT web design and development agency, we manage every aspect of the process, from initial concept and design to the final deployment. Our experienced team ensures a smooth and efficient development process to bring your website to life."
  },
  {
    title: "What platforms and technologies do you use for web development?",
    description: "We are proficient in various web development platforms and technologies, including but not limited to HTML, CSS, JavaScript, PHP, and popular content management systems like WordPress and Drupal. Our versatility enables us to select the most suitable technology stack for your specific project requirements."
  },
  {
    title: "How do you optimize websites for mobile devices?",
    description: "Our web design and development process prioritizes mobile responsiveness from the outset. We utilize responsive design principles and conduct rigorous testing on various devices to ensure your website performs flawlessly across smartphones, tablets, and desktops."
  }
]

const HomeFAQpage = () => (
  <section className="relative bg-white">
    <GsapAnimation
      as='div'
      animation={{ clipPath: "inset(0 100% 0 0)", duration: 1, ease: Power3.easeInOut }}
      className="bg-[--body-bg] absolute top-0 left-0 w-full h-full [clip-path:inset(0_0_0_0)]"
    >
    </GsapAnimation>
    <div className="container">
      <div className="row justify-center">
        <GsapAnimation className="col-xl-6 col-lg-7 opacity-0" animation={{ opacity: 1, duration: 1, delay: 1, ease: Power3.easeInOut }}>
          <h2 className="text-darkgray text-center font-semibold leading-[1.5] mb-[70px]">Frequently Asked Questions</h2>
        </GsapAnimation>
        <GsapAnimation className="col-lg-7 opacity-0" animation={{ opacity: 1, duration: 1, delay: 1, ease: Power3.easeInOut }}>
          <Accordion.Root
            className="w-full"
            type="single"
            defaultValue="item-1"
            collapsible
          >
            {
              accordionData?.map((item, i) => {
                return (
                  <Accordion.Item className="mt-px overflow-hidden first:mt-0 mb-[35px] last:mb-0" key={i} value={i + 1}>
                    <Accordion.Trigger className="text-left text-darkgray text-[20px] leading-[30px] font-poppins font-semibold pb-[15px] border-b border-solid border-[#828282] w-full md:text-[18px]">{item.title}</Accordion.Trigger>
                    <Accordion.Content className="data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
                      <div className="pt-[15px]">{item.description}</div></Accordion.Content>
                  </Accordion.Item>
                )
              })
            }
          </Accordion.Root>
        </GsapAnimation>
      </div>
    </div>
  </section>
);

export default HomeFAQpage;