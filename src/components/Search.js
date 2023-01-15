import { useState } from "react";
import { restaurantList } from "../Constants";


//DUMMY COMPONENT FOR NOW

const findRestaurants = (searchInput, restaurants) => {
  const filteredValues = restaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return filteredValues;
};

const Search = () => {

  const [searchInput, setSearchInput] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);

  return (
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
  );
};

export default Search;
