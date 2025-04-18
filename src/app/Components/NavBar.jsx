"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavBar = () => {
    const pathName = usePathname();

    if (!pathName.includes("dashboard")) {
        return (
            <nav className='flex justify-center'>
                <ul className='flex justify-center space-x-4'>
                    <Link href="/"><li>Home</li></Link>
                    <Link href="/services"> <li>Services</li></Link>
                    <Link href="/about"><li>About</li></Link>
                </ul>
            </nav>
        );
    } else {
        <></>
    }
}


export default NavBar;