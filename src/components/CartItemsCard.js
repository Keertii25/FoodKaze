import { GoTrash } from "react-icons/go";
import { IMG_CDN_URL } from "../constants";

const CartItemsCard = ({ name, imageId, defaultPrice }) => { 
  return (
    <div className="w-full flex items-center justify-between gap-3 mt-2 border-[1px] p-1">
      <img
        className="h-24 w-24 object-cover rounded-full shadow-md"
        src={IMG_CDN_URL + imageId}
      />
      <div className="flex items-center gap-12">
        <div className="flex flex-col">
          <h2 className="text-lg font-bold whitespace-normal">{name}</h2>
          {defaultPrice?<h3 className="text-right">{"₹" + defaultPrice/100}</h3>:<h3 className="text-right">₹100</h3>}
          
        </div>
        <GoTrash className="text-2xl text-red-500"/>
      </div>
    </div>
  );
};
export default CartItemsCard;
