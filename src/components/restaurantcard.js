// import React from "react";
// import ReactDOM from "react-dom/client";
// import { img_cdn_url } from "../consets";


// const Reastarutantcard=({
//     name,
//     cloudinaryImageId,
//     cuisines,
//     lastMileTravelString,
// })=>{
    
//     return (
//         <div className="restratuntcard">
//             <img src={ img_cdn_url +cloudinaryImageId}></img>
//             <h2>{name}</h2>
//             <h3>{cuisines.join(",")}</h3>
//             <h4>{lastMileTravelString } minutes</h4>     
//      </div>
//     )    
// }
// export default Reastarutantcard;

import React from "react";
import ReactDOM from "react-dom/client";
import { img_cdn_url } from "../consets";

const Reastarutantcard = ({
    name,
    cloudinaryImageId,
    cuisines,
    sla,
    user
    
}) =>  {
    const { lastMileTravelString } = sla || {};
    return (
        <div className="restratuntcard scale-105 w-56 h-64 bg-slate-200 bg-opacity-20 mx-4 my-4 py-2 px-2 transition-transform duration-300 shadow-md hover:scale-105 ">
            <img className="h-32 w-56 transform scale-100 transition-transform duration-300 hover:scale-105"
                src={img_cdn_url + cloudinaryImageId}
                alt={name} // Providing alt attribute for accessibility
            />
            <h2 className="font-semibold ">{name}</h2>
            <h3 className="text-xs">{Array.isArray(cuisines) ? cuisines.join(", ") : ""}</h3>
            <h4 className="text-orange-400 font-medium">{lastMileTravelString}</h4>
            {/* <h4 >{user.name}</h4> */}
        </div>
    );
};

export default Reastarutantcard;
