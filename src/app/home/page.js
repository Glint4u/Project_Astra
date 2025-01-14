'use client';
import React, { useEffect, useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { koulen } from '../fonts';

export default function Page() {
    const [screenWidth, setScreenWidth] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fadeIn, setFadeIn] = useState(true); // Track which background is fading in

    useEffect(() => {
        const updateWidth = () => setScreenWidth(window.innerWidth);
        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    const ImagesDesktop = [
        "url('/LockUpBgDesktop.png')",
        "url('/LockUpBgDesktop.png')",
        "url('/LockUpBgDesktop.png')",
    ];
    const ImagesMobile = [
        "url('/LockUpBgMobile.jpg')",
        "url('/LockUpBgMobile.jpg')",
        "url('/LockUpBgMobile.jpg')",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setFadeIn((prev) => !prev); // Toggle fade
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % ImagesDesktop.length);
            }, 500); // Wait for fade-out before switching image
        }, 5000); // Change image every 5 seconds
        return () => clearInterval(interval);
    }, [ImagesDesktop.length]);

    const currentBackgroundImage =
        screenWidth > 700 ? ImagesDesktop[currentImageIndex] : ImagesMobile[currentImageIndex];

    const Products = [
        { image: "/Product1.png", title: "T-SHIRT" },
        { image: "/Product2.png", title: "T-SHIRT" },
        { image: "/Product3.png", title: "T-SHIRT" },
        { image: "/Product2.png", title: "T-SHIRT" },
        { image: "/Product3.png", title: "T-SHIRT" },
        { image: "/Product1.png", title: "T-SHIRT" },
        { image: "/Product2.png", title: "T-SHIRT" },
        { image: "/Product3.png", title: "T-SHIRT" },
        { image: "/Product1.png", title: "T-SHIRT" },
    ];

    return (
        <>
            <style jsx>{`
                .background-layer {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: -1;
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                    transition: opacity 1s ease-in-out;
                }
            `}</style>
            <div className="overflow-hidden ">
                {/* Background Layers */}
                <div
                    className="background-layer bg-black"
                    style={{
                        backgroundImage: currentBackgroundImage,
                        opacity: fadeIn ? 1 : 0,
                    }}
                ></div>
                <div
                    className="background-layer bg-black"
                    style={{
                        backgroundImage: currentBackgroundImage,
                        opacity: fadeIn ? 0 : 1,
                    }}
                ></div>

                {/* Content */}
                <div className="w-screen h-fit min-h-screen bg-transparent flex flex-col items-center justify-center">
                    <div
                        className={`pt-[130px] md:pt-[150px] ${koulen.className} text-shadow text-white flex items-center justify-center text-[70px] leading-[80px] sm:text-[120px] sm:leading-[130px] md:text-[150px] md:leading-[160px] flex-col`}
                    >
                        <div>FOR THE</div>
                        <div>AMBITIOUS</div>
                    </div>
                    <div className="text-white text-[20px] md:text-[30px] font-medium tracking-[2px]">
                        NEW DROP IS LIVE!
                    </div>
                </div>

                <div className="bg-black min-h-[500px] h-fit py-[50px] w-full">
                    <div className="w-[90%] m-auto text-white text-[30px] md:text-[40px] font-semibold mb-[30px]">
                        PRODUCTS
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center justify-center w-[90%] gap-[30px] m-auto">
                        {Products.map((item, index) =>
                            index < 6 ? <ProductCard key={index} data={item} /> : null
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
