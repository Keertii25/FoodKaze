import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const resID = useParams();
  // useParams returns an object that's why we use de-structuring.
  const { id } = resID;
  const [restaurant, setRestaurants] = useState(null);
  const [restaurantData, setRestaurantsData] = useState(null);

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
    setRestaurantsData(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    console.log(restaurantData)
  }

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
