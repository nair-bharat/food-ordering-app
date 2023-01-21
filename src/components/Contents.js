import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../Constants";
import { useEffect, useState } from "react";
import ShimmerPage from "./ShimmerPage";

const findRestaurants = (searchInput, restaurants) => {
  const filteredValues = restaurants.filter((restaurant) =>
    restaurant.data.name.toUpperCase().includes(searchInput.toUpperCase())
  );

  return filteredValues;
};

const Contents = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState();
  const [allRestaurants, setAllRestaurants] = useState();

  async function getRestaurantsData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data?.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  useEffect(() => {
    getRestaurantsData();
  }, []);

  if (!allRestaurants) {
    return <ShimmerPage />;
  }

  return (
    <>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Food restaurants at this corner..."
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const data = findRestaurants(searchInput, allRestaurants);
            console.log(data);
            setFilteredRestaurants(data);
          }}
        >
          Find here
        </button>
      </div>

      <div className="cards">
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Contents;
