import React, { useState } from 'react'
import ItemList from './ItemList'

const RestaurantCategory = ({ data, showItems, setShowItems }) => {

  const handleClick = () => {
    setShowItems();
  };

  return (
    <div>
      <div className='w-6/12 mx-auto bg-gray-50 shadow-lg my-4 p-4'>
        <div className='flex justify-between cursor-pointer' onClick={handleClick}>
          <span className='font-bold text-lg'>{data.title} ({data.itemCards.length})</span>
          <span>🔽</span>
        </div>
        <div>
          {showItems && data.itemCards.map(item =>{
            const CardInfo = item?.card?.info;
            return <ItemList key={CardInfo.id} item = {CardInfo} />
          } )}
        </div>
      </div>
    </div>
  )
}

export default RestaurantCategory