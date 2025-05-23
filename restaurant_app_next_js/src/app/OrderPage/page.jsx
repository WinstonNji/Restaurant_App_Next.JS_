'use client'
import React, { useEffect } from 'react'
import { useState, useContext } from 'react'
import { featuredProducts } from '@/data'
import Image from 'next/image'
import { ShoppingCart, Trash2 } from 'lucide-react'
import Link from 'next/link'
import { CartContext } from '@/components/CartContext'
import Loading from '../MenuItem/[id]/loading'

function OrderPage() {

    const {foodCart, setFoodCart, removeItem} = useContext(CartContext)
    const [isLoading, setLoading] = useState(false)
    
    const [displayArray, setDisplayArray] = useState([])
    let [total, setTotal] = useState([])

    useEffect(() => {
        const total1 = displayArray.map((meal) => meal.price)
        setTotal(total1)
    }, [displayArray])

    useEffect(() => {
        try {
            setLoading(true)

            let matches = []


            for (const cartMeal of foodCart){
                for(const dataBaseMeal of featuredProducts){
                    const updatedPrice = cartMeal.price

                    if(cartMeal.itemId == dataBaseMeal.id){
                        if(updatedPrice){
                            matches.push({...dataBaseMeal, quantity : cartMeal.quantity, size : cartMeal.size, price:updatedPrice})
                        }else{
                            matches.push({...dataBaseMeal, quantity : cartMeal.quantity, size : "Small", price:dataBaseMeal.price})  
                        }
                    }
                }
            }

            setDisplayArray(matches)
        }catch(error){
            console.log(error)
        }finally{
            setLoading(false)
        }
        
    }, [foodCart])  

    useEffect(() => {

    }, [total])

    const deleteFromCart = (id) => {
        if(id){
            removeItem(id)
            
        }
    }

    const subtotal = total.reduce((acc, element) => acc + element, 0)
    const serviceFee = subtotal * 0.1
    const deliveryCost = subtotal > 25 ? 0 : subtotal * 0.05
    const finalTotal = subtotal + serviceFee + deliveryCost

    return (

        <>

            <div className="min-h-screen bg-gray-50">
            {/* Header */}
                <div className="bg-white shadow-sm border-b border-gray-200">
                    <div className="max-w-4xl mx-auto px-4 py-6">
                        <div className="flex items-center gap-3">
                            <ShoppingCart className="text-red-400 w-6 h-6" />
                            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Your Order</h1>
                        </div>
                    </div>
                </div>

            {isLoading &&

                <div className='flex flex-col gap-5 max-w-4xl mx-auto px-4 py-6'>
                    {[...Array(foodCart.length)].map((_,index) => (
                        <div className="skeleton h-48 w-full"></div>
                    ))}

                </div>
                
            }

            
            {!isLoading && 

                <div className="max-w-4xl mx-auto px-4 py-6">
                    {displayArray.length > 0 ? (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Cart Items */}
                            <div className="lg:col-span-2 space-y-4">
                                <h2 className="text-xl font-semibold text-gray-800 mb-4">Cart Items ({displayArray.length})</h2>
                            
                                {displayArray.map((item, index) => (
                                    <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                            {/* Image */}
                                            <div className="flex-shrink-0">
                                                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden bg-gray-100">
                                                    <Image 
                                                        alt={item.title} 
                                                        src={item.img} 
                                                        width={96} 
                                                        height={96}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </div>
                                        
                                            {/* Item Details */}
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-semibold text-gray-800 text-lg truncate"><Link href={`/MenuItem/${item.id}`}>
                                                    {item.title}
                                                </Link></h3>
                                                <p className="text-gray-600 text-sm mt-1">Size: {item.size}</p>
                                                <div className="flex items-center gap-4 mt-2">
                                                    <span className="text-red-400 font-bold text-lg">${item.price.toFixed(2)}</span>
                                                    <span className="text-gray-600 text-sm">Qty: {item.quantity}</span>
                                                </div>
                                            </div>

                                            {/* Delete Button */}
                                            <div className="flex-shrink-0">
                                                <button 
                                                    onClick={() => deleteFromCart(item.id)}
                                                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors"
                                                    aria-label="Remove item"
                                                >
                                                    <Trash2 className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Order Summary */}
                            <div className="lg:col-span-1">
                                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-6">
                                    <h2 className="text-xl font-semibold text-gray-800 mb-6">Order Summary</h2>
                                
                                    <div className="space-y-4">
                                        {/* Subtotal */}
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-600">
                                                Subtotal ({JSON.parse(localStorage.getItem('id')).length} {JSON.parse(localStorage.getItem('id')).length === 1 ? 'item' : 'items'}):
                                            </span>
                                            <span className="font-semibold text-gray-800">${subtotal.toFixed(2)}</span>
                                        </div>

                                        {/* Service Fee */}
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-600">Service Fee:</span>
                                            <span className="font-semibold text-gray-800">${serviceFee.toFixed(2)}</span>
                                        </div>

                                        {/* Delivery Cost */}
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-600">Delivery Cost:</span>
                                            <span className="font-semibold text-gray-800">
                                                {subtotal > 25 ? (
                                                    <span className="text-green-600 font-bold">FREE</span>
                                                ) : (
                                                    `$${deliveryCost.toFixed(2)}`
                                                )}
                                            </span>
                                        </div>

                                        {/* Divider */}
                                        <hr className="border-gray-200" />

                                        {/* Total */}
                                        <div className="flex justify-between items-center">
                                            <span className="text-lg font-bold text-gray-800">Total:</span>
                                            <span className="text-xl font-bold text-red-400">${finalTotal.toFixed(2)}</span>
                                        </div>

                                        {/* Free Delivery Notice */}
                                        {subtotal < 25 && (
                                            <div className="bg-red-50 border border-red-200 rounded-lg p-3 mt-4">
                                                <p className="text-sm text-red-600">
                                                    Add ${(25 - subtotal).toFixed(2)} more for free delivery!
                                                </p>
                                            </div>
                                        )}

                                        {/* Checkout Button */}
                                        <button className="w-full bg-red-400 hover:bg-red-500 text-white font-semibold py-3 px-4 rounded-lg transition-colors mt-6">
                                            Proceed to Checkout
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        /* Empty Cart */
                        <div className="flex flex-col items-center justify-center min-h-96 text-center">
                            <div className="bg-gray-100 rounded-full p-8 mb-6">
                                <ShoppingCart className="w-16 h-16 text-gray-400" />
                            </div>
                            <h1 className="text-3xl md:text-4xl font-bold text-red-400 mb-4">
                                Your Cart is Empty
                            </h1>
                            <p className="text-gray-600 text-lg mb-8 max-w-md">
                                Looks like you haven't added any items to your cart yet. Start shopping to fill it up!
                            </p>
                            <Link href={'/'} className="bg-red-400 hover:bg-red-500 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                                Continue Shopping
                            </Link>
                        </div>
                    )}
                </div>
            
            }
                
            </div>
        
        </>

        
    )
}

export default OrderPage