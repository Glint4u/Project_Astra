import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function ProductCard({ data }) {
    return (
        <div className='text-white'>
            <Link href={"/products"}>
                <div className='bg-[#141414e1] h-[350px] sm:h-[400px] w-[250px] sm:w-[300px] flex items-center justify-center'>
                    <Image src={data.image} className='w-full' width={300} height={300} />
                </div>
                <div className=' min-h-[100px] h-fit py-[10px] text-[20px] font-bold text-center flex items-center justify-center gap-[10px] '>
                    {data.title} <ChevronRight />
                </div>
            </Link>
        </div>
    )
}
