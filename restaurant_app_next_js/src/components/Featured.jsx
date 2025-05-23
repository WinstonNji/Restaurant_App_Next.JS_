import React from 'react'
import {featuredProducts} from "../data"
import Image from 'next/image'
import Link from 'next/link'
import AddtoCart from '@/components/AddtoCart'

function Featured() {

  console.log('featured displaying')

  return (
    <div className='overflow-x-scroll h-[70vh] md:h-[90vh] w-full mt-10 overflow-y-hidden flex gap-5 px-4'> 
        {/* Single Product */}
        {featuredProducts.map((item) => (
            <div key={item.id} className='flex flex-col items-center justify-center text-center h-full p-4 border-box min-w-[80vw] md:min-w-[30vw] transition-colors duration-500 hover:bg-red-200'>
                {/* Image  Div */}
                <div className='w-full flex-1 relative '>
                    <Image alt='' src={item.img} className='object-contain hover:rotate-[30deg] transition-all duration-500 ' fill />
                </div> 

                <div className='flex flex-col gap-2 box-border'>

                    <p className='font-bold text-2xl'>{item.title}</p>

                    {/* Description */}
                    <p>{item.desc}</p>

                    <p className='font-semibold text-2xl'>{item.price.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</p>
                </div>

                {/* Price */}
                <div className='w-full justify-center flex gap-3 px-4 mt-5 '>

                    <AddtoCart id={item.id} />
                    <Link
                      href={`/MenuItem/${item.id}`}
                    >
                      <button className='btn active:bg-red-600 bg-red-400'>View</button>
                    </Link>
                </div>
            </div>
        ))}
        
    </div>
  )
}

export default Featured
