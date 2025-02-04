"use client"
import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { tabData } from "../data/tabNav";

const TabsNav = ({ color = "#6371f0", activeColor = "#6371f094", trackColor = "#232323", track = true, className }) => {
    const [activeTab, setActiveTab] = useState({ index: 0, mounted: false });

    return (<div className={className ? ` ${className}` : ""}>
        <div className="tab-nav">
            <ul className="mb-[30px] pl-0 border-b border-solid relative flex flex-wrap justify-between list-none gap-x-5 lg:gap-x-2" style={{ borderBottomColor: trackColor, border: track ? "" : "none" }}>
                {
                    tabData?.map((item, index) => {
                        return <li key={index} className="nav-item sm:w-full sm:text-center sm:border-b-[1px] sm:border-solid sm:border-[#828282]">
                            <button
                                style={{ color: activeTab.index === index ? activeColor : color }}
                                type="button"
                                onClick={() => setActiveTab({ ...activeTab, index })}
                                className={`nav-link font-semibold relative font-poppins py-[10px] px-[12px] transition-all after:content-normal after:left-0 after:absolute after:bottom-[-2px] after:rounded-full after:border-b-4 after:border-solid after:border-[#6371F0] after:transition-all sm:w-full focus:bg-transparent${activeTab.index === index ? " after:w-full" : " after:w-0"}`}>
                                {item.label}
                            </button>
                        </li>
                    })
                }
            </ul>
        </div>
        <div>
            {tabData.map(({ content }, index) => {
                return <div key={index} className={`${index === activeTab.index ? ' block' : ' hidden'}`} >
                    {content}
                </div>
            })}
        </div>
    </div>
    )
}

TabsNav.propTypes = {
    bgColor: PropTypes.string,
    color: PropTypes.string,
    borderColor: PropTypes.string,
    trackColor: PropTypes.string,
    track: PropTypes.bool
}
export default TabsNav


