import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
function Navbar() {
    return (
        <nav>
            <div className='logo'>
                <Image src='/logo.png' width={130} height={100} alt='Ninja List' />
            </div>
            <Link href='/'><a>Home </a></Link>
            <Link href='/about'><a> About </a></Link>
            <Link href='/ninjas'><a> Ninja Listing</a></Link>
        </nav>
    )
}

export default Navbar
