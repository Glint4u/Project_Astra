"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Page() {
    const { id } = useParams();
    const previous = id <= 1 ? id : id - 1
    const next = id > 10 ? id : id + 1

    return (
        <div className="bg-black min-h-screen h-fit pt-[150px] text-white">
            <div className='flex justify-between px-[2vw]'>
                <Link prefetch={true} className=' cursor-not-allowed ' href={`/product/${previous} `}>
                    <div className='flex items-center gap-[3px] text-white'>
                        <ChevronLeft />  Back
                    </div>
                </Link>
                <Link prefetch={true} href={`/product/${next}`}>
                    <div className='flex items-center gap-[3px] text-white'>
                        Next Product <ChevronRight />
                    </div>
                </Link>
            </div>
        </div>
    );
}
