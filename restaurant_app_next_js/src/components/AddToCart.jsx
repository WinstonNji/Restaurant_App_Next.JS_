"use client"
import { useState, useEffect, useContext } from "react"
import { CartContext } from "./CartContext"

function AddtoCart({ id }) {
    const {foodCart, addItem, removeItem} = useContext(CartContext)
    const [isInCart, setIsInCart] = useState(false)

    // Check if item is in cart whenever foodCart changes
    useEffect(() => {
        const foundInCart = foodCart.find((item) => id == item.itemId)
        setIsInCart(!!foundInCart) 
    }, [foodCart, id]) 

    const addCart = (itemId) => {
        if(isInCart){
            removeItem(itemId)
        } else {
            addItem({
                'itemId': itemId,
                'quantity': 1,
                'size': 'Small',
            })
        }
    }
    
    return (
        <button 
            onClick={() => addCart(id)} 
            className='btn active:bg-red-600 bg-red-400'
        >
            {isInCart ? 'Remove from Cart' : 'Add to Cart'}
        </button>  
    )
}

export default AddtoCart