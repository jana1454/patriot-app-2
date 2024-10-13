import React from 'react'
import Button from './Button'

export default function Hero() {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>
            <i className="fa-solid fa-dumbbell fa-bounce fa-5x"></i>

                <p>IT'S TIME TO GET A</p>
                <h1 className='uppercase font-semibold text-5xl sm:text-5xl md:text-7xl lg:text-8xl'>Cyber<span className='text-purple-300'>pump</span></h1>
            </div>
            <p className='text-sm md:text-base font-light'>Are you ready to be fully immersed in the <span className='text-[#ff007f] font-medium'>future of fitness</span> and get ready to get that <span className='text-[#ff007f] font-medium'>CYBER PUMP!</span></p>
            <Button func={() => {
                window.location.href = '#generate'
            }} text={"Accept & Begin"}></Button>
        </div>
    )
}