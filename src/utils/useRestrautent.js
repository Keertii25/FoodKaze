import React from "react";
import ReactDOM from "react-dom/client";
import { useState,useEffect } from "react";
const useRestaurant=(resId)=>{
//      const [mymenu,setmymenu]=useState(null);
   
     
//  useEffect(()=>{
//         getRestruatsmenu();
//  },[])
//   async function getRestruatsmenu(){
    
//     const url='https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7195687&lng=75.8577258&restaurantId='+(resId)+'&catalog_qa=undefined&submitAction=ENTER'; 
    
//     const data = await fetch(url);   
//     const json= await data.json();
    
//     console.log(json);
//     setmymenu(json?.data?.cards[2]?.card?.card?.info);
   
   
//   }
//   return mymenu;

const [restaurant, setRestaurant] = useState(null);
    const [restaurants1, setRestaurants1] = useState(null);
    const [restaurants2, setRestaurants2] = useState(null);
    // console.log(restaurants);

    useEffect(() => {
        getRestaurant();
    }, [])

    async function getRestaurant() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId="+resId);
        const jsonData = await data.json();
        console.log(jsonData);
        setRestaurant(jsonData.data?.cards[2]?.card?.card?.info);
        setRestaurants1(jsonData.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
        setRestaurants2(jsonData.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);

    }
    return [restaurant, restaurants1, restaurants2];
  
  


};
export default useRestaurant;