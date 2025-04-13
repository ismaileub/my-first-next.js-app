import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    return (
        <nav className='flex justify-center'>
            <ul className='flex justify-center space-x-4'>
                <Link href="/"><li>Home</li></Link>
                <Link href="/services"> <li>Services</li></Link>
                <Link href="/about"><li>About</li></Link>
            </ul>
        </nav>
    );
};

export default NavBar;