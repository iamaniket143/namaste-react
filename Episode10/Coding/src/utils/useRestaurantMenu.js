import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
    const [ menuInfo, setMenuInfo ] = useState([])
    useEffect(() => {
        fetchData();
    },[]);
    
    const fetchData = async () => {
        const data  = await fetch(MENU_API+resId);
        const json = await data.json();
        setMenuInfo(json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
        console.log(menuInfo);
    }

    return menuInfo;
}

export default useRestaurantMenu;