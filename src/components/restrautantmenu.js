import React from "react";
// "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.7195687&lng=75.8577258&restaurantId= "(resId)" &catalog_qa=undefined&submitAction=ENTER";

import ReactDOM from "react-dom/client";
import { useEffect ,useState} from "react";
import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestrautent";
import { img_cdn_url } from "../consets";
import Shimmer from "./shimmer";
import Menu from "../consets";
import RestaurantMenu from "./RestaurantMenunmae";
import { addItem } from "../utils/Cartslice";
import { useDispatch } from "react-redux";


const Reastrutmenu=()=>{  
    const { resId }  = useParams();
    
    const  [restaurant, restaurants1, restaurants2]=useRestaurant(resId);
    const [cartMessage, setCartMessage] = useState("");
    if(!restaurant){
      return <Shimmer/>
    }
    const dispatch =useDispatch();
    const handleadditems=()=>{
        dispatch(addItem("grapes"));
    }
    const addFooditems=(items)=>{
        
        setCartMessage("Item added to the cart!");
    
    // Clear the message after a few seconds
    setTimeout(() => {
      setCartMessage("");
    }, 1000);
        dispatch(addItem(items));
    }
    
    
    return (
        <div className=" flex flex-col items-center ">
           < div className="md:px-32  my-20  p-2 ">
           
           <img  className=" h-96 w-96 px-2 md:h-96 md:w-full"src={img_cdn_url+ restaurant.cloudinaryImageId}></img>
           <div className="flex  ">
           <div className=" " >
          
           <h2 className="text-xl font-serif font-medium sm:text-4xl">{restaurant.name}</h2> 
           <h3 className="text-sm font-normal ">{restaurant.slugString}</h3>
           <h3 className="text-sm font-normal ">{restaurant.city}</h3>
           <h4 className="text-xl font-normal ">{restaurant.areaName}</h4>
           <h4 className="text-sm text-orange-400 font-semibold ">{restaurant.costForTwoMessage}</h4>
           <h4 className="text-sm font-normal ">{restaurant.availabilityServiceabilityMessage}</h4>
           <h4 className="text-lg font-normal ">{restaurant.totalRatingString}</h4>
          
           </div>
            <div className=" font-normal my-2  h-7 w-14  rounded-lg text-center  bg-green-400 text-white">{restaurant.avgRatingString}+⭐</div>
           
           
           </div>
          </div>

          <div className=" border border-solid -my-10  h-fit  shadow-xl items-center ">
            
                <h1 className="font-bold text-center text-2xl font-sans p-2">Menu</h1>
                {/* <button className="bg-green-300 p-2 " onClick={()=>handleadditems()}>add+</button> */}
                <ul>
                    {restaurants1 && Object.values(restaurants1) ? (restaurants1 && Object.values(restaurants1).map((restaurantMenu) => {
                        return (
                            <div className="border justify-between items-center border-solid  mx-6 md:mx-0 md:py-2 md:px-4  flex shadow-md" key={restaurantMenu?.card?.info?.id}>
                                <RestaurantMenu {...restaurantMenu?.card?.info} />
                                <button className="bg-yellow-100 h-10 w-16 rounded-md hover:bg-yellow-200 md:mx-32" onClick={()=>addFooditems(restaurantMenu)} >+ Add</button>
                            </div>
                        )
                    })) :
                        (restaurants2 && Object.values(restaurants2).map((restaurantMenu) => {
                            return (
                                <div className="flex justify-between border border-solid px-4 py-2 items-center shadow-md" key={restaurantMenu?.card?.info?.id}>
                                    <RestaurantMenu {...restaurantMenu?.card?.info} />
                                    <button className="bg-yellow-100 h-10 w-16 rounded-md hover:bg-yellow-200" onClick={()=>addFooditems(restaurantMenu)} >+ Add</button>
                                </div>
                            )
                        }))
                    }
                </ul>
            </div >
             {/* Cart message display */}
      {cartMessage && (
        <div className="fixed bottom-0 left-20 right-20 bg-green-500 text-white text-center p-4">
          {cartMessage}
        </div>
      )}
          
          </div>
        
        
            
         
    );
   
};

export default Reastrutmenu;