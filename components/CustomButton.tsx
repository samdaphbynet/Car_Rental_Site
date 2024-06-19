"use client"

// import { CustomButtonProps } from '@/types'
import React, { MouseEventHandler } from 'react'

interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

const CustomButton = ({title, containerStyles, handleClick} : CustomButtonProps) => {
  return (
    <button
        disabled={false}
        className={`custom-btn ${containerStyles}`}
        type={"button"}
        onClick={handleClick}
    >
        <span className={'flex-1'}>{title}</span>
    </button>
  )
}

export default CustomButton