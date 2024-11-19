import Link from 'next/link'
import React from 'react'

const MenuLi = ({className,litext,highlight}) => {
  return (
    <li className={`font-semibold list-none text-[25px] leading-[159%] text-[#fff] ${highlight?highlight:"opacity-50"}`}><Link href='#'>{litext}</Link></li>
  )
}

export default MenuLi