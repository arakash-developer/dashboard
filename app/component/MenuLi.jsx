import Link from 'next/link'
import React from 'react'

const MenuLi = ({className,litext}) => {
  return (
    <li className='font-normal list-none text-[25px] leading-[159%] text-[#fff] opacity-50'><Link href='#'>{litext}</Link></li>
  )
}

export default MenuLi