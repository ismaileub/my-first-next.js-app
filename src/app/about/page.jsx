"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const AboutPage = () => {

    const router = useRouter();
    const isLoggedIn = false;
    const handleNavigation = () => {
        if (isLoggedIn) {
            router.push("/about/address");
        } else {
            router.push("/");
        }
    }
    return (
        <div>
            <p className='text-2xl font-semibold'>About page</p>
            <Link href="/about/address">Address</Link>
            <br />
            <button type='button' onClick={handleNavigation}>Address btn</button>
        </div>
    );
};

export default AboutPage;