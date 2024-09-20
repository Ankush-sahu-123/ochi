import { motion } from 'framer-motion'
import React from 'react'

function Landingpage() {
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.5" className='w-full h-screen bg-[#f1f1f1] pt-1 text-[#212121] '>
            <div className='text-structure mt-56 px-20 mb-[6vw]'>
                {["we create", "Eye-opening", "presentations"].map((item, index) => {
                    return(
                    <div className='masker '>
                        <div className='flex '>
                            {index===1 && (<motion.div initial={{width:0}} animate={{width:"10vw"}} transition={{ease:[0.76, 0, 0.24, 1], duration:1}}><img className='w-[9vw] h-[5.4vw]  mt-[-0.95vw] rounded-md mr-5' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" srcset="" /></motion.div>)}
                        <h1 className='text-[8.5vw] uppercase leading-[6.6vw] font-["Founders_Grotesk_X-Condensed"] font-semibold'>{item}</h1>
                        </div>
                    </div>
                )})}
            </div>
            <div className='border-t-[1px] border-zinc-400 flex justify-between items-center py-5 px-20 font-["Neue_Montreal"] '>
                {["For public and private companies", "From the first pitch of IPO"].map((item, index) => (
                    <p className='text-black font-light text-xl'>{item}</p>
                ))}
                <div>
                    <div className='flex'>
                        <div className='uppercase text-black font-light text-lg border-[1px] rounded-full border-zinc-950 px-4 py-1 mr-2'>start the project</div>
                        <div className='w-10 h-10 flex items-center justify-center rounded-full border-[1px] border-zinc-950'>
                               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30" height="30" color="#000" fill="none">
                                <path d="M17 7L6 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M11 6.13151C11 6.13151 16.6335 5.65662 17.4885 6.51153C18.3434 7.36645 17.8684 13 17.8684 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                 </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landingpage