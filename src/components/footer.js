import React from "react";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import ReactDOM from "react-dom/client";
// import UserContext from "../utils/UserContext";



const Footer=()=>{
    const {user}=useContext(UserContext);
    return (
        <h1 className="text-center p-2 my-10">this site is developed by {user.name}-{user.email}</h1>
    )
}
export default Footer;