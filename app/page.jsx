import React from 'react'
import Profile from '@/public/Profile.jpg'
import Image from 'next/image'
import MenuLi from './component/MenuLi'

const page = () => {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center'>
      <div className="flex rounded-[30px] w-[90.00rem] h-[56.25rem] bg-[#101010] pl-[80px] py-5 pr-5 text-[#fff]">
        <div className="mt-[60px] mr-[84px]">
          <div className="w-16 h-16 bg-slate-300 rounded-lg overflow-hidden">
            <Image src={Profile} alt={Profile} />
          </div>
          <h1 className='mt-5 mb-1 font-semibold text-3xl leading-[117%] text-[#fff]'>Samantha</h1>
          <p className='font-normal text-[1.06rem] leading-[159%] text-[#fff] opacity-60'>samantha@email.com</p>
          <ul className="menu mt-[118px] flex flex-col gap-y-[30px]">
            <MenuLi litext='Dashboard' />
            <MenuLi highlight='opacity-1' litext='Expenses' />
            <MenuLi litext='Wallets' />
            <MenuLi litext='Summary' />
            <MenuLi litext='Accounts' />
            <MenuLi litext='Settings' />
          </ul>
        </div>
        <div className="w-[1060px] h-[860px] rounded-[30px] bg-white"></div>
      </div>
    </div>
  )
}

export default page