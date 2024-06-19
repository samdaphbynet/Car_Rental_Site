"use client"

import React from 'react'
import Image from 'next/image'
import Link from "next/link"
import { footerLinks } from '@/constants'
console.log(footerLinks)

const Footer = () => {
    return (
        <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-200'>
            <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm-px-16 px-6 py-10'>
                <div className='flex flex-col justify-start items-start gap-6'>
                    <Image src="/logo.svg" alt='logo' width={118} height={18} className='object-contain' />
                    <p className='text-base text-gray-500'>Rent cars <br />All Rights Reserved 2024 &copy;</p>
                </div>

                <div className='footer__links'>
                    {footerLinks.map((link) => (
                        <div key={link.title} className='footer__link'>
                            <h3 className='font-bold'>{link.title}</h3>
                            {link.links.map((item) => (
                                <Link className='text-sm text-gray-500' href={item.url} key={item.title}>
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-200 sm:px-16 px-6 py-10'>
                    <p>@2024 Rent Cars. All Rights Reserved</p>
                    <div className='footer__copyrights-link'>
                        <Link href="/" className='text-gray-500'>
                            Privacy Policy
                        </Link>
                        <Link href="/" className='text-gray-500'>
                            Terms of Use
                        </Link>
                    </div>
                </div>
        </footer>
    )
}

export default Footer