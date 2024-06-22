import React, { useState, Fragment } from 'react'
import Image from 'next/image';
import { SearchManufactureProps } from '@/types'
import { Combobox, Transition } from '@headlessui/react'
import { manufacturers } from '../constants';

const SearchManufacture = ({ manufacture, setManufacture }: SearchManufactureProps) => {
    const [query, setQuery] = useState("")

    const filteredManufactures =
        query === ""
            ? manufacturers
            : manufacturers.filter((item) => (
                item.toLowerCase()
                    .replace(/\s+/g, "")
                    .includes(query.toLowerCase()
                        .replace(/\s+/g, ""))
            ))
    return (
        <div className='search-manufacturer'>
            <Combobox value={manufacture} onChange={setManufacture}>
                <div className='w-full relative'>
                    <Combobox.Button className="absolute top-[14px]">
                        <Image src="/car-logo.svg" width={20} height={20} alt='logo' className='ml-4' />
                    </Combobox.Button>

                    <Combobox.Input
                        placeholder='Recherche voiture'
                        className='search-manufacturer__input'
                        displayValue={(manufacture: string) => manufacture}
                        onChange={(e) => setQuery(e.target.value)}
                    />

                    <Transition
                        as="div"
                        leave='transition ease-in duration-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                        afterLeave={() => setQuery("")}
                    />
                    <Combobox.Options>
                        {filteredManufactures.length === 0 && query !== "" && (
                            <Combobox.Option value={query} className="search-manifacturer__option">
                                No results found
                            </Combobox.Option>
                        )}
                        {filteredManufactures.map((item, index) => (
                            <Combobox.Option
                                key={index}
                                value={item}
                                className={({active}) => `relative search-manufacturer__option ${active ? 'bg-primary-blue text-white' : 'text-gray-500'}`}>
                                {item}
                            </Combobox.Option>
                        ))}
                    </Combobox.Options>
                </div>
            </Combobox>
        </div>
    )
}

export default SearchManufacture