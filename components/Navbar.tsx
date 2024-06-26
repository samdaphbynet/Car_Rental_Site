import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CustomButton from './CustomButton'

const Navbar = () => {
    return (
        <header className='w-full absolute z-10 '>
            <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm-px-16 px-6 py-4'>
                <Link href="/" className='flex justify-center items-center'>
                    <Image
                        src="/logo3.png"
                        alt='logo'
                        width={90}
                        height={18}
                        style={{ width: "auto", height: "auto" }}
                        className='object-conatin' />
                    <span className='font-bold px-2 text-2xl border-b border-blue-500'><span className='text-blue-500'>R</span>ent <span className="text-blue-500">C</span>ars</span>
                </Link>

                <div className='flex'>
                    <CustomButton
                        title="Sign In"
                        btnType="button"
                        containerStyles="text-white border-2 rounded-full bg-black min-w-[130px]"
                    />

                    <CustomButton
                        title="Sign Up"
                        btnType="button"
                        containerStyles="text-primary-blue rounded-full bg-white min-w-[130px] ml-4"
                    />
                </div>
            </nav>
        </header>
    )
}

export default Navbar