import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantInfo = (resId) => {
    const [resInfo, setResInfo]= useState();
    
    useEffect(() => {
        fetchData();
    },[]);
    
    const fetchData = async () => {
        const data  = await fetch(MENU_API+resId);
        const json = await data.json();
        setResInfo(json?.data?.cards[2]?.card?.card?.info);
        // console.log('set res info');
    }

    return resInfo;
}

export default useRestaurantInfo;