import React from 'react'
import CountDown from '@/components/CountDown'
import Image from 'next/image'


function Offer() {
  return (
    <div className='h-screen bg-black text-white flex flex-col md:flex-row items-center'>

        <div className='flex flex-col items-center text-center flex-1 justify-center gap-4 md:p-6'> 
            <h1 className='text-5xl font-bold'>Delicious Burger & French Fry</h1>
            <p>Progressively simplify effective e-toilers and process-centric methods of empowerment. Quickly pontificate parallel.</p>
            <CountDown></CountDown>
            <button className='btn bg-red-400 text-xl mt-5'>Order Now</button>
        </div>
        

        <div className='w-full flex-1 relative bg-red-400 h-full'>
            <Image src='/offerProduct.png' fill className='object-contain'/>
        </div>
    </div>
  )
}

export default Offer
