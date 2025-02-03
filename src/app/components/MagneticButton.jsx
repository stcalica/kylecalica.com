"use client"

import React, { useEffect, useRef } from 'react'

// styles
import "../scss/components/MagneticButton.scss"
import { Elastic, gsap } from 'gsap'

const MagneticButton = ({
    children,
    buttonClass = "rounded-[25px] px-[25px] py-[10px] bg-red-500",
    innerClass = "text-white",
    ...props }) => {
    const magneticButton = useRef(null)
    useEffect(() => {
        const el = magneticButton.current;
        const child = el.children[0];
        el.addEventListener("mousemove", function (e) {
            const pos = el.getBoundingClientRect();
            const mx = e.clientX - pos.left - pos.width / 2;
            const my = e.clientY - pos.top - pos.height / 2;

            gsap.to(el, { x: mx * 0.15, y: my * 0.3, rotateX: mx * -0.15, rotateY: my * -0.15 })
            gsap.to(child, { x: mx * 0.3, y: my * 0.3 })
        })

        el.addEventListener("mouseleave", function () {
            gsap.to(el, { x: 0, y: 0, rotateX: 0, rotateY: 0, ease: Elastic.easeOut.config(1.1, 0.4) })
            gsap.to(child, { x: 0, y: 0, ease: Elastic.easeOut.config(1.9, 0.4) })
        })
    }, [])

    return (
        <div className="magnetic-btn-wrapper">
            <button ref={magneticButton} {...props} className={`magnetic-button${buttonClass ? ` ${buttonClass}` : ""}`}>
                <span className={innerClass}>{children}</span>
            </button>
        </div>
    )
}

export default MagneticButton