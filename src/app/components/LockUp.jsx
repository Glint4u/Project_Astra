"use client";
import React, { useState, useEffect } from 'react'


export default function LockUp() {
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")


    return (
        <div className='w-screen h-screen lockup-bg flex flex-col items-center justify-center'>
            <form action="" className='flex flex-col items-center justify-center w-[90%] sm:w-[70%] md:w-[500px] gap-[30px] '>
                <div className='flex flex-col items-center gap-[15px] w-full'>
                    <input required className='input placeholder:text-white' type="email" placeholder='EMAIL' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    <input required className='input placeholder:text-white' type="tel" placeholder='PHONE NO' value={number} onChange={(e) => { setNumber(e.target.number) }} />
                </div>
                <button className='bg-[#FFFDFD] text-black w-[90%] h-[65px] font-semibold text-[20px] ' type='submit'>NOTIFY ME</button>
            </form>
        </div>
    )
}
