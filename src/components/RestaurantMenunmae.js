import { img_cdn_url } from "../consets";

const RestaurantMenu = ({ name, imageId, price, defaultPrice }) => {


    return (
        <div className="flex ">
            <img src={img_cdn_url + imageId} alt="Menu Item Image" className="h-40 w-40 border border-solid rounded-lg " />
            <span className="p-2 m-2">
                <h1 className="font-bold">{name}</h1>
                {price ? <p className="font-normal">Price: ₹{price / 100}</p> : <p className="font-normal">Price: ₹{defaultPrice / 100}</p>}
            </span>

        </div>
    )
}

export default RestaurantMenu;