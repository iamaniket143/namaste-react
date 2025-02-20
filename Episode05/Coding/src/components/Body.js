import { RESTAURANT_LIST } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
    // Local State variable - super powerful variable
//     const [listOfRestaurant,setListOfRestaurant] =useState([
//         {
//             info: {
//               id: "10894",
//               name: "Pizza Hut",
//               cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
//               locality: "2nd Stage",
//               areaName: "BTM Layout",
//               costForTwo: "₹350 for two",
//               cuisines: ["Pizzas"],
//               avgRating: 4.1,
//               parentId: "721",
//               avgRatingString: "4.1",
//               totalRatingsString: "10K+",
//               deliveryTime: 31,
//             },
//           },
//           {
//             info: {
//               id: "10895",
//               name: "Dominos",
//               cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
//               locality: "2nd Stage",
//               areaName: "BTM Layout",
//               costForTwo: "₹350 for two",
//               cuisines: ["Pizzas"],
//               avgRating: 4.5,
//               parentId: "721",
//               avgRatingString: "4.1",
//               totalRatingsString: "10K+",
//               deliveryTime: 31,
//             },
//           },
//           {
//             info: {
//               id: "10899",
//               name: "KFC",
//               cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
//               locality: "2nd Stage",
//               areaName: "BTM Layout",
//               costForTwo: "₹350 for two",
//               cuisines: ["Pizzas"],
//               avgRating: 3.9,
//               parentId: "721",
//               avgRatingString: "4.1",
//               totalRatingsString: "10K+",
//               deliveryTime: 31,
//             },
//           },
// ]);
    const [listOfRestaurant,setListOfRestaurant] = useState(RESTAURANT_LIST);
    return (
    <div className="body">
        <div className="filter">
            <button className="filter-btn"
            onClick={() => {
                const filteredList = listOfRestaurant.filter(res => res?.info?.avgRating >= 4.5)
                setListOfRestaurant(filteredList);
                {console.log(listOfRestaurant)}
            }}
            >Top Rated Restaurant
            </button>
        </div>
        <div className="restaurant-container">
            {/* RestaurantCard new component*/}
            {/* {console.log(restaurantList[0].info.name)} */}

            {
                listOfRestaurant.map((restaurant,index) => <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />)
            }
        </div>
    </div>
)
}

export default Body;