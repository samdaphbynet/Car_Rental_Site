"use client"

import React, { useState } from 'react'
import CustomButton from './CustomButton';
import SearchManufacture from './SearchManufacture';

const SearchBar = () => {

    const [manufacture, setManufacture] = useState("");

    console.log("manu: ",manufacture)

    const handleSearch = () => {
        console.log("Vehicule")
    }
    return (
        <form className='searchbar' onSubmit={handleSearch}>
            <div className='searchbar__input-container'>
                <SearchManufacture 
                    manufacture={manufacture}
                    setManufacture={setManufacture}/>
            </div>
        </form>
    )
}

export default SearchBar