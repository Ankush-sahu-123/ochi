import gsap, { Power2, Power4, ScrollTrigger } from "gsap/all";
import React from 'react';

function About() {
  return (

    <div className='w-full mt-[-10vh] pt-36 py-9 bg-[#cdea68] rounded-3xl'>
      <h1 className='text-[3.6vw] font-["Neue_Montreal"] px-[4vw]  pr-[15vw] pb-14 leading-none'>Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
      <div className='border-t-[1px] border-[#98ac52] flex justify-between px-16 py-7'>
        <div>
          <h1 className='text-[3.8vw]  tracking-tight font-["Neue_Montreal"]'>Our approach:</h1>
          <button className='uppercase bg-black text-white px-7 py-5 rounded-full text-2xl'>Read more</button>
        </div>
        <div className='w-[50%] h-[33vw] '>
          <img className='h-[100%] w-full rounded-2xl' src='https://images.unsplash.com/photo-1707343843437-caacff5cfa74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D'></img>
        </div>
      </div>
    </div>
  )
}

export default About