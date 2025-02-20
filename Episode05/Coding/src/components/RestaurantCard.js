import { CDN_URL } from "../utils/constants";

const styleCard = {
    backgroundColor: "#f0f0f0"
}

const RestaurantCard = ({resData}) => {
        const {name, cuisines,avgRating, deliveryTime,costForTwo,cloudinaryImageId} = resData?.info;
        return (
            <div className="restaurant-card" style={styleCard}>
                <img className="restaurant-logo" src={CDN_URL + cloudinaryImageId}></img>
                <h3>{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{avgRating} stars</h4>
                <h4>{deliveryTime} minutes</h4>
                <h4>{costForTwo}</h4>
            </div>
        )
}

export default RestaurantCard;