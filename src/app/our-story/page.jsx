import React from 'react'
import backimage from "../../../public/bgPhoto.png"
import Image from 'next/image'

function page() {
  return (
    <>
       <div className='main-container flex items-center justify-center w-full h-full max-h-fit bg-black '>
            <div className='sub-main-conatiner flex flex-col items-center w-full'>
                {/* <div className='backimage'>
                    <Image className='w-auto h-full' src={backimage} alt=""/>
                </div> */}
                <div className='bgPhoto h-[400px] md:min-h-screen'></div>

                <div className='bg-gradient-to-br from-[#272727] from-1% via-[#070707] via-20% to-black to-99%'>
                <div className='strip flex flex-col gap-y-[20px] text-white p-[100px] max-md:p-[50px] max-sm:p-[20px]'>
                    <h1 className='text-[50px] max-md:text-[30px] max-lg:text-[35px]'>OUR STORY</h1>
                    <p className='text-[22px] max-md:text-[15px] max-lg:text-[18px]'>Project Astra is a premium streetwear clothing brand founded in Ahmedabad by four friends with an intention of redefining the streetwear fashion landscape in India.Project Astra lets each product narrate a tale of craftsmanship and innovation with quality and authenticity being the driving factors. Each product is done by hand and each detail, through design, portrays a deeper meaning which is derived from the strong visual language seen in the original graphics, vibrant colors and bold prints.</p>
                    <p className='text-[22px] max-md:text-[15px] max-lg:text-[18px]'>Focusing on one of one-of-a-kind designs, Project Astra aims to provide a sense of exclusiveness within the clothing community that goes beyond art and becomes an extension of the wearer's identity and self expression.</p>
                </div>
                </div>
            </div>
       </div>
    </>
  )
}

export default page