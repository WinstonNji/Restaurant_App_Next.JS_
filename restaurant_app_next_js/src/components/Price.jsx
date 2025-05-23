'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { useContext } from 'react'
import { CartContext } from './CartContext'


function Price({item, itemPrice}) {


    const {foodCart, setFoodCart} = useContext(CartContext)

    const {id} = useParams()

    const [quantity, setQuantity] = useState(1)
    const [_, setFoodItem] = useState(null)
    let [price, setPrice] = useState(itemPrice)
    const [size, setSize] = useState("Small")


useEffect(() => {

    const meal = foodCart.find((item) => item.itemId == id)

    if(meal){
        setFoodItem(meal)
        setQuantity(meal.quantity)
        setSize(meal.size)
    }


        
}, [id])



//    useEffect(() => {
//     let updatedCart = foodCart.map((item) => item.itemId == id ? {...item, price:price}: item)

//     localStorage.setItem('id', JSON.stringify(updatedCart))

//    }, [price])

    

    
    useEffect(() => {

        let updatedCart = foodCart.map((item) => item.itemId == id ? {...item, size:size, quantity:quantity, price:price}: item)

        localStorage.setItem('id', JSON.stringify(updatedCart))

        setFoodCart(updatedCart)

        const addPrice = item.find((item) => item.title ===  size)
        setPrice(quantity * (itemPrice + addPrice?.additionalPrice))


    }, [size, quantity, price])

    // useEffect(() => {
    //     let updatedCart = foodCart.map((item) => item.itemId == id ? {...item, size:size}: item)

    //     localStorage.setItem('id', JSON.stringify(updatedCart))
    // }, [size])


    const handleQuantity = (event)=> {
        let value = (event.target.value) || ""

         // Allow empty string (when typing) without crashing
        if (value === "") {
            setQuantity("")
            return
        }

          // Validate that it's a number and positive
        const numValue = parseInt(value)
        if (isNaN(numValue) || numValue < 0) return

        setQuantity(numValue)
        
        if(value) {
            setQuantity(value)
            
            // // Updating localeStorage

            // let UpdatedfoodCart = foodCart.map(item => item.itemId == id ? {...item, quantity:value, price:price} : item)

            // localStorage.setItem('id', JSON.stringify(UpdatedfoodCart))

        }
    }

    

  return (
    <div className='flex flex-col gap-2 items-center md:gap-4 mt-6'>
        <h2 className='font-bold text-xl md:text-3xl'>{price? `$${price.toFixed(2)}` : itemPrice.toFixed(2)}</h2>

        <div className='flex gap-3'>
            {item.map((option,index) => (
                <button onClick={() => {
                    setSize(option.title)
                }} className={`btn ${size == option.title ? 'bg-red-600' : 'bg-red-400'} bg-red-400 text-[17px]`} key={index}>{option?.title}</button>
            ))}
        </div>
        
        <div className=' w-3/4 flex flex-col gap-4'>
            <input className='ring-2 rounded-xl w-full p-2' placeholder='Quantity' type="number" min="0" max="infity" id="quantity" value={quantity} onChange={handleQuantity}/>
            
        </div>
        
        
    </div>
  )
}

export default Price
