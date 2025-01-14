import React from 'react'
import Link from 'next/link'

const Policies = ({ content, link }) => {
    return (
        <Link href={link}>
            <div className='text-white flex items-center justify-center gap-[8px] md:gap-[10px]'>
                <div className='w-[4px] h-[4px] bg-white rounded-full'></div>
                <div className='text-[10.5px] md:text-[13px]'>
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
                    <Policies content={"Refund policy"} link={"/refund-policy"} />
                    <Policies content={"Privacy policy"} link={"/privacy-policy"} />
                </div>
                <div className='flex gap-[8px] md:gap-[10px]'>
                    <Policies content={"Terms of service"} link={"/terms-of-service"} />
                    <Policies content={"Shipping policy"} link={"/shipping-policy"} />
                </div>
            </div>
        </div>
    )
}
