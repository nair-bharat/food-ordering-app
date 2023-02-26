import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem, removeItem } from "../utils/cartSlice";
import { MENU_API } from "../utils/constants";
import { IMG_CDN_URL } from "../utils/constants";
import ShimmerMenu from "./ShimmerMenu";
import { convertPrice } from "../utils/convertPrice";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  async function getRestarauntInfo() {
    const data = await fetch(MENU_API + id);
    const restaurantInfo = await data?.json();
    setRestaurant(restaurantInfo?.data);
  }

  useEffect(() => {
    getRestarauntInfo();
  }, []);

  if (!restaurant) {
    return <ShimmerMenu />;
  }

  const addCartItem = (item) => {
    dispatch(addItem(item));
  };

  const removeCartItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <>
      <div className="flex md:justify-center bg-green-800 text-gray-200">
        <img
          className="w-32 h-24 md:w-64 md:h-48 md:p-5 p-2"
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
        ></img>
        <div className="md:p-5 p-2">
          <h2 className="font-bold md:text-2xl md:px-5 text-lg">{restaurant?.name}</h2>
          <p className="font-extralight md:text-md md:px-5 text-sm">
            {restaurant?.cuisines?.join(", ")}
          </p>
          <div className="flex md:font-bold md:text-sm text-xs">
            <div className="flex md:p-5 pt-1">
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
            <div className="md:p-5 p-1">|</div>
            <div className="md:p-5 p-1">{restaurant?.sla?.deliveryTime} MINS</div>
            <div className="md:p-5 p-1">|</div>
            <div className="md:p-5 p-1">{restaurant?.costForTwoMsg}</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-start">
        {Object.values(restaurant?.menu?.items)
          ?.slice(0, 20)
          ?.map((item) => (
            <div className="md:p-5 p-2 md:m-5 m-2 mt-5 border border-solid flex md:w-[650px] w-[350px] justify-between" key={item.id}>
              <div className="p-4">
                <div className="font-bold md:text-md text-sm p-1 ">{item?.name}</div>
                <div className="md:text-sm text-xs p-1">₹ {convertPrice(item?.price)}</div>
                <div className="font-extralight md:text-sm text-xs p-1">
                  {item?.category}
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                {item?.cloudinaryImageId && (
                  <img
                    className="md:w-40 w-24"
                    src={IMG_CDN_URL + item?.cloudinaryImageId}
                  ></img>
                )}
                <div className="flex border border-solid w-28 my-4">
                  <button
                    className="px-2 text-green-700 w-8"
                    onClick={() => removeCartItem(item)}
                  >
                    -
                  </button>

                  <div className="px-4 text-green-700 w-12">
                    {
                      cartItems.filter((cartItem) => cartItem.id === item.id)
                        .length
                    }
                  </div>
                  <button
                    className="px-1 text-green-700 w-8"
                    onClick={() => addCartItem(item)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default RestaurantMenu;
