import { useEffect, useState } from "react";
import { SWIGGY_API } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  async function getRestaurants() {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();

    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  useEffect(() => {
    getRestaurants();
  }, []);

  const filterRestaurants = (searchInput, restaurants) => {
    const data = restaurants.filter((restaurant) => {
        console.log(restaurant);
      restaurant.data.name.toLowerCase().includes(searchInput.toLowerCase());
    });
    return restaurants;
  };

  return (
    <>
      <div>
        <input
          className="my-10 p-2 bg-gray-100"
          placeholder="Search a restaurant"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        ></input>
        <button
          className="bg-green-500 text-white p-2 mx-5 rounded-lg text-sm"
          onClick={() => {
            const data = filterRestaurants(searchInput, allRestaurants);
            setAllRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      {console.log(allRestaurants)}
      <div className="flex flex-wrap mx-20">
        {allRestaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant?.data} key={restaurant?.data?.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
