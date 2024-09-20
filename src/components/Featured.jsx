import React from 'react'

function Featured() {
    return (
        <div className='w-full bg-[#f1f1f1] min-h-screen rounded-t-3xl'>
            <div className='px-16 text-[3.5vw] text-[#212121] font-["Neue_Montreal"] pt-[6vw] pb-9 border-b border-[#adadad] '>
                Featured projects
            </div>
            <div className='w-full pt-16 flex px-16 gap-6'>
                <div className='w-1/2 h-[75vh] '>
                    <div className='flex gap-2 pb-5'>
                        <div className='h-3 w-3 mt-2.5 bg-black rounded-full'></div>
                        <div className='uppercase text-[#212121] text-2xl font-["Neue_Montreal"]'>fyde</div>
                    </div>
                    <div className='w-full h-full rounded-3xl transition duration-500 delay-150 hover:scale-95 overflow-hidden'>
                        <div>
                            <img className='w-full h-full bg-cover  transition duration-500 delay-150 hover:scale-110' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" srcset="" />
                        </div>
                    </div>
                    <div className=' w-full  pt-10 flex gap-3'>
                        <div className='font-["Neue_Montreal"] text-xl text-[#212121] border-[1px] border-zinc-600 rounded-full px-4 py-1 uppercase'>audit</div>
                        <div className='font-["Neue_Montreal"] text-xl text-[#212121] border-[1px] border-zinc-600 rounded-full px-4 py-1 uppercase'>copywriting</div>
                        <div className='font-["Neue_Montreal"] text-xl text-[#212121] border-[1px] border-zinc-600 rounded-full px-4 py-1 uppercase'>sales deck</div>
                        <div className='font-["Neue_Montreal"] text-xl text-[#212121] border-[1px] border-zinc-600 rounded-full px-4 py-1 uppercase'>slides design</div>
                    </div>
                </div>
                <div className='w-1/2 h-[75vh] '>
                    <div className='flex gap-2 pb-5'>
                        <div className='h-3 w-3 mt-2.5 bg-black rounded-full'></div>
                        <div className='uppercase text-[#212121] text-2xl font-["Neue_Montreal"]'>vise</div>
                    </div>
                    <div className='w-full h-full rounded-3xl transition duration-500 delay-150 hover:scale-95 overflow-hidden'>
                        <div>
                            <img className='w-full h-full bg-cover  transition duration-500 delay-150 hover:scale-110' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" srcset="" />
                        </div>
                    </div>
                    <div className=' w-full  pt-10 flex gap-3'>
                        <div className='font-["Neue_Montreal"] text-xl text-[#212121] border-[1px] border-zinc-600 rounded-full px-4 py-1 uppercase'>agency</div>
                        <div className='font-["Neue_Montreal"] text-xl text-[#212121] border-[1px] border-zinc-600 rounded-full px-4 py-1 uppercase'>company presentation</div>
                    </div>
                </div>
            </div>
            <div className='w-full  pt-[10vw] bg-[#f1f1f1] flex px-16 gap-6'>
                <div className='w-1/2 h-[75vh] '>
                    <div className='flex gap-2 pb-5'>
                        <div className='h-3 w-3 mt-2.5 bg-black rounded-full'></div>
                        <div className='uppercase text-[#212121] text-2xl font-["Neue_Montreal"]'>trawa</div>
                    </div>
                    <div className='w-full h-full rounded-3xl transition duration-500 delay-150 hover:scale-95 overflow-hidden'>
                        <div>
                            <img className='w-full h-full bg-cover transition duration-500 delay-150 hover:scale-110' src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" alt="" srcset="" />
                        </div>
                    </div>
                    <div className=' w-full  pt-10 flex gap-3'>
                        <div className='font-["Neue_Montreal"] text-xl text-[#212121] border-[1px] border-zinc-600 rounded-full px-4 py-1 uppercase'>brand identity</div>
                        <div className='font-["Neue_Montreal"] text-xl text-[#212121] border-[1px] border-zinc-600 rounded-full px-4 py-1 uppercase'>design research</div>
                        <div className='font-["Neue_Montreal"] text-xl text-[#212121] border-[1px] border-zinc-600 rounded-full px-4 py-1 uppercase'>investor deck</div>
                    </div>
                </div>
                <div className='w-1/2 h-[75vh] '>
                    <div className='flex gap-2 pb-5'>
                        <div className='h-3 w-3 mt-2.5 bg-black rounded-full'></div>
                        <div className='uppercase text-[#212121] text-2xl font-["Neue_Montreal"]'>premium blend</div>
                    </div>
                    <div className='w-full h-full rounded-3xl transition duration-500 delay-150 hover:scale-95 overflow-hidden'>
                        <div>
                            <img className='w-full h-full bg-cover transition duration-500 delay-150 hover:scale-110' src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png" alt="" srcset="" />
                        </div>
                    </div>
                    <div className=' w-full  pt-10 flex gap-3'>
                        <div className='font-["Neue_Montreal"] text-xl text-[#212121] border-[1px] border-zinc-600 rounded-full px-4 py-1 uppercase'>blended template</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Featured