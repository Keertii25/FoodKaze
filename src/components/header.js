import React from "react";
import ReactDOM from "react-dom/client";
import { useState ,useContext} from "react";
import useOnline from "../utils/useOnline";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import store from "../utils/Store";

 export const heading=(
    <img className=" h-14 p-2  "src={Logo}></img>
);
const Header =()=>{
    const [title,settitle]=useState("Food-villa");
    const isOnline=useOnline();
    const {user}=useContext(UserContext);
    const toggleTitle = () => {
        const newTitle = title === "Food-villa" ? "New Food App" : "Food-villa";
        settitle(newTitle);
      };
      const [Isloggedin,setIsloggedin]=useState(true);
      const [isOpen, setIsOpen] = useState(false);
     const cartitems=useSelector(store => store.cart.items);
     console.log(cartitems);
   
    return (
            //  <div className="flex justify-between bg-yellow-100  shadow-slate-200 shadow-sm fixed w-full z-10">
            //     {heading}
                 
            //     {/* <button onClick={toggleTitle}>change title</button> */}
            //     <div >
            //         <ul  className="flex flex-row py-6 ">
            //             <Link to="/"> <li className="px-2">Home</li></Link> 
            //             <Link to="/about"> <li className="px-2">About</li></Link>  
            //             <Link to="/contact"> <li className="px-2">contact</li></Link> 
            //             <Link to="/Instamart"> <li className="px-2">instamart</li>  </Link> 
            //             <Link to="/cart"> <li className="px-2">cart</li>  </Link> 
                        
            //             {/* <li className="px-2" >cart-{cartitems.length} items</li>                               */}
            //         </ul>
                    
            //     </div>
            <div className="flex flex-row md:flex-row justify-between bg-yellow-100 shadow-slate-200 shadow-sm fixed w-full z-10">
      {heading}

      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 my-3">
          {isOpen ? "🔼" : "🔽"} {/* Toggle icon */}
        </button>
      </div>

      <div className={`flex flex-col md:flex-row ${isOpen ? "block" : "hidden"} md:block`}>
        <ul className="flex flex-col md:flex-row py-6 my-4 md:py-0">
          <Link to="/"><li className="px-2">Home</li></Link>
          <Link to="/about"><li className="px-2">About</li></Link>
          <Link to="/contact"><li className="px-2">Contact</li></Link>
          <Link to="/Instamart"><li className="px-2">Instamart</li></Link>
          <Link to="/cart"><li className="px-2">Cart ({cartitems.length})</li></Link>
        </ul>
      </div>
                <div className="flex ">
                <h1 className="py-6 px-3 ">{isOnline?"✅":"❌"} </h1>
            {/* <span className="p-10 font-bold ">{user.name}</span> */}
              {Isloggedin ?<button onClick={()=>setIsloggedin(false)}>Login</button>: 
              <button className="" onClick={()=>setIsloggedin(true)}>Logout</button>};
                </div>
                
            </div>               
    );
};
export default Header;
