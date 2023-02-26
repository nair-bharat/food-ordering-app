import { IMG_CDN_URL } from "../utils/constants";
import veg_icon from "../assets/images/veg-icon.png";
import non_veg_icon from "../assets/images/non-veg-icon.png";
import star_rating from "../assets/images/star-rating.png";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  deliveryTime,
  costForTwoString,
  veg,
}) => {
  return (
    <div className="w-36 p-2 m-4 lg:w-60 lg:p-2 hover:shadow-lg lg:m-4 rounded-sm">
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

      <div className="text-xs lg:text-sm">{cuisines?.join(", ")}</div>
      <div className="lg:flex text-xs font-medium lg:py-3">
        {parseFloat(avgRating) >= 4 ? (
          <div className="text-white lg:flex flex bg-green-500">
            <span className="pt-1.5 pl-1">
              <img src={star_rating} alt="star" className="w-3 h-3"></img>
            </span>
            <span className="p-1 pr-1.5">{avgRating}</span>
          </div>
        ) : (
          <div className="text-white lg:flex flex bg-orange-500">
            <span className="pt-1.5 pl-1">
              <img src={star_rating} alt="star" className="w-3 h-3"></img>
            </span>
            <span className="p-1 pr-1.5">{avgRating}</span>
          </div>
        )}

        <div className="text-xs px-2 py-1 font-medium text-gray-600">
          {deliveryTime} MINS
        </div>
        <div></div>
        <div className="text-xs px-2 py-1 font-medium text-gray-600">
          {costForTwoString}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
