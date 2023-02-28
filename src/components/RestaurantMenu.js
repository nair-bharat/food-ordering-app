import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem, removeItem } from "../utils/cartSlice";
import { MENU_API } from "../utils/constants";
import { IMG_CDN_URL } from "../utils/constants";
import ShimmerMenu from "./ShimmerMenu";
import { convertPrice } from "../utils/convertPrice";
import star_rating from "../assets/images/star-rating.png";

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
      <div className="flex flex-col md:flex-row justify-center bg-red-800 text-gray-200 items-center p-2">
        <img
          className="w-48 h-32 md:w-64 md:h-48 md:p-5 p-2"
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
        ></img>
        <div className="md:p-5 p-2 flex flex-col items-center">
          <h2 className="font-bold md:text-2xl md:px-5 text-xl">
            {restaurant?.name}
          </h2>
          <p className="font-extralight md:text-md md:px-5 text-md">
            {restaurant?.cuisines?.join(", ")}
          </p>
          <div className="flex md:font-bold md:text-sm text-sm">
            <div className="flex md:p-5 pt-1">
              <span className="w-4 h-4 pt-0.5 mx-0.5">
                <img src={star_rating} alt="star"></img>
              </span>
              <span>{restaurant?.avgRating}</span>
            </div>
            <div className="md:p-5 p-1">|</div>
            <div className="md:p-5 p-1">
              {restaurant?.sla?.deliveryTime} MINS
            </div>
            <div className="md:p-5 p-1">|</div>
            <div className="md:p-5 p-1">{restaurant?.costForTwoMsg}</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        {Object.values(restaurant?.menu?.items)
          ?.slice(0, 20)
          ?.map((item) => (
            <div
              className="md:p-5 p-2 md:m-5 m-2 mt-5 border border-solid flex md:w-[650px] w-64 justify-between"
              key={item.id}
            >
              <div className="p-4">
                <div className="font-bold md:text-md text-sm p-1 ">
                  {item?.name}
                </div>
                <div className="md:text-sm text-xs p-1">
                  ₹ {convertPrice(item?.price)}
                </div>
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
                <div className="flex border border-solid w-28 my-4 text-xs">
                  <button
                    className="px-2 text-green-700 w-8"
                    onClick={() => removeCartItem(item)}
                  >
                    -
                  </button>

                  <div className="px-4 text-green-700 w-12 text-sm">
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
