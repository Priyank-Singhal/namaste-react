import React from 'react'
import { IMG_CDN_URL } from '../utils/constants';

const ItemList = ({ items }) => {
    const Price = items?.price;
    return (
        <div className='text-left border-b border-gray-300 my-2 py-4 flex justify-between'>
            <div className='w-10/12'>
                <p className='text-gray-600 font-bold'>{items.name}</p>
                <p className='text-sm'>₹{Price / 100}</p>
                <p className='text-gray-400'>{items.description}</p>
            </div>
            <div className='w-3/12'>
                <div className='absolute'>
                    <button className='shadow-lg p-2  bg-black text-white rounded-lg'>Add +</button>
                </div>
                <img className='rounded-lg' src={IMG_CDN_URL + items.imageId} />
            </div>
            {/* <div > */}
            {/* <img className='w-32 h-20 rounded-lg m-3' src={IMG_CDN_URL + items.imageId} /> */}
            {/* </div> */}
        </div>
    )
}

export default ItemList