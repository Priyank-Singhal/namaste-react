import React from 'react'
import { IMG_CDN_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../utils/cartSlice';

const ItemList = ({ item }) => {
    const Price = item?.price;

    const cartItems = useSelector(store => store.cart.items);
    const AddedInCart = cartItems.filter(cartItem => cartItem == item).length;
    console.log("cartItems",cartItems);

    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        // Dispatch action
        const updatedQty = AddedInCart+1;
        dispatch(addItem({item, updatedQty}))
    }
    const handleRemoveItem = () => {
        dispatch(removeItem())
    }

    return (
        <div className='text-left border-b border-gray-300 my-2 py-4 flex justify-between'>
            <div className='w-10/12'>
                <p className='text-gray-600 font-bold'>{item.name}</p>
                <p className='text-sm'>₹{Price / 100}</p>
                <p className='text-gray-400'>{item.description}</p>
            </div>
            <div className='w-3/12 flex flex-col justify-end items-center'>
                <div className='absolute mb-[-6px]'>
                    <div
                        className='shadow-lg px-2 py-1 
                        bg-gradient-to-t from-gray-900 to-transparent-50
                        text-white rounded-lg border border-gray-100 hover:bg-gray-800 hover:border-black flex'
                    >
                        {AddedInCart ?
                            <div className='pr-2'>
                                <button onClick={() => handleRemoveItem()} className='pr-2'>-</button>
                                {AddedInCart}
                            </div>
                            : "Add"}
                        <button onClick={() => handleAddItem(item)}>+</button>
                    </div>
                </div>
                <img className='rounded-lg' src={IMG_CDN_URL + item.imageId} />
            </div>
        </div>
    )
}

export default ItemList