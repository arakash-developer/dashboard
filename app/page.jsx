import React from 'react'
import Profile from '@/public/Profile.jpg'
import Image from 'next/image'
import MenuLi from './component/MenuLi'
import Girl from '@/public/girl.jpg'
import Girl2 from '@/public/girl2.jpg'
import Boy from '@/public/men.jpg'
import Stats from '@/public/Stats.png'
import { FaPlus } from "react-icons/fa";


const page = () => {
  return (
    <div className='w-full h-[100vh] flex justify-center items-center'>
      <div className="flex rounded-[30px] w-[90.00rem] h-[56.25rem] bg-[#101010] pl-[80px] py-5 pr-5 text-[#fff]">
        <div className="mt-[60px] mr-[84px]">
          <div className="w-16 h-16 relative">
            <div className="rounded-lg overflow-hidden">
              <Image src={Profile} alt={Profile} />
            </div>
            <div className="w-[29px] h-[29px] flex justify-center items-center absolute -right-[15px] z-[999] -top-[15px] rounded-full bg-[#DC3434]">
              <p className='font-semibold text-[0.81rem] text-[#fff]'>1</p>
            </div>
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
        <div className="w-[1060px] h-[860px] rounded-[30px] overflow-hidden flex justify-between bg-[#FFFFFF]">
          <div className="left py-[60px] px-[100px]">
            <div className="flex justify-between items-start">
              <div className="">
                <h1 className='font-semibold text-[2.50rem] leading-[32px] text-[#262a41]'>Expenses</h1>
                <p className='font-normal mt-2 text-base text-[#101010] opacity-50'>01 - 25 March, 2020</p>
              </div>
              <div className="flex gap-x-2 items-start">
                <div className="w-[87px] flex items-start relative">
                  <div className="w-[31px] h-[31px] rounded-full overflow-hidden absolute left-0 top-0 border-[3px] border-[#fff] box-content z-50">
                    <Image className='w-[32px] h-full object-cover' src={Girl2} alt={Girl2} />
                  </div>
                  <div className="w-[31px] h-[31px] rounded-full overflow-hidden absolute left-[25px] top-0 border-[3px] border-[#fff] box-content z-40">
                    <Image className='w-full h-full object-cover' src={Boy} alt={Boy} />
                  </div>
                  <div className="w-[31px] h-[31px] rounded-full overflow-hidden absolute left-[50px] top-0">
                    <Image className='w-full h-full object-cover' src={Girl} alt={Girl} />
                  </div>
                </div>
                <div className="rounded-full w-[28px] h-[28px] border-[3px] border-[#d2dce8] flex justify-center items-center">
                  <FaPlus className='text-[#d2dce8] inline-block'/>
                </div>
              </div>
            </div>
            <div className="w-full mt-[46px]">
              <Image src={Stats} alt={Stats} />
            </div>
            <div className="mt-[47px]">
                <h2 className='font-normal text-lg leading-[167%] text-[#262a41] border-b-2 border-[#dedede] pb-2'>Today</h2>
            </div>
          </div>
          <div className="right w-[350px] bg-[#F9FAFC] pt-[76px] pb-[60px] px-[50px]">
          </div>
        </div>
      </div>
    </div>
  )
}

export default page