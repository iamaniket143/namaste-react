import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
    const [menuInfo, setMenuInfo]= useState([]);
    const [resInfo, setResInfo]= useState();

    const params = useParams();
    console.log(params.resId);
    useEffect(() => {
        fetchMenu();
    },[])

    const fetchMenu = async () => {
        const response = await fetch(MENU_API+params.resId)//+"&submitAction=ENTER");
        const json = await response.json();
        // console.log(json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
        setMenuInfo(json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
        // console.log(json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]?.card?.info?.name);
        
        
        // console.log(json?.data?.cards[2]?.card?.card?.info);
        setResInfo(json?.data?.cards[2]?.card?.card?.info);
    }

  return (menuInfo.length === 0) ? <Shimmer /> : <>
    <div className="menu">
        <h1>{resInfo?.name}</h1>
        <h4>{resInfo?.city}</h4>
        {/* <img className="restaurant-logo" src={CDN_URL+resInfo?.cloudinaryImageId}/> */}
        <h4>{resInfo?.cuisines.join(", ")}</h4>
        <h4>{resInfo?.costForTwoMessage}</h4>
        <h2>Menu</h2>
        {/* <p>{resInfo}</p> */}
        {/* {console.log(resInfo[0]?.card?.info?.name)} */}
         
            {/* // {console.log(res?.card?.info?.name)}
            // {console.log(res?.card?.info?.id)} */}
            <ul>
            {menuInfo.map((menu) => {
                // {console.log(menu?.card?.info)}
                return <>
                <li key={menu?.card?.info?.id}>{menu?.card?.info?.name} - ₹{menu?.card?.info?.price/100 || menu?.card?.info?.defaultPrice/100}</li>
            </>
            })}
            </ul>

    </div>
  </>
}

export default RestaurantMenu;