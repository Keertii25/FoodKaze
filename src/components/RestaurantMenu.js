import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurants";
import { useDispatch } from "react-redux";
import  {addItem}  from "../utils/Redux/CartSlice";

const RestaurantMenu = () => {
  const resID = useParams();
  // useParams returns an object that's why we use de-structuring.
  const { id } = resID;

  const restaurantHook = useRestaurant(id);
  //Destructuring our Custom hook
  const { restaurant, restaurantData } = restaurantHook;

  const dispatch = useDispatch();

  const handleAddItem = (info) => {
      dispatch(addItem(info));   
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="">
      <div>
        <h1>Restaurant id: {id}</h1>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
        <h3>{restaurant.name} </h3>
        <h3>{restaurant.avgRating}</h3>
        <h3> {restaurant.city} </h3>
      </div>
      {restaurantData.map((temp1,index) => (
        <>
          <h1 key={index} className="text-2xl">{temp1?.card?.card?.title} </h1>
          <div>
            {temp1?.card?.card?.itemCards?.map((temp2) => (
              <li key={temp2?.card?.info?.id} >{temp2?.card?.info?.name} - <button className="bg-blue-100" onClick={()=>handleAddItem(temp2?.card?.info)}>AddItem</button></li>
            ))}
          </div>
        </>
      ))};

    </div>
  );
};

export default RestaurantMenu;
