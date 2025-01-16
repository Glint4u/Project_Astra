import React from 'react'
import Link from 'next/link'

const Policies = ({ content, link }) => {
    return (
        <Link href={link}>
            <div className='text-white flex items-center justify-center gap-[8px] md:gap-[10px]'>
                <div className='text-[10.5px] md:text-[12px] underline'>
                    {content}
                </div>
            </div>
        </Link>
    )
}

export default function Footer() {
    return (
        <div className='min-h-[50px] py-[20px] h-fit w-full bg-black'>
            <div className='text-[13px] text-white text-center mb-[5px]'>
                &copy; 2025 Project Astra. <Link href={"https://glint4u.tech"}>Developed by glint.</Link>
            </div>
            <div className='flex flex-col sm:flex-row gap-[8px] md:gap-[10px] items-center justify-center'>
                <div className='flex gap-[8px] md:gap-[10px]'>
                    <Policies content={"TERMS AND CONDITIONS"} link={"/terms-of-service"} />
                    <Policies content={"PRIVACY POLICY"} link={"/privacy-policy"} />
                </div>
                <div className='flex gap-[8px] md:gap-[10px]'>
                    <Policies content={"SHIPPING POLICY"} link={"/shipping-policy"} />
                    <Policies content={"REFUND POLICY"} link={"/refund-policy"} />
                </div>
            </div>
        </div>
    )
}
