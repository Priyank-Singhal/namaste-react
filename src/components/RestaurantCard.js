import { IMG_CDN_URL } from "../utils/constants";
const RestrauntCard = (props) => {
    // console.log("props", props);
    const Data = props.resData;
    // console.log("Data", Data);
    const {name, cloudinaryImageId, locality, avgRating, cuisines, sla} = Data;
    return (
        <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-200 hover:shadow-lg hover:w-[250.4px]">
            <img className="rounded-lg" src={IMG_CDN_URL + cloudinaryImageId} />
            <h2 className="font-bold py-4 text-lg">{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{avgRating} stars</h3>
            <h4>{sla.deliveryTime} minutes</h4>
            <h4>{locality}</h4>
        </div>
    );
};

// Higher Order Component
export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 px-1">Promoted</label>
                <RestrauntCard {...props} />
            </div>
        )
    }
}

export default RestrauntCard;