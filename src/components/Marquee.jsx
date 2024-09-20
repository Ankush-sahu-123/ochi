import { motion } from "framer-motion";
import React from 'react';

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full mb-[-2vw] py-10  bg-[#004d43] rounded-t-3xl'>
      <div className='text text-white  border-t-[1px] border-b-[1px] border-[#4d837c] flex   whitespace-nowrap mt-[4.5vw] mb-[4.5vw] overflow-hidden'>
        <motion.h1 initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className='text text-[27vw] uppercase font-["Founders_Grotesk_X-Condensed"] font-semibold -mt-[5.7vw] -mb-[15.7vw] pr-20'>we are ochi</motion.h1>

        <motion.h1 initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className='text text-[27vw] uppercase font-["Founders_Grotesk_X-Condensed"] font-semibold -mt-[5.7vw] -mb-[15.7vw] pr-20'> we are ochi</motion.h1>

      </div>
    </div>
  )
}

export default Marquee