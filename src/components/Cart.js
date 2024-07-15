import react from "react";
import { useSelector } from "react-redux";

import Cartmenu from "./Cartmenu";
const Cart=()=>{
    // this is the place it will tell which we are subsribing too 
    const cartitems=useSelector(store=>store.cart.items);
    
    const totalPrice = cartitems.reduce((total, item) => total + (item?.card?.info?.price || item?.card?.info?.defaultPrice) / 100, 0);

    return (
      <div className=" flex  justify-between flex-col md:flex-row" >     
       <h > cart</h>
       <div className="flex flex-wrap my-24 items-center md:mx-0">
       {
        cartitems.map(item=><Cartmenu  key={item.card.info.id} {...item?.card?.info}/> )
       }
       </div>
       <div className="w-80 h-60 p-2 m-2 border border-solid shadow-lg text-center my-24">
                <h1 className="font-bold text-2xl">Cart Summary</h1>
                <h1 className="font-bold p-2 m-2">Total Qty Added: {cartitems.length} </h1>
                <h1 className="font-bold p-2 m-2">Total Amount: {Math.round(totalPrice)} </h1>
                <button className="bg-yellow-500 p-2 m-2 rounded-lg text-white">Order</button>
                {/* <Link to='/cart'><button className="outline outline-offset-2 outline-blue-500 rounded-md hover:bg-slate-100 font-extrabold block m-auto p-2">Check Out</button></Link> */}
        </div>
      
       
       </div>
    )
}
export default Cart;