import React from 'react'
import Button from './Button'

export default function Hero() {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>

                <p>IT'S TIME TO GET A</p>
                <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Cyber<span className='text-blue-400'>pump</span></h1>
            </div>
            <p className='text-sm md:text-base font-light'>Are you ready to be fully immersed in the <span className='text-blue-400 font-medium'>future of fitness</span> and get ready to get that <span className='text-blue-400 font-medium'>CYBER PUMP!</span></p>
            <Button func={() => {
                window.location.href = '#generate'
            }} text={"Accept & Begin"}></Button>
        </div>
    )
}