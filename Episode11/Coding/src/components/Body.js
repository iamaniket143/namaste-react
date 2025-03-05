import { RESTAURANT_LIST } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // Local State variable - super powerful variable
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    // console.log("Component Mounted");
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?lat=21.1040855&lng=79.1311836&collection=83637&tags=layout_CCS_Burger&sortBy=&filters=&type=rcv2&offset=0&carousel=true&third_party_vendor=1");
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    // const data = await fetch("https://www.swiggy.com");
    const response = await data.json();
    const newData = await response.data.cards.slice(3);
    // setListOfRestaurant(RESTAURANT_LIST);
    // setListOfRestaurant([filteredData?.card?.card]);
    setListOfRestaurant(RESTAURANT_LIST);
    setFilteredRestaurant(RESTAURANT_LIST);
    // console.log(newData[0]?.card?.card?.info?.name);
    // console.log(response);
  };

  // if(listOfRestaurant.length === 0) {
  //     return <Shimmer />
  // }

  const handleTopRatedBtn = () => {
    const filteredList = filteredRestaurant.filter(
      (res) => res?.info?.avgRating >= 4.4
    );
    // setListOfRestaurant(filteredList);
    setFilteredRestaurant(filteredList);
    {
      console.log(listOfRestaurant);
    }
  };
  const handleInput = (e) => {
    // filer the restaurant based on the search input and update the UI
    // Search Text
    setSearchText(e.target.value);
    console.log(searchText);
  };

  const handleSearchBtn = () => {
    // filer the restaurant based on the search input and update the UI
    // Search Text
    const filteredRestaurant = listOfRestaurant.filter((res) =>
      res?.info?.name
        .toLocaleLowerCase()
        .includes(searchText.toLocaleLowerCase())
    );
    setFilteredRestaurant(filteredRestaurant);
  };

  if (useOnlineStatus() === false) {
    return (
      <h1>Looks like you're Offline!! Please check your internet connection</h1>
    );
  }

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            onChange={(e) => handleInput(e)}
            value={searchText}
            type="text"
            className="border border-solid border-black"
            placeholder="Search for restaurants"
          ></input>
          <button
            onClick={handleSearchBtn}
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={handleTopRatedBtn}>
            Top Rated Restaurant
          </button>
        </div>
      </div>

      <div className="flex flex-wrap">
        {/* RestaurantCard new component*/}
        {/* {console.log(restaurantList[0].info.name)} */}

        {filteredRestaurant.map((restaurant, index) => (
          <Link
            key={restaurant?.info?.id}
            to={"restaurant/" + restaurant?.info?.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
