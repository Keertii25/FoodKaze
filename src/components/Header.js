import { useState } from "react";

export const title = (
    <h1 id="title">Logo</h1>
);


export const Header= () => {
    const [isLoggedIn,setIsLoggedIn]= useState(false);
    return (
        <div className="header">
            {title}
            <ul className="nav-list">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Card</li>
            </ul>
            {isLoggedIn ? <button onClick={()=> setIsLoggedIn(false)}>Logout</button> : <button onClick={()=> setIsLoggedIn(true)}>Login</button>}
        </div>
        
    )
};
export default Header;