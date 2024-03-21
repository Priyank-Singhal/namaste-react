import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [showIndex, setShowIndex] = useState(0);
    console.log("showIndex", showIndex)

    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, cloudinaryImageId, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    // console.log("categories", categories);

    return (
        <div className='text-center'>
            <h1 className='font-bold text-2xl py-5'>{name}</h1>
            {categories.map((category, index) => (
                // Controlled Component
                <RestaurantCategory
                    key={category?.card?.card?.title}
                    data={category?.card?.card}
                    showItems={showIndex === index ? true : false}
                    setShowItems = {() => setShowIndex(prev => (prev === index ? null : index))}
                />
            ))}
        </div>
    )
}

export default RestaurantMenu