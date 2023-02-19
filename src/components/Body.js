import { useEffect, useState } from "react";
import { SWIGGY_API } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import ShimmerBody from "./ShimmerBody";
import { Link } from "react-router-dom";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  async function getRestaurants() {
    const data = await fetch(SWIGGY_API);
    const json = await data?.json();

    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
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
      </div>
      {allRestaurants?.length === 0 ? (
        <ShimmerBody />
      ) : (
        <div className="flex flex-wrap mx-12">
          {filteredRestaurants?.map((restaurant) => {
            return (
              <Link to={"/restaurant/" + restaurant?.data?.id}>
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
