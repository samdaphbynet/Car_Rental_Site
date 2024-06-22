"use client"

import React, { Fragment } from 'react'
import { CarsProps } from '@/types';
import Image from "next/image"
import { Dialog, Transition } from "@headlessui/react"

interface CarDetailsProps {
    car: CarsProps;
    isOpen: boolean;
    closeModal: () => void;
}

const CarDetails = ({ car, isOpen, closeModal }: CarDetailsProps) => {

    // const cars = Object.keys(car)
    // const res = Object.entries(car)

    return (
        <>
            <Transition appear as={Fragment} show={isOpen}>
                <Dialog as='div' onClose={closeModal} className="relative z-10">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo='opacity-0'
                    >
                        <div className='fixed inset-0 bg-black bg-opacity-25' />
                    </Transition.Child>

                    <div className='fixed inset-0 overflow-y-auto'>
                        <div className='flex min-h-full items-center justify-center p-4 text-center'>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo='opacity-0'
                            >
                                <Dialog.Panel className="relative bg-white w-full max-w-lg max-h-[90vh] overflow-y-auto tranform rounded-2xl text-left shadow-xsl transition-all flex flex-col">
                                    <button
                                        type='button'
                                        onClick={closeModal}
                                        className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full'
                                    >
                                        <Image
                                            src="/close.svg"
                                            alt='close'
                                            width={20}
                                            height={20}
                                            className='object-contain'
                                        />
                                    </button>

                                    <div className='flex-1 flex flex-col gap-3 p-4'>
                                        <div className='relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg'>
                                            <Image
                                                src="/hero.png"
                                                alt='image card'
                                                priority
                                                className='object-contain'
                                                fill
                                                sizes='w-full h-40'
                                            />
                                        </div>

                                        <div className='flex gap-3'>
                                            <div className='flex-1 relative w-full h-24 bg-gray-200 rounded-lg'>
                                                <Image
                                                    src="/hero.png"
                                                    alt='image card'
                                                    priority
                                                    className='object-contain'
                                                    fill
                                                    sizes='w-full h-40'
                                                />
                                            </div>

                                            <div className='flex-1 relative w-full h-24 bg-gray-200 rounded-lg'>
                                                <Image
                                                    src="/hero.png"
                                                    alt='image card'
                                                    priority
                                                    className='object-contain'
                                                    fill
                                                    sizes='w-full h-40'
                                                />
                                            </div>

                                            <div className='flex-1 relative w-full h-24 bg-gray-200 rounded-lg'>
                                                <Image
                                                    src="/hero.png"
                                                    alt='image card'
                                                    priority
                                                    className='object-contain'
                                                    fill
                                                    sizes='w-full h-40'
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex-1 flex flex-col gap-2 p-4 text-black'>
                                        <h2 className='font-semibold text-xl capitalize'>{car.make} {car.model}</h2>

                                        {Object.entries(car).map(([key, value]) => (
                                            <div key={key} className='flex justify-between m-2'>
                                                <p className='font-meduim text-gray-500 capitalize'>{key.replace("_", " ")}</p>
                                                <p>{value}</p>
                                            </div>
                                        ))}
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default CarDetails