import React from 'react'
import {featuredProducts} from "../data"
import Image from 'next/image'
import Link from 'next/link'

function Featured() {

  return (
    <div className='overflow-x-scroll h-[70vh] md:h-[90vh] w-full mt-10 overflow-y-hidden flex gap-5 px-4'> 
        {/* Single Product */}
        {featuredProducts.map((pizza) => (
            <div key={pizza.id} className='flex flex-col items-center justify-center text-center h-full p-4 border-box min-w-[80vw] md:min-w-[30vw] transition-colors duration-500 hover:bg-red-200'>
                {/* Image  Div */}
                <div className='w-full flex-1 relative '>
                    <Image src={pizza.img} className='object-contain hover:rotate-[30deg] transition-all duration-500 ' fill />
                </div> 

                <div className='flex flex-col gap-2 box-border'>

                    <p className='font-bold text-2xl'>{pizza.title}</p>

                    {/* Description */}
                    <p>{pizza.desc}</p>

                    <p className='font-semibold text-2xl'>{pizza.price.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</p>
                </div>

                {/* Price */}
                <div className='w-full flex gap-3 px-4 mt-5 '>
                    <button className='btn bg-red-400 flex-1'>Add to Cart</button>
                    <Link className='flex-1' href={`/MenuItem/${pizza.id}`}><button className='btn bg-red-400'>View</button></Link>
                    
                </div>
            </div>
        ))}
        
    </div>
  )
}

export default Featured
