import React from 'react'
import Link from 'next/link'
import { koulen } from '@/app/fonts'

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
    return (
        // <div className='min-h-[50px] py-[20px] h-fit w-full bg-black'>
        //     <div className='text-[13px] text-white text-center mb-[5px]'>
        //         &copy; 2025 Project Astra. <Link href={"https://glint4u.tech"}>Developed by glint.</Link>
        //     </div>
        //     <div className='px-[10px] flex flex-row flex-wrap gap-[8px] md:gap-[10px] items-center justify-center'>
        //             <Policies content={"TERMS AND CONDITIONS"} link={"/terms-and-conditions"} />
        //             <Policies content={"PRIVACY POLICY"} link={"/privacy-policy"} />
        //             <Policies content={"SHIPPING AND REFUND POLICY"} link={"/shipping-and-refund-policy"} />
        //     </div>
        // </div>
        <div className='w-full gap-[10px] px-[10px] md:px-[30px] min-h-[150px] h-fit py-[20px] bg-black border-t-[2px] border-[#6c6c6c4f] flex flex-col footer:flex-row items-center justify-between flex-wrap'>
            <div className='flex flex-col justify-center items-center gap-[10px]'>
                <form action="" className='flex '>
                    <input type="text" className='subscribe w-[150px] md:w-[200px] h-[40px] md:h-[50px] bg-[#ffffff2f] pl-[15px]' placeholder='EMAIL' />
                    <button className=' w-[100px] md:w-[120px] text-[16px] md:text-[18px] bg-white h-[40px]  md:h-[50px]'>SUBSCRIBE</button>
                </form>
                <div className='text-[#ffffff4d] text-center text-[13px]'>
                    Get exclusive access and updates of our next drop
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
