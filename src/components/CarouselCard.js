import { IMG_CDN_URL } from "../constants";
const CarouselCard = ({imageId}) =>{
    return (
       <div>
        <img src={IMG_CDN_URL + imageId} alt="" />
       </div>
    )
};
export default CarouselCard;