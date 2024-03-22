import React from 'react'
import { useSelector } from 'react-redux'
import ItemList from './ItemList'

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items)
    console.log("cartItems", cartItems);
    return (
        <div className='text-center my-3'>
            <h1 className='font-bold text-2xl'>Cart</h1>
            {/* {cartItems.length != 0 ?
                <div className='w-6/12 mx-auto  bg-gray-50 shadow-lg my-4 p-4'>
                    {cartItems.map(item => {
                        return < ItemList key={item.id} item={item} />
                    })}
                </div>
                : <h2>Please add Items in your cart</h2>} */}
        </div>
    )
}

export default Cart