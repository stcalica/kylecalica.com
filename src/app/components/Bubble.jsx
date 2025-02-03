import React from 'react'

// css
import "../scss/components/Bubble.scss"

const Bubble = (props) => {
    return (
        <>
            <div className={`buble-wrapper overflow-hidden${props.className ? ` ${props.className}` : ""}`} style={props.style}>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
            </div>

            <svg className="svg-layer">
                <defs>
                    <filter id="filter">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="18" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 28 -10" result="filter" />
                        <feComposite in="SourceGraphic" in2="filter" operator="atop" />
                    </filter>
                </defs>
            </svg>
        </>
    )
}

export default Bubble