import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function ProductCard({ data }) {
    return (
        <div className='text-white'>
            <Link href={`/product/${data.id}`} className='flex flex-col items-center justify-center'>
                <div className='bg-[#141414e1] overflow-y-hidden h-fit min-h-[100px] sm:min-h-[200px] sm:max-h-[350px] w-[150px] sm:w-[300px] flex items-center justify-center'>
                    <Image alt={data.title} src={data.image} className='w-full' width={300} height={300} />
                </div>
                <div className='flex-col min-h-[100px] h-fit py-[10px] text-[15px] md:text-[20px] font-bold text-center flex items-center justify-center '>
                    <div>
                        {data.title}
                    </div>
                    <div className='font-thin'>
                        ₹ {data.price}
                    </div>

                </div>

            </Link>
        </div>
    )
}
