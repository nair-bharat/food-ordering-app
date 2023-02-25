import { useEffect, useState } from "react";
import { SWIGGY_API } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import ShimmerBody from "./ShimmerBody";
import { Link } from "react-router-dom";
import useOnline from "../hooks/useOnline";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState(null);
  const [filteredRestaurants, setFilteredRestaurants] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  async function getRestaurants() {
    const data = await fetch(SWIGGY_API);
    const json = await data?.json();

    let restaurantInfo =
      json?.data?.cards?.length == 3
        ? json?.data?.cards[2]
        : json?.data?.cards[0];

    setAllRestaurants(restaurantInfo?.data?.data?.cards);
    setFilteredRestaurants(restaurantInfo?.data?.data?.cards);
  }

  useEffect(() => {
    getRestaurants();
  }, []);

  const filterRestaurants = (searchInput, restaurants) => {
    const filterData = restaurants.filter((restaurant) =>
      restaurant.data.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    return filterData;
  };

  /*
  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>Hey looks like you are offline, please check the internet connection!</h1>;
  }*/
  
  return (
    <>
      <div className="flex justify-center h-[100px] items-center m-auto">
        <input
          className="my-10 p-2 bg-gray-100 basis-96 rounded-md text-sm"
          placeholder="Search a restaurant"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        ></input>
        <button
          className="bg-green-500 text-white p-2 mx-5 rounded-lg text-sm"
          onClick={() => {
            const data = filterRestaurants(searchInput, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        {console.log(allRestaurants)}
      </div>
      {!allRestaurants ? (
        <ShimmerBody />
      ) : (
        <div className="flex flex-wrap mx-12">
          {filteredRestaurants?.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant?.data?.id}
                key={restaurant?.data?.id}
              >
                <RestaurantCard
                  {...restaurant?.data}
                  key={restaurant?.data?.id}
                />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;
