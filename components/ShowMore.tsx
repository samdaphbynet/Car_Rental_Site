"use client"

import React from 'react'
import { useRouter } from 'next/navigation';
import { updateSearchParams } from '@/utils';

interface ShowMoreProms {
    pageNumber: number;
    isNext: boolean;
}

const ShowMore = ({ pageNumber, isNext }: ShowMoreProms) => {

    const router = useRouter()

    const handlePlusPagination = () => {
        const newLimit = (pageNumber + 1) * 10;
        const newPathName = updateSearchParams("limit", `${newLimit}`)

        router.push(newPathName)
    }

    const handleMoinsPagination = () => {
        const newLimit = (pageNumber - 1) * 10;
        const newPathName = updateSearchParams("limit", `${newLimit}`)

        router.push(newPathName)
    }
    return (
        <div className='flex justify-between m-10'>
            <button

                className='bg-primary-blue p-10 text-white py-[16px] rounded-lg'
                onClick={handleMoinsPagination}
                disabled={!isNext}
            >
                Page Précédente
            </button>

            <button
                className='bg-primary-blue p-10 text-white py-[16px] rounded-lg'
                onClick={handlePlusPagination}
                disabled={isNext}
            >
                Page Suivante
            </button>
        </div>
    )
}

export default ShowMore