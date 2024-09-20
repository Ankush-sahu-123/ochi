import React, {useEffect, useRef, useState} from 'react';

function Eyes() {
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
 

  return (
    <div className=' w-full h-screen overflow-hidden'>
    <div data-scroll data-scroll-speed="-.7" className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
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

export default Eyes