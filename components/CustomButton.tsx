"use client"

import { CustomButtonProps } from '@/types'
import Image from 'next/image';

const CustomButton = (
  {
    title, 
    containerStyles, 
    handleClick, 
    btnType, 
    rightIcon,
    textStyle
  } : CustomButtonProps) => {
  return (
    <button
        disabled={false}
        className={`custom-btn ${containerStyles}`}
        type={btnType || "submit"}
        onClick={handleClick}
    >
        <span className={`flex-1 ${textStyle}`}>{title}</span>
        {rightIcon && (
          <div className='relative w-6 h-6'>
            <Image 
              src={rightIcon} 
              alt="arrow icon" 
              fill
              className='object-contain'
            />
          </div>
        )}
    </button>
  )
}

export default CustomButton