import { useState } from "react";
import Logo from "../assets/img/OIP.jpeg";
import { Link } from "react-router-dom";

export const title = (
    <a href="/"> <img className="logo" alt="logo" src={Logo}/> </a>
);


export const Header= () => {
    const [isLoggedIn,setIsLoggedIn]= useState(false);
    return (
        <div className="header">
            {title}
            <ul className="nav-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li>Card</li>
            </ul>
            
            {isLoggedIn ? <button onClick={()=> setIsLoggedIn(false)}>Logout</button> : <button onClick={()=> setIsLoggedIn(true)}>Login</button>}
        </div>
        
    )
};
export default Header;