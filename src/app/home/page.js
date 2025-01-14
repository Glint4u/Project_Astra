'use client'
import React, { useEffect, useState } from 'react'
import ProductCard from '@/components/ProductCard';
import { koulen } from '../fonts';

export default function Page() {
    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        const updateWidth = () => setScreenWidth(window.innerWidth);
        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    const ImagesDesktop = [
        "url('/LockUpBgDesktop.png')",
    ]
    const ImagesMobile = [
        "url('/LockUpBgMobile.jpg')",
    ]

    const Products = [
        {
            image: "/Product1.png",
            title: "T-SHIRT"
        },
        {
            image: "/Product2.png",
            title: "T-SHIRT"
        },
        {
            image: "/Product3.png",
            title: "T-SHIRT"
        },
        {
            image: "/Product2.png",
            title: "T-SHIRT"
        },
        {
            image: "/Product3.png",
            title: "T-SHIRT"
        },
        {
            image: "/Product1.png",
            title: "T-SHIRT"
        },
        {
            image: "/Product2.png",
            title: "T-SHIRT"
        },
        {
            image: "/Product3.png",
            title: "T-SHIRT"
        },
        {
            image: "/Product1.png",
            title: "T-SHIRT"
        },
    ]

    return (
        <>
            <div className='overflow-hidden'>

                <div className={`w-screen h-fit min-h-screen bg-black flex flex-col items-center justify-center `}
                    style={
                        screenWidth > 700 ?
                            {
                                backgroundImage: ImagesDesktop[0],
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center"
                            } :
                            {
                                backgroundImage: ImagesMobile[0],
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center"
                            }
                    }
                >
                    <div className={`pt-[130px] md:pt-[150px] ${koulen.className} text-shadow text-white flex items-center justify-center text-[70px] leading-[80px]  sm:text-[120px] sm:leading-[130px] md:text-[150px] md:leading-[160px] flex-col`}>
                        <div>
                            FOR THE
                        </div>
                        <div>
                            AMBITIOUS
                        </div>
                    </div>
                    <div className='text-white text-[20px] md:text-[30px] font-medium tracking-[2px]'>
                        NEW DROP IS LIVE!
                    </div>
                </div>

                <div className='bg-black min-h-[500px] h-fit py-[50px] w-full'>
                    <div className=' w-[90%] m-auto text-white text-[30px] md:text-[40px] font-semibold mb-[30px]'>
                        PRODUCTS
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center justify-center w-[90%] gap-[30px] m-auto '>
                        {
                            Products.map((item, index) => (
                                index < 6 ?
                                <ProductCard key={index} data={item} />
                                :
                                null

                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}
