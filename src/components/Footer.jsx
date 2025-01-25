'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { toast } from 'react-hot-toast'
import { koulen } from '@/app/fonts'
import API_URLS from "../app/constants/api_urls"

const Policies = ({ content, link }) => {
    return (
        <Link href={link}>
            <div className='text-[#ffffff7e] flex items-center justify-center gap-[8px] md:gap-[10px]'>
                <div className='text-[10.5px] md:text-[12px] underline'>
                    {content}
                </div>
            </div>
        </Link>
    )
}

export default function Footer() {
    const [email, setEmail] = useState("")
    const submitSubscribe = async (e) => {
        e.preventDefault()

        const loadingToast = toast.loading("Subscribing...")

        try {
            const response = await fetch("/api/subscribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: email }),
            });

            const data = await response.json()
            if (response.ok) {
                toast.success("Successfully subscribed!", { id: loadingToast })
                setEmail("") // Clear input field on success
                return
            } else {
                toast.error(data.message || "Failed to subscribe. Try again.", { id: loadingToast })
            }
        } catch (error) {
            toast.error("Something went wrong. Please try again later.", { id: loadingToast })
        }
    }

    return (
        <div className='w-full gap-[10px] px-[10px] md:px-[30px] min-h-[150px] h-fit py-[20px] bg-black border-t-[2px] border-[#6c6c6c4f] flex flex-col footer:flex-row items-center justify-between flex-wrap'>
            <div className='flex flex-col justify-center items-center gap-[10px]'>
                <form action="" onSubmit={submitSubscribe} className='flex'>
                    <input 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        type="email" 
                        className='subscribe w-[150px] md:w-[200px] h-[40px] md:h-[40px] text-[14px] md:text-[16px] text-[#ffffff] outline-none bg-[#ffffff2f] pl-[15px]' 
                        placeholder='EMAIL' 
                        required
                    />
                    <button 
                        type='submit' 
                        className='w-[100px] md:w-[110px] text-[14px] md:text-[16px] bg-white h-[40px] md:h-[40px]'
                    >
                        SUBSCRIBE
                    </button>
                </form>
                <div className='text-[#ffffff4d] text-center text-[13px]'>
                    Get exclusive access and updates of our next drop.
                </div>
            </div>
            <div className='flex flex-col items-center footer:items-end gap-[10px]'>
                <div className='text-[#ffffff46]'>@2025 PROJECT ASTRA</div>
                <div>
                    <div className='flex flex-row flex-wrap gap-[8px] md:gap-[10px] items-center justify-center '>
                        <Policies content={"TERMS AND CONDITIONS"} link={"/terms-and-conditions"} />
                        <Policies content={"PRIVACY POLICY"} link={"/privacy-policy"} />
                        <Policies content={"SHIPPING AND REFUND POLICY"} link={"/shipping-and-refund-policy"} />
                    </div>
                </div>
            </div>
        </div>
    )
}
