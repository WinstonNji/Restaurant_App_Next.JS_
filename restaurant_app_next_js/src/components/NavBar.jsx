'use client'
import React from 'react'
import { MenuIcon } from 'lucide-react'
import { useState } from 'react'
import { X } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Cart from './Cart'

function navBar() {
  const [clicked, setClicked] = useState(false)

  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link 
            className="font-bold text-red-400 text-2xl sm:text-3xl hover:text-red-500 transition-colors duration-200" 
            href="/"
          >
            MASSIMO
          </Link>
          
          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-red-400 font-medium transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-red-50"
            >
              Homepage
            </Link>
            <Link 
              href="/login" 
              className="text-gray-700 hover:text-red-400 font-medium transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-red-50"
            >
              Login
            </Link>
            <Cart setClicked={setClicked} />
          </nav>

          {/* Mobile Menu Button and Cart */}
          <div className="md:hidden flex items-center space-x-3">
            <Cart setClicked={setClicked} />
            
            <button 
              onClick={() => setClicked(!clicked)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {clicked ? (
                <X color="#ef4444" className="w-6 h-6" />
              ) : (
                <MenuIcon color="#ef4444" className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {clicked && (
        <div className="md:hidden absolute top-8 left-0 right-0 mt-10 h-screen z-10">
          <ul className="bg-red-400 h-[90vh] box-border p-36 flex flex-col items-center justify-around text-center font-bold text-white text-2xl">
            <li className="cursor-pointer" onClick={() => setClicked(false)}>
              Homepage
            </li>
            <li className="cursor-pointer" onClick={() => setClicked(false)}>
              Login
            </li>
            {/* <Cart clicked={clicked} setClicked={setClicked} /> */}
          </ul>
        </div>
      )}
    </div>
  )
}

export default navBar