import React from 'react'
import { featuredProducts } from '@/data'
import Image from 'next/image'

function ProductPage({ params }: { params: { id: string } }) {

  const {id} = params

  const item = featuredProducts.find((product) => product.id == id )

  console.log(item)

  return (

    <div className='h-[calc(100vh-4rem)] p-  md:h-fit bg-pink-50 flex flex-col justify-center items-center self-center'>
      {/* Wrapper */}
      
        <div className='flex-1  md:w-1/2'>
          <div className=' relative h-1/2 md:h-[57vh]'>
            <Image src={item?.img} fill className='object-contain hover:rotate-[15deg] transition-transform duration-700 '/>
          </div>

          <div className='flex flex-col text-center p-5 gap-3'>
            <h1 className='text-3xl font-bold text-red-400'>{item?.title}</h1>
            <div>
              <p className='text-2xl text-red-400 font-bold'>{item?.price.toLocaleString('en-US', {style: 'currency', 'currency' : 'USD'})}</p>
            </div>
            <p className='font-semibold'>{item?.desc}</p>
            <button className='btn bg-red-400'>Add to Cart</button>
          </div>
        </div>
        
      </div>

  )
}

export default ProductPage
