import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../Constants";
import { useState } from "react";

const findRestaurants = (searchInput, restaurants) => {
  const filteredValues = restaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return filteredValues;
};

const Contents = () => {
  const [searchInput, setSearchInput] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);

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
            const data = findRestaurants(searchInput, restaurantList);
            setRestaurants(data);
          }}
        >
          Find here
        </button>
      </div>
      <div className="cards">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Contents;
