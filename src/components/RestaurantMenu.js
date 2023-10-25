import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurants";

const RestaurantMenu = () => {
  const resID = useParams();
  // useParams returns an object that's why we use de-structuring.
  const { id } = resID;
  
  const restaurantHook = useRestaurant(id);
  const {restaurant,restaurantData} = restaurantHook;

  

  return (!restaurant)? <Shimmer/> :(
    <>
      <div>
        <h1>Restaurant id: {id}</h1>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
        <h3>{restaurant.name} </h3>
        <h3>{restaurant.avgRating}</h3>
        <h3> {restaurant.city} </h3>
        </div>
          {restaurantData.map((temp1)=>
          <>
            <h1>{temp1?.card?.card?.title} </h1>
            <li>{temp1?.card?.card?.itemCards?.map((temp2)=>
              <li>{temp2?.card?.info?.name}</li>
            )}</li>
          </>
          )}
        
        <div>
      </div>
    </>
  );
};

export default RestaurantMenu;
