import { useContext, useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { RES_DATA_API_URL, CORS_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRes, setFilteredRes] = useState([]);
    const [searchText, setSearchText] = useState("");

    const {loggedInUser, setUserName} = useContext(UserContext);

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    //Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
    console.log("rendered");

    useEffect(() => {
        console.log("calling fetch")
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(CORS_URL + RES_DATA_API_URL);
        const json = await data.json();
        // Optional Chaining
        const ResData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        // console.log("ResData", [ResData]);
        setListOfRestaurants(ResData);
        setFilteredRes(ResData);
    };

    // Conditional Rendering
    return listOfRestaurants?.length == 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="flex">
                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={e => setSearchText(e.target.value)} />
                    <button
                        className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                        onClick={() => {
                            console.log(searchText);
                            const filteredRest = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setFilteredRes(filteredRest);
                        }}>
                        Search
                    </button>
                </div>
                <div className="m-4 p-4 flex items-center">
                    <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={() => {
                        const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                        setListOfRestaurants(filteredList);
                    }}>
                        Top Rated Restaurants
                    </button>
                </div>
                <div className="m-4 p-4 flex items-center">
                    <label>UserName</label>
                    <input
                        type="text"
                        className="border border-solid border-black mx-2 px-1"
                        value={loggedInUser} onChange={e => setUserName(e.target.value)}
                    />
                </div>
            </div>
            <div className="flex flex-wrap">
                {filteredRes?.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"restaurant/" + restaurant.info.id}>
                        {/* {restaurant.info.promoted ? <RestaurantCardPromoted resData={restaurant.info} /> : <RestaurantCard resData={restaurant.info} />} */}
                        {restaurant.info.isOpen ? <RestaurantCardPromoted resData={restaurant.info} /> : <RestaurantCard resData={restaurant.info} />}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Body;