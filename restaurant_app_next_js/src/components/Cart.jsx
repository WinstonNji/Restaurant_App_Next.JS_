'use client'
import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import { ShoppingBag  } from 'lucide-react'
import Link from 'next/link'
import { CartContext } from './CartContext'

export default function Cart({setClicked}) {

    const {foodCart} = useContext(CartContext)

  return (
    <Link href={'/OrderPage'} className='flex items-center gap-1 relative  p-4 hover:cursor-pointer hover:bg-red-100 hover:text-red-400 rounded-2xl hover:font-semibold transition-all duration-300' onClick={() => setClicked(false)}>
      Cart <ShoppingBag />
      <span className='absolute right-1 top-3 text-[18px]'>{foodCart.length}</span>
    </Link>
  )
}


