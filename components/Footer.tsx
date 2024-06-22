"use client"

import React from 'react'
import Image from 'next/image'
import Link from "next/link"
import { footerLinks } from '@/constants'

const Footer = () => {
    return (
        <footer className='flex flex-col text-gray-100 mt-5 border-t border-gray-600'>
            <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm-px-16 px-6 py-10'>
                <div className='flex flex-col justify-start items-start gap-6'>
                    <Link href="/" className='flex justify-center items-center'>
                        <Image
                            src="/logo3.png"
                            alt='logo'
                            width={90}
                            height={18}
                            className='object-conatin' 
                            style={{ width: 'auto', height: 'auto' }}/>
                        <span className='font-bold px-2 text-2xl border-b border-blue-500'><span className='text-blue-500'>R</span>ent <span className="text-blue-500">C</span>ars</span>
                    </Link>
                    <p className='text-base text-gray-500'>Rent cars <br />All Rights Reserved 2024 &copy;</p>
                </div>

                <div className='footer__links'>
                    {footerLinks.map((link) => (
                        <div key={link.title} className='footer__link'>
                            <h3 className='font-bold'>{link.title}</h3>
                            {link.links.map((item) => (
                                <Link className='text-sm text-gray-400' href={item.url} key={item.title}>
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-600 sm:px-16 px-6 py-10'>
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