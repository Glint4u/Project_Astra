"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search, ShoppingCart, Menu } from 'lucide-react'
import { koulen } from '@/app/fonts'

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <div className='fixed w-full top-0 home-bg'>
      {/* <div className='bg-[#ff ffff39] backdrop-blur-[10px] h-[35px] flex items-center justify-center text-white text-[12px] '>
        NEW DROP IS LIVE!
      </div> */}
      <div className={`relative ${koulen.className} ${navOpen ? "h-[290px] " : "h-[100px]"} md:h-[120px] transition-all duration-500 overflow-hidden bg-[#00000057] backdrop-blur-[10px] md:flex items-center justify-center md:px-[3vw]`}>
        <div className=' h-[100px] md:h-[120px] flex justify-center items-center'>

          <div className='flex items-center absolute left-[10px] sm:left-[30px]'>
            <Link href={"/"}>
              <Image alt='Project Astra Logo' src={"/AstraLogo.png"} className='w-[150px] md:w-[180px]' width={180} height={180} />
            </Link>
          </div>

          <div>
            <ul className=' hidden md:flex items-center justify-center gap-[3vw] text-white text-[20px] tracking-[1px]'>
              <li onClick={() => { setNavOpen(false) }}>
                <Link href={"/"}>
                  SHOP
                </Link>
              </li>
              <li onClick={() => { setNavOpen(false) }}>
                <Link href={"our-story"}>
                  OUR STORY
                </Link>
              </li>
              <li onClick={() => { setNavOpen(false) }}>
                <Link href={"/customer-support"}>
                  SUPPORT
                </Link>
              </li>
              <li onClick={() => { setNavOpen(false) }}>
                <Link href={"reviews"}>
                  REVIEWS
                </Link>
              </li>
            </ul>
          </div>
          <div className=' absolute right-[10px] sm:right-[30px] flex items-center justify-center gap-[15px] md:gap-[2vw] '>
            {/* <div className='w-[180px] h-[40px] bg-[#d9d9d938] focus:border-[1px] focus:border-black rounded-full flex items-center justify-between pl-[10px] '>
            <div className='w-[20px]'>
            <Search color='#ffffff23' />
            </div>
            <input className='w-[80%] h-full bg-transparent rounded-r-full outline-none text-black ' placeholder='SEARCH' type="text" />
            </div> */}
            <div className='relative cursor-pointer w-[40px] h-[40px] flex justify-center items-center bg-[#d9d9d938] rounded-full'>
              <Link href={"/cart"}>
                <ShoppingCart color='#ffffff' />
                <div className='absolute top-[0px] right-[2px] w-[12px] h-[12px] rounded-full bg-white text-[9px] flex items-center justify-center '>1</div>
              </Link>
            </div>
            <div className={`flex md:hidden z-[1000]  cursor-pointer transition-half-second gap-[6px] flex-col bg-[#d9d9d938] w-[40px] h-[40px] rounded-full items-center justify-center`} onClick={() => { setNavOpen(!navOpen) }} >
              <span className={` transition-all duration-300 flex w-[22px] h-[2px] bg-white trans ${navOpen ? " origin-top-left translate-x-[4px] rotate-[45deg] " : ""}  `}></span>
              <span className={` transition-all duration-300  ${navOpen ? "opacity-0" : "opacity-100"} trans flex w-[22px] h-[2px] bg-white`}></span>
              <span className={` transition-all duration-300 flex w-[22px] h-[2px] bg-white trans ${navOpen ? " origin-bottom-left translate-x-[4px] -rotate-[45deg] " : ""} `}></span>
            </div>
          </div>
        </div>

        <div className='w-full flex md:hidden'>
          <ul className=' flex flex-col md:hidden items-center justify-center gap-[20px] text-white min-h-[100px] h-fit w-full text-[20px] tracking-[1px]'>
            <li onClick={() => { setNavOpen(false) }}>
              <Link href={"/"}>
                SHOP
              </Link>
            </li>
            <li onClick={() => { setNavOpen(false) }}>
              <Link href={"our-story"}>
                OUR STORY
              </Link>
            </li>
            <li onClick={() => { setNavOpen(false) }}>
              <Link href={"/customer-support"}>
                SUPPORT
              </Link>
            </li>
            <li onClick={() => { setNavOpen(false) }}>
              <Link href={"reviews"}>
                REVIEWS
              </Link>
            </li>
          </ul>
        </div>

      </div>

    </div>
  )
}
