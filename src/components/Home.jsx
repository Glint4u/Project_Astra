'use client';
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { koulen } from '../app/fonts';
import getAllProducts from '@/app/config/service/productService';
import Loading from './Loading';


export default function HomePage() {
    const [screenWidth, setScreenWidth] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fadeIn, setFadeIn] = useState(true);
    const [data, setData] = useState([])


    const getProducts = async () => {
        const response = await getAllProducts();
        let temp_data = []
        for (let i = 0; i < response.length; i++) {
            let id = response[i].id.split("/")
            id = id[id.length - 1]
            let temp = {
                raw_id: response[i].id,
                id: id,
                title: response[i].title,
                price: response[i].priceRange.minVariantPrice.amount,
                image: response[i].images.edges.length > 0 ? response[i].images.edges[0].node.transformedSrc : null
            }
            temp_data.push(temp)
        }
        setData(temp_data)
        console.log(response)
    }



    useEffect(() => {
        getProducts()
    }, [data])

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
        // "url('/LockUpBgDesktop.png')",
    ];
    const ImagesMobile = [
        "url('/LockUpBgMobile.jpg')",
        "url('/2.jpg')",
        "url('/3.jpg')",
        "url('/4.jpg')",
    ];

    const getImagesArray = () =>
        screenWidth > 700 ? ImagesDesktop : ImagesMobile;

    useEffect(() => {
        const interval = setInterval(() => {
            setFadeIn((prev) => !prev);
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => {
                    const imagesArray = getImagesArray();
                    return (prevIndex + 1) % imagesArray.length;
                });
            }, 500);
        }, 5000);

        return () => clearInterval(interval);
    }, [screenWidth]);

    const currentBackgroundImage = getImagesArray()[currentImageIndex];

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
            <div className="overflow-hidden bg-[#00000083] ">
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

                <div className="w-screen h-fit min-h-screen bg-transparent flex flex-col items-center justify-center">
                    <div
                        className={`pt-[130px] md:pt-[150px] ${koulen.className} font-extrabold text-shadow text-white flex items-center justify-center text-[70px] leading-[80px] sm:text-[120px] sm:leading-[130px] md:text-[150px] md:leading-[160px] flex-col`}
                    >
                        <div>FOR THE</div>
                        <div>AMBITIOUS</div>
                    </div>
                    <div className=' w-[320px] md:w-[700px] mx-auto h-[6px] bg-white'></div>
                    <div className="text-white text-center text-[16px] md:text-[30px] font-extrabold tracking-[2px] mt-[10px]">
                        <i>OUR NEW COLLECTION IS HERE</i>
                    </div>
                </div>

                <div className="bg-black min-h-[500px] h-fit pb-[100px] pt-[50px] w-full">
                    <div className="w-[90%] m-auto text-white text-[30px] md:text-[40px] font-semibold mb-[30px]">
                        PRODUCTS
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-3 place-content-between flex-wrap min-h-[300px] w-[90%] gap-[30px] m-auto">
                        {
                            data ?
                                data.map((item, index) => (
                                    <ProductCard key={item.id} data={item} />
                                ))
                                :
                                <Loading screen='full' />
                        }
                    </div>
                </div>
            </div>
        </>
    );
}
