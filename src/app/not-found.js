import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { koulen } from './fonts'

export default function NotFound() {
  return (
    <div className='w-screen h-screen overflow-y-scroll bg-black fixed z-[100]'>

      <div className={` ${koulen.className} w-[70%] m-auto h-full flex flex-col md:flex-row items-center justify-start `}>
        <Image src={"/NotFound.svg"} width={100} height={100} className='w-[100%] max-w-[500px]' />
        <div className='flex flex-col gap-[30px] w-[70%] items-center'>
          <div className='text-white text-[100px] leading-[70px]'>00ps!</div>
          <div className='text-[#a4a4a4] text-[18px] text-center'>
            Lost in style? Let's get you back on trend!
          </div>
          <Link href={"/"} >
            <div className='bg-white text-black w-[200px] h-[40px] flex items-center justify-center text-[25px] '>
              Go back
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
