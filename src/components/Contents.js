import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../Constants";

const Contents = () => {
  return (
    <div className="cards">
      {restaurantList.map((restaurant) => {
        return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
      })}
    </div>
  );
};

export default Contents;