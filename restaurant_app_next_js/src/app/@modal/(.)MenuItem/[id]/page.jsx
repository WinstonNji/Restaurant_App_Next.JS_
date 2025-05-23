'use client'
import React, { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { featuredProducts } from '@/data'
import Image from 'next/image'
import { X } from 'lucide-react'
import Link from 'next/link'
import AddtoCart from '@/components/AddtoCart'

function Pages() {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [item, setItem] = useState([])
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [imgLoading, setImageLoading] = useState(false)

  useEffect(() => {
    try {
      setLoading(true)
      setImageLoading(true)

      // Save scroll position when modal opens
      const scrollY = window.scrollY
      localStorage.setItem('scrollPosition', scrollY.toString())

      // fetch item from ID
      let product = featuredProducts.find((product) => product.id == Number(id))
      setItem(product)

      // Close modal
      setOpen(true)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
      
    }
  }, [id])



  const handleClose = () => {
    setOpen(false)
    router.back() // Navigate to homepage

    setTimeout(() => {
      const scroll = localStorage.getItem('scrollPosition')
      if (scroll) {
        window.scrollTo({ top: parseInt(scroll, 10), behavior: 'smooth' }) // 👈 smooth scroll
        localStorage.removeItem('scrollPosition')
      }
    }, 100)
  }


  return (
    <>
      {loading && <div className='top-1/2 bg-red-400 -translate-y-1/2 fixed left-1/2 -translate-x-1/2 z-50 h-[95vh] md:max-h-[45rem] w-[90vw] md:w-[38rem] border-4 rounded-2xl  md:px-4'>Loading</div>}

      {!loading && item && open  && (
        // Wrapper
        <div className='top-1/2 bg-red-400 -translate-y-1/2 fixed left-1/2 -translate-x-1/2 z-50 h-[95vh] md:max-h-[45rem] w-[90vw] md:w-[38rem] border-4 rounded-2xl  md:px-4'>

          <div className='w-full h-full'>
            {/* Image */}
            <div className='w-full h-[60%] md:h-[65%] relative'>
              {imgLoading && (<div className={`${imgLoading ? 'opacity-100' : 'opacity-0'} transition-all duration-100 skeleton  h-[60%] w-full md:h-[65%]`}></div>) }
              
              
            <Image
              alt=''
              src={item.img}
              fill
              className={`object-contain hover:rotate-12 transition-all duration-500 p-4 ${imgLoading ? 'opacity-0' : 'opacity-100'}`}
              onLoad={() => setImageLoading(false)}
            />
              
              
              <div
                onClick={handleClose}
                className='z-40 p-2 absolute right-3 cursor-pointer'
              >
                <X className='text-white' size={30} />
              </div>
            </div>

            {/* Price and Title */}
            <div className='w-full flex flex-col items-center gap-4'>
              <h1 className='text-white text-3xl font-bold'>{item.title}</h1>
              <p className='px-2 text-center font-bold text-white text-shadow-2xs max-h-24 overflow-y-auto'>{item?.desc}</p>

              <h2 className='text-2xl font-bold text-white'>
                {item.price.toLocaleString('en-US', {
                  style: 'currency',
                  currency: 'USD',
                })}
              </h2>

              {/* Button */}
              <div className=' w-full flex justify-evenly '>
                <AddtoCart id={item.id} />
                <Link onClick={()=> 
                  {
                    window.location.href = window.location.href
                    setOpen(false)
                  }
                  } href={`/MenuItem/${item.id}`} className='btn active:bg-red-600 bg-red-400 md:text-xl'>
                  Edit {item.title}
                </Link>
              </div>
              
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Pages
