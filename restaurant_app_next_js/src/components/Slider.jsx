'use client'
import React from 'react'
import Image from 'next/image';

import { useEffect, useState } from 'react';

const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide3.jpg",
  }
];

function Slider() {

    const [currentSlide,setCurrentSlide] = useState(0)

    useEffect(() => {
        
        let interval = setInterval (() => {
            setCurrentSlide(prev => prev === data.length - 1 ? 0 : prev + 1)
            
        }, 4000)

        
    }, [])

  return (
    <div className=' h-[calc(100vh-3rem)]  p- flex flex-col md:flex-row '>
        <div className='flex-1 flex flex-col items-center justify-center border-t-2 border-t-red-400 p-4 z-2'>
            <h1 className='font-bold text-center text-3xl md:text-5xl text-red-400 uppercase'>
                {data[currentSlide].title}
            </h1>
            <button className='btn w-fit bg-red-400 mt-10'>Order Now</button>
        </div>
            
        <div className='w-full flex-1 relative'>
            <Image alt='' fill className='object-cover'  src={data[currentSlide].image} />
        </div>
    </div>
  )
}

export default Slider
