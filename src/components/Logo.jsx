import Link from "next/link"
import React from 'react'

const Logo = ({ ...props }) => {
    return (
        <Link href="/">
            <img {...props} src="/assets/img/garuda.svg" alt="Garuda Web Solution" />
        </Link>
    )
}

export default Logo