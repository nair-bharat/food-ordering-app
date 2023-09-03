import { IMG_CDN_URL } from "../utils/constants";
import veg_icon from "../assets/images/veg-icon.png";
import non_veg_icon from "../assets/images/non-veg-icon.png";
import star_rating from "../assets/images/star-rating.png";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  sla,
  costForTwo,
  veg,
}) => {
  return (
    <div className="w-60 p-2 md:w-64 md:p-4 md:m-5 hover:shadow-lg rounded-md bg-yellow-50 mb-4">
      <img
        className="rounded-sm"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="food-image"
      />
      <div className="flex justify-between">
        <div className="font-bold">{name}</div>
        {veg?.toString() === "true" ? (
          <img className="p-2 h-7 w-7" src={veg_icon} alt="food-image" />
        ) : (
          <img className="p-2 h-7 w-7" src={non_veg_icon} alt="food-image" />
        )}
      </div>

      <div className="text-xs md:text-sm">{cuisines?.join(", ")}</div>
      <div className="flex justify-between text-xs font-medium md:py-3 pt-1.5 w-56">
        {parseFloat(avgRating) >= 4 ? (
          <div className="text-white md:flex flex bg-green-500">
            <span className="pt-1.5 pl-1">
              <img src={star_rating} alt="star" className="w-3 h-3"></img>
            </span>
            <span className="p-1 pr-1.5">{avgRating}</span>
          </div>
        ) : (
          <div className="text-white md:flex flex bg-orange-500">
            <span className="pt-1.5 pl-1">
              <img src={star_rating} alt="star" className="w-3 h-3"></img>
            </span>
            <span className="p-1 pr-1.5">{avgRating}</span>
          </div>
        )}

        <div className="text-xs px-2 py-1 font-medium text-gray-600">
          {sla?.deliveryTime} MINS
        </div>
        <div></div>
        <div className="text-xs px-2 py-1 font-medium text-gray-600">
          {costForTwo}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
