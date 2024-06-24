"use client"

import React, { useState } from 'react'
import { useRouter } from "next/navigation"
import { updateSearchParams } from '@/utils';

interface OptionsProps {
  title: string;
  value: string;
}

interface CustomFilterProps {
  title: string;
  options: OptionsProps[];
}

const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const [selected, setSelected] = useState("")
  const router = useRouter()

  const handleUpdateParams = (type: string, value: string) => {
    const newPathname = updateSearchParams(title, value.toLowerCase());
    
    router.push(newPathname)
  }

  return (
    <div>
      <select onChange={(e) => {
        const value = e.target.value
        setSelected(value)
        handleUpdateParams(title, value)
      }} className='p-2 rounded-lg border border-gray-100 bg-gray-900'>
        {options.map((option) => (
          <option value={option.value} key={option.value}>{option.title}</option>
        ))}
      </select>
    </div>
  )
}

export default CustomFilter