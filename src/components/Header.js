import { useState, useContext } from "react";
import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UsersContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { Button } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { BiSolidUser } from "react-icons/bi";
import { BsFillCartFill } from "react-icons/bs";
import { TbProgressHelp } from "react-icons/tb";
import { DrawerExample } from "../constants";

export const title = (
  <a href="/">
    <img className="h-16 mt-4" alt="logo" src={Logo} />
  </a>
);

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();

  const CartItems = useSelector((store) => store.cart.items); //used to subscribe to the Store.
  console.log(CartItems);

  return (
    <div className="flex justify-between border px-3 border-green-500 overflow-hidden">
      <div className="flex gap-8">
        {title}
      </div>
      
      {/* ✅, login and logout button  */}
      <div className="flex items-center gap-4 py-8">
        <div> {isOnline ? <div className="text-xl">✅</div> : <div className="text-xl">❌</div>}</div>
        <div>
          <Link to={"/cart"} className="flex items-center"><BsFillCartFill className="text-[#3cab3c] text-4xl relative"/>
            {CartItems.length}
          </Link>
        </div>

        <div>
          {isLoggedIn ? (
            <Button onClick={()=> {setIsLoggedIn(false)}} colorScheme="white" variant="outline" fontSize={18}  gap={1}>
              <Icon as={BiSolidUser} />
              Log in
            </Button>
          ) : (
            <Button onClick={()=> {setIsLoggedIn(true)}} colorScheme="white" variant="outline" fontSize={18}  gap={1}>
              <Icon as={BiSolidUser}/>
              Log out
            </Button>
          )}
        </div>
        <DrawerExample/>
      </div>
    </div>
  );
};
export default Header;
