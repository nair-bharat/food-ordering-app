const RestaurantCard = ({name, cuisines, cloudinaryImageId, avgRating}) => {
  return (
    <>
      <div className="card">
        <img
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
            cloudinaryImageId
          }
          alt="food-item"
          className="card-image"
        />
        <h4>{name}</h4>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
      </div>
      
    </>
  );
};

export default RestaurantCard;
