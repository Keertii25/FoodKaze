import React from "react";
import { useState,useEffect } from "react";


const useRestaurant = (id) => {
  const [restaurant, setRestaurants] = useState(null);
  const [restaurantData, setRestaurantsData] = useState(null);

  //Get the data from API
  useEffect(() => {
    getRestaurantMenu();
  }, []);

  async function getRestaurantMenu() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${id}&catalbog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    console.log(json.data);
    setRestaurants(json?.data?.cards[0]?.card?.card?.info);
    console.log(restaurant);
    setRestaurantsData(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
    console.log(restaurantData);
  }

  //Return restaurant-menu using restaurant,restaurantData as object.
  return {restaurant,restaurantData};
};
export default useRestaurant;
