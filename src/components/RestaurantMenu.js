import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import { IMG_CDN_URL } from "../utils/constants";
import ShimmerMenu from "./ShimmerMenu";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  async function getRestarauntInfo() {
    const data = await fetch(MENU_API + id);
    const restaurantInfo = await data?.json();
    console.log(restaurantInfo?.data);
    setRestaurant(restaurantInfo?.data);
  }
  useEffect(() => {
    getRestarauntInfo();
  }, []);

  if (!restaurant) {
    return <ShimmerMenu />;
  }

  return (
    <>
      <div className="flex justify-center bg-green-800 text-gray-200">
        <img
          className="w-64 h-48 p-5"
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
        ></img>
        <div className="p-5">
          <h2 className="font-bold text-2xl px-5">{restaurant?.name}</h2>
          <p className="font-extralight text-md px-5">
            {restaurant?.cuisines?.join(", ")}
          </p>
          <div className="flex font-bold text-sm">
            <div className="flex p-5">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                height="1.25rem"
                width="1rem"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"></path>
              </svg>
              <span>{restaurant?.avgRatingString}</span>
            </div>
            <div className="p-5">|</div>
            <div className="p-5">{restaurant?.sla?.deliveryTime} MINS</div>
            <div className="p-5">|</div>
            <div className="p-5">{restaurant?.costForTwoMsg}</div>
          </div>
        </div>
      </div>

      <div className="first-letter:">
        {Object.values(restaurant?.menu?.items)
          ?.slice(0, 20)
          ?.map((item) => (
            <div className="p-5 m-5 border border-solid flex">
              <div className="p-4">
                <div className="font-bold text-md p-1">{item?.name}</div>
                <div className="text-sm p-1">₹{item?.price / 100}</div>
                <div className="font-extralight text-sm p-1">
                  {item?.category}
                </div>
              </div>
              {item?.cloudinaryImageId && (
                <img
                  className="w-40 p-4"
                  src={IMG_CDN_URL + item?.cloudinaryImageId}
                ></img>
              )}
            </div>
          ))}
      </div>
    </>
  );
};

export default RestaurantMenu;
