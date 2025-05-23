'use client'
import React from 'react'
import { MenuIcon } from 'lucide-react'
import { useState } from 'react'
import { X } from 'lucide-react'

function navBar() {

const [clicked,setClicked] = useState(false)

  return (
    <div className='flex justify-between p-2.5 relative'>
        <div className='font-bold text-[#ef4444] text-2xl'>MASSIMO</div>
        
        {clicked ? <X color='#ef4444'  onClick={() => setClicked(false)} className='cursor-pointer'/>   : <MenuIcon onClick={() => setClicked(true)} className='cursor-pointer' color='#ef4444' />}

        {clicked && <div className='absolute left-0 right-0  mt-10 h-screen z-10'>
            <ul className='bg-red-400 h-[90vh] box-border p-36 flex flex-col items-center justify-around text-center font-bold text-white text-2xl '>
                <li className='cursor-pointer'>Homepage</li>
                <li className='cursor-pointer'>Menu</li>
                <li className='cursor-pointer'>Working Hours</li>
                <li className='cursor-pointer'>Contact</li>
                <li className='cursor-pointer'>Login</li>
            </ul>
        </div>}
    </div>
  )
}

export default navBar
