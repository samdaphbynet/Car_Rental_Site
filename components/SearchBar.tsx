"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';
import SearchManufacture from './SearchManufacture';
import Image from 'next/image';

const SearchButton = ({otherClasses}: {otherClasses:string}) => (
    <button type='submit' className={`ml-2 z-10 ${otherClasses}`}>
        <Image
            src="/magnifying-glass.svg"
            alt='magnifying'
            width={40}
            height={40}
            className='object-contain'/>
    </button>
)

const SearchBar = () => {

    const [manufacture, setManufacture] = useState("");
    const [model, setModel] = useState("");

    const router = useRouter()

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        updateSearchParams(model.toLowerCase(), manufacture.toLowerCase())
    }

    const updateSearchParams = (model: string, manufacture: string) => {
        const searchParams = new URLSearchParams(window.location.search)

        if (model) {
            searchParams.set('model', model)
        } else {
            searchParams.delete('model')
        }

        if (manufacture) {
            searchParams.set('manufacture', manufacture)
        } else {
            searchParams.delete('manufacture')
        }

        const newPathName = `${window.location.pathname}?${searchParams.toString()}`

        router.push(newPathName)
    }
    

    return (
        <form className='searchbar' onSubmit={handleSearch}>
            <div className='searchbar__item'>
                <SearchManufacture 
                    manufacture={manufacture}
                    setManufacture={setManufacture}
                />
                <SearchButton otherClasses="sm:hidden"/>
            </div>

            <div className='searchbar__item'>
                    <Image
                        src="/model-icon.png"
                        width={25}
                        height={25}
                        alt='model'
                        className='object-contain absolute'
                    />
                    <input 
                        type="text"
                        name='model'
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                        placeholder='Model'
                        className='searchbar__input'
                    />
                    <SearchButton otherClasses="sm:hidden"/>
            </div>
            <SearchButton otherClasses='max-sm:hidden'/>
        </form>
    )
}

export default SearchBar