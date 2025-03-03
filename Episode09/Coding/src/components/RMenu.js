import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useRestaurantInfo from "../utils/useRestaurantInfo";

const RMenu = () => {
    const {resId} = useParams();

    const menuInfo = useRestaurantMenu(resId);
    const resInfo = useRestaurantInfo(resId);
    // console.log(resInfo);
    // console.log(resId);
    

  return (menuInfo.length === 0) ? <Shimmer /> : <>
    <div className="menu">
        <h1>{resInfo?.name}</h1>
        <h4>{resInfo?.city}</h4>
        {/* <img className="restaurant-logo" src={CDN_URL+resInfo?.cloudinaryImageId}/> */}
        <h4>{resInfo?.cuisines.join(", ")}</h4>
        <h4>{resInfo?.costForTwoMessage}</h4>
        <h2>Menu</h2>
        <ul>
            {menuInfo.map((menu) => {
                return <>
                <li key={menu?.card?.info?.id}>{menu?.card?.info?.name} - ₹{menu?.card?.info?.price/100 || menu?.card?.info?.defaultPrice/100}</li>
            </>
            })}
            </ul>

    </div>
  </>
}

export default RMenu;