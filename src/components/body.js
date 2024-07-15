import React from "react";
import ReactDOM from "react-dom/client";
import { restaurantList } from "../consets";
import Reastarutantcard from "./restaurantcard";
import Shimmer from "./shimmer";
import useOnline from "../utils/useOnline";
import { Link } from "react-router-dom";
// https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.71700&lng=75.83370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING

import { useState,useEffect } from "react";

function filterData(searchInput, restaurants) {
    const filteredData = restaurants.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase().includes(searchInput.toLowerCase())
    );
    return filteredData;
  }


const Body=({user})=>{
         //  local state variable in reactjs
     const [filterrestruats,setfilterrestruats] =useState([]);   
    const [serachinput,setserachinput] = useState(" ");
    const [allrestrauts,setallrestrauts]=useState([]);
   
    useEffect(()=>{
        getrestruants(); 
        
        
     }
     ,[]);
     async function getrestruants() {
        try {
            const response = await fetch('https://www.swiggy.com/mapi/homepage/getCards?lat=23.2599333&lng=77.412615');
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            const json = await response.json();
            // Update state with fetched data
            setallrestrauts(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
            setfilterrestruats(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
            console.log(json);
        } catch (error) {
            console.error('Error fetching data:', error);
            // Handle error state or retry logic here
        }
    }
    
    console.log("render");
    function handleSearch() {
        const filteredData = filterData(serachinput, allrestrauts);
        setfilterrestruats(filteredData);
      }
      const isOnline=useOnline();
      if(!isOnline){
        return <h1>YOU are offline</h1>
      }
    
    if(allrestrauts?.length===0){
        return(
            <Shimmer/> 
        )
    }
    
     if(filterrestruats?.length===0){
        return(
            <h1>NO restaurant found</h1>
        )
    }
    
   
    return (
        <>
        <div className="search mx-12 flex flex-row  ">
            <input 
            type="text"
            className=" border-2 border-orange-100 rounded-xl  my-24 p-1 h-9 "
            placeholder="search"
            values={serachinput}
            onChange={(e)=> setserachinput(e.target.value) }   
            />            
            <button className="p-1 h-9 w-16 mx-2 my-24 font-medium text-orange-100 text-center rounded-xl bg-orange-400 " onClick={handleSearch}>Search</button>
            

        </div>

        <div className="cards flex flex-wrap justify-evenly -my-16 ">
            {/* write the logic of no restrautans found */}
            {filterrestruats.map((restaurant)=>{
               
                return (
                    <Link to={"/restrautent/"+ restaurant.info.id}
                      key={restaurant.info.id} >
                         <Reastarutantcard{...restaurant.info} user={user} /></Link>

                )
           })}
           
        </div>
        </>

    )
}
export default Body;

