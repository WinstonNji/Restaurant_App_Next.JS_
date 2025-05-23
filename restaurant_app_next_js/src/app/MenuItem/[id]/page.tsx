import React from 'react'
import { featuredProducts } from '@/data'
import Image from 'next/image'
import Price from '@/components/Price'
import AddtoCart from '@/components/AddtoCart'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'

type Props = {
  params: Promise<{
    id: string
  }>
}

async function ProductPage({ params }: Props) {
  // Await the params Promise
  const { id } = await params

  const item = featuredProducts.find((product) => product.id == Number(id))

  // Handle case where item is not found
  if (!item) {
    return (
      <div className='h-[calc(100vh-4rem)] bg-pink-50 flex flex-col justify-center items-center'>
        <h1 className='font-bold text-2xl'>Product not found</h1>
        <Link href="/" className='btn bg-red-400 mt-4'>
          Go back to home
        </Link>
      </div>
    )
  }

  return (
    <div className='h-[calc(100vh-4rem)] md:h-fit bg-pink-50 flex flex-col justify-center items-center self-center'>
      {/* Wrapper */}
      <div className='flex w-full flex-col md:flex-row h-[100vh] pr-3'>
        <div className='h-1/2 md:h-[calc(100vh-4rem)] w-full relative p-4'>
          <Image 
            className='object-contain p-5 hover:rotate-12 transition-transform duration-300' 
            alt={item.title} 
            fill 
            src={item.img || '/placeholder.png'}
          />
        </div>

        <div className='md:h-[calc(100vh-4rem)] md:flex md:flex-col md:items-center md:justify-center'>
          <h1 className='font-bold text-2xl md:text-3xl text-center'>{item.title}</h1>
          <p className='text-center p-2 font-semibold md:text-xl'>{item.desc}</p>
          <Price item={item.options} itemPrice={item.price} />
          <div className='flex justify-center items-center gap-3 mt-4'>
            <AddtoCart id={item.id} />
            <Link className='btn bg-red-400' href={`/OrderPage`}>
              View Cart <ShoppingCart />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage