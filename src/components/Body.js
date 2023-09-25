import RestaurantCard from "./RestaurantCard";
import {RestaurantList} from "../constants";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";


function filterData(searchText,restaurants){
    const filterdata= restaurants.filter((restaurant) =>
        restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterdata;
}

const Body= () => {
    const [restaurants,setRestaurants]= useState([]);
    const [searchText,setSearchText]= useState("");
    
    useEffect(()=>{
        getRestaurants();
    },[])
    async function getRestaurants(){
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        console.log(json); 
        setRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    return (restaurants.length===0)? <Shimmer/> :(
        <>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e)=>{
                        return setSearchText(e.target.value);
                    }}
                />
                <button className="search-btn" onClick={()=>{
                    const data=filterData(searchText,restaurants);
                    return setRestaurants(data);
                }}>Search</button>
            </div>
            <div className="Restaurant-list">
                {
                    restaurants.map((Restaurant)=>{
                        return <RestaurantCard {...Restaurant.info} key={Restaurant.info.id}/>
                    })
                }
            </div>
        </>
    );
};
export default Body; 