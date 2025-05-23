'use client'
import React from 'react'
import { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()

function CartProvider({children}) {

    const [foodCart, setFoodCart] = useState(JSON.parse(localStorage.getItem('id') || '[2]'))
    //  const [foodCart, setFoodCart] = useState([])

    // useEffect(() => {
    //     let stored = JSON.parse(localStorage.getItem('id') || '[]')

    //     if(stored) setFoodCart(stored)
    // }, [])

    useEffect(() => {
        localStorage.setItem('id', JSON.stringify(foodCart)) 

        console.log(localStorage, 'changed Local')
        console.log(foodCart, 'foodCart')
    }, [foodCart])


    const addItem = (item) => {
        setFoodCart(prev => [...prev, item])
    }

    const removeItem = (id) => {
        const updatedCart = foodCart.filter((item) => item.itemId !== id)
        setFoodCart(updatedCart)
        // setFoodCart (prev => prev.filter((item) => item.itemId !== id))
    }

  return (
    <CartContext.Provider value={{foodCart, addItem, removeItem, setFoodCart}}>
        {children}
    </ CartContext.Provider >
  )
}

export default CartProvider
