import React from 'react'

export default function Loading({screen="screen"}) {
    return (
        <div className={`flex w-full justify-center items-center ${screen === "screen" ? 'fixed h-screen' : 'h-full'}  top-0 z-[100000000] bg-black`}>
            <div className={`animate-loading ${screen === "screen" ? ' w-[150px] md:w-[250px]' : 'w-[100px] md:w-[150px]'} flex items-center justify-center text-center`}>
                <img src="/AstraLogo.png" alt="" />
            </div>
        </div>
    )
}
