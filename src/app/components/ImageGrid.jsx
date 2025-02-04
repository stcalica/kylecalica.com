import React from 'react'
import Image from "next/image"
import { gridImageData } from "../data/gridImage"
import { PropTypes } from "prop-types"

const ImageGrid = ({ data = gridImageData, bgColor = "#f9f9f9", border = "#bfbebe", className }) => {
    return (
        <ul className={`w-full flex flex-wrap gap-y-6 list-unstyled${className ? ` ${className}` : ""}`
        }>
            {
                data?.map(({ path, label }, i) => (
                    <li style={{ backgroundColor: bgColor, borderColor: border }} key={i} className={`transition-all group w-[120px] h-[120px] flex overflow-hidden relative items-center flex-col justify-center duration-[0.35s] ease-[ease-in-out] mr-[25px] pb-[5px] rounded-[5px] border border-solid border-transparent hover:border hover:border-solid md:w-[100px] md:h-[100px] xs:mr-[10px] xs:w-[30%]`}>
                        <Image
                            src={path ?? "https://source.unsplash.com/124x124"}
                            className="transition-all duration-[0.35s] ease-[ease-in-out] group-hover:opacity-100 group-hover:translate-y-[-5px]"
                            alt={label}
                            width={50}
                            height={50}
                        />
                        <span className="opacity-0 w-full text-xs font-bold absolute text-center text-white translate-y-2.5 duration-[0.35s] ease-[ease-in-out] bottom-0 transition-all group-hover:opacity-100 group-hover:translate-y-[-5px]">{label}</span>
                    </li>
                ))
            }
        </ul>
    )
}

ImageGrid.propTypes = {
    data: PropTypes.array,
    bgColor: PropTypes.string,
    border: PropTypes.string,
    className: PropTypes.string
}

export default ImageGrid