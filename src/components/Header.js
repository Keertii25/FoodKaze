import { useState, useContext } from "react";
import Logo from "../assets/img/OIP.jpeg";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UsersContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { Button } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { BiSolidUser } from "react-icons/bi";

export const title = (
  <a href="/">
    <img className="h-24" alt="logo" src={Logo} />
  </a>
);

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();

  const CartItems = useSelector((store) => store.cart.items); //used to subscribe to the Store.
  console.log(CartItems);

  return (
    <div className="flex justify-between border px-3 border-green-600">
      <div className="flex gap-8">
        {title}
        <ul className="flex gap-4 py-8 font-serif">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
          <li>
            <Link to={"/cart"}>Cart- {CartItems.length} items</Link>
          </li>
        </ul>
      </div>
      <Button colorScheme="teal" variant="solid">
        <Icon as={BiSolidUser} />
        Email
      </Button>
      {/* ✅ and login, logout button  */}
      <div className="flex gap-4 py-8">
        <div> {isOnline ? <div>✅</div> : <div>❌</div>}</div>
        <div className="bg-green-600 h-7 w-14 text-center rounded-lg text-white">
          {isLoggedIn ? (
            <button onClick={() => setIsLoggedIn(false)}>Logout</button>
          ) : (
            <button onClick={() => setIsLoggedIn(true)}>Login</button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Header;
