import { useSelector } from "react-redux";
import CartItemsCard from "./CartItemsCard";

const Cart = () => {
    const CartItems = useSelector(store => store.cart.items)
    console.log(CartItems)
    return (
        <>
        <h1 className="text-3xl font-semibold">CartItems - {CartItems.length}</h1>
        <div className="flex flex-wrap gap-10 ">
        {CartItems.map((items)=>{
            return <CartItemsCard {...items}/>
        })}
        </div>
        
        </>

    )
};
export default Cart;