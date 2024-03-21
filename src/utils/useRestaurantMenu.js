import React, { useState, useEffect } from 'react'
import { MENU_API } from '../utils/constants';

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    // console.log("props", props);
    // console.log("comp render for resId", resId);
    useEffect(() => {
        // console.log("useEff called");
        fetchMenu()
    }, []);
    
    const fetchMenu = async () => {
        const data = await fetch(
            MENU_API + resId
        )
        const json = await data.json();
        const ResData = json?.data;
        // console.log("resId ", resId);
        // console.log("json ", json);
        // console.log("ResData ", ResData);
        // const ResData = json?.data?.cards[0]?.card?.card?.info;
        // const itemCards = json?.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
        setResInfo(ResData);
    };
    
  return resInfo
}

export default useRestaurantMenu