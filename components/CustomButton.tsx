"use client"

import { CustomButtonProps } from '@/types'

const CustomButton = ({title, containerStyles, handleClick, btnType} : CustomButtonProps) => {
  return (
    <button
        disabled={false}
        className={`custom-btn ${containerStyles}`}
        type={btnType || "submit"}
        onClick={handleClick}
    >
        <span className={'flex-1'}>{title}</span>
    </button>
  )
}

export default CustomButton