import { img_cdn_url } from "../consets";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/Cartslice";
import { removeItem } from "../utils/Cartslice";


const Cartmenu = ({ name, imageId, price, defaultPrice }) => {
    const dispatch =useDispatch();
const handleclearcart=()=>{
    dispatch(removeItem());

}

    return (
        <div className="mx-2 bg-slate-50 shadow-lg w-44 h-72 p-2 m-2 flex flex-col">
            <div>
            <img  src={img_cdn_url + imageId} alt="Menu Item Image" className=" w-40 border border-solid h-32" />
            </div>
            <div className="h-1/3">
            <span className="p-2 m-2">
                <h1 className="font-bold text-sm">{name}</h1>
                {price ? <p className="font-normal text-orange-400">Price: ₹{price / 100}</p> : <p className="font-normal  text-orange-400">Price: ₹{defaultPrice / 100}</p>}
            </span>
            </div>
           
            <div className="my-6 mx-24 ">
            <button className="bg-yellow-300 text-sm rounded-xl text-white  p-1 m-1" onClick={()=>handleclearcart()}>Remove</button>
            </div>
            

        </div>
    )
}

export default Cartmenu;