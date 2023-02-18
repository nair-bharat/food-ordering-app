import { IMG_CDN_URL } from "../utils/constants";
import veg_icon from "../assets/images/veg-icon.png";
import non_veg_icon from "../assets/images/non-veg-icon.png";

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
    <div className="w-64 p-5">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="food-image" />
      <div className="flex justify-between">
        <div className="font-bold">{name}</div>
        {veg?.toString() === "true" ? (
          <img className="p-2 h-7 w-7" src={veg_icon} alt="food-image" />
        ) : (
          <img className="p-2 h-7 w-7" src={non_veg_icon} alt="food-image" />
        )}
      </div>

      <div className="text-sm">{cuisines?.join(", ")}</div>
      <div className="flex">
        <div className="bg-green-500 text-white flex text-xs p-1">
          <span>
            <svg
              aria-hidden="true"
              className="w-3 h-4  text-xs text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          </span>
          <span>{avgRating}</span>
        </div>
        <div className="text-xs px-2 font-bold text-gray-600">
          {deliveryTime} MINS
        </div>
        <div></div>
        <div className="text-xs px-2 font-bold text-gray-600">
          {costForTwoString}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
