import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import { IMG_CDN_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  async function getRestarauntInfo() {
    const data = await fetch(MENU_API + id);
    const res = await data.json();
    console.log(res.data);
    setRestaurant(res.data);
  }
  useEffect(() => {
    getRestarauntInfo();
  }, []);
  return (
    <div className="flex justify-center bg-green-900 text-white">
      <img
        className="w-64 h-48 p-5"
        src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
      ></img>
      <div className="p-5">
        <h1 className="font-bold text-3xl">{restaurant?.name}</h1>
        <h1 className="font-extralight text-lg">
          {restaurant?.cuisines?.join(", ")}
        </h1>
        <div className="flex text-sm">
          <h1>{restaurant?.sla?.deliveryTime} MINS</h1>
          <h1>{restaurant?.avgRatingString}</h1>
          <h1>{restaurant?.costForTwoMsg}</h1>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
