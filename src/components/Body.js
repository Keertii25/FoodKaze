import RestaurantCard from "./RestaurantCard";
import {RestaurantList} from "../constants";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import {filterData} from "../utils/helper"
import useOnline from "../utils/useOnline";



const Body= () => {
    const [allRestaurants, setAllRestaurants]= useState([]);
    const [filteredRestaurants, setFilteredRestaurants]= useState([]); 
    const [searchText,setSearchText]= useState("");
    
    useEffect(()=>{
        getRestaurants(); 
    },[])
    async function getRestaurants(){
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        console.log(json); 
        setAllRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    const isOnline = useOnline();    //created a useOnline custom hook which returns true or false
    console.log(isOnline);
    if(!isOnline){
        return <h1>🔴 You are offline, Plz check your internet connection</h1>
    }

    if(!allRestaurants) return null;

    return (allRestaurants.length===0)? <Shimmer/> :(
        <>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e)=>{
                        return setSearchText(e.target.value );
                    }}
                />
                <button className="search-btn" onClick={()=>{
                    const data=filterData(searchText,allRestaurants);
                    return setFilteredRestaurants(data);
                }}>Search</button>
            </div>
            <div className="Restaurant-list">
                {
                    (filteredRestaurants.length===0)? <h1>No restaurants found...!!</h1> : filteredRestaurants.map((Restaurant)=>{
                        return <Link to={"/restaurant/" + Restaurant.info.id} key={Restaurant.info.id}><RestaurantCard {...Restaurant.info}/></Link>
                    })
                }
            </div>
        </>
    );
};
export default Body; 