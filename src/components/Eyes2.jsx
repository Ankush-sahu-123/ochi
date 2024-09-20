import React, {useEffect, useRef, useState} from 'react';

function Eyes2() {
  const[rotate2, setRotate] = useState(0);

  
  useEffect(()=>{
    window.addEventListener("mousemove",(e)=>{
      let mouseX=e.clientX;
      let mouseY=e.clientY;

      let deltaX=mouseX - window.innerWidth/2;
      let deltaY=mouseY - window.innerHeight/2;

      var angle= Math.atan2(deltaY , deltaX) * (180/Math.PI);
      setRotate(angle-180);
    })
  }) 
 1

  return (
    <div className=' w-full h-screen'>
    <div className='relative w-full h-full bg-[#cdea68]'>
        <div className='pt-48 w-full h-screen font-["Founders_Grotesk_X-Condensed"] leading-[11vw] text-[#212121] text-[15vw] font-semibold uppercase text-center'>ready <br/> to start <br/> the project?</div>
      <div className='absolute flex top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  gap-[2.5vw]'>
        <div className='w-[14vw] h-[14vw] rounded-full bg-white flex justify-center items-center'>
          <div className='w-[8vw] h-[8vw] flex justify-center items-center rounded-full bg-[#212121]'>
            <div style={{transform: ` rotate(${rotate2}deg)`}}   className='line  w-[96%] h-10'>
              <div className='w-[1.5vw] h-[1.5vw] rounded-full bg-[#fff]'>
              </div>
            </div>
          </div>
        </div>

        <div className='w-[14vw] h-[14vw] rounded-full bg-white flex justify-center items-center'>
          <div className='w-[8vw] h-[8vw] flex justify-center items-center rounded-full bg-[#212121]'>
            <div style={{transform: `rotate(${rotate2}deg)`}} className='line w-[96%] h-10'>
              <div className='w-[1.5vw] h-[1.5vw] rounded-full bg-[#fff]'>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Eyes2