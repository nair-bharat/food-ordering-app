import { IMG_CDN_URL } from "../utils/constants";

const MenuItem = ({ cloudinaryImageId, name, price }) => {
  return (
    <div>
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="menu-item" />
      <h2>{name}</h2>
      <h2>{price}</h2>
    </div>
  );
};


export default MenuItem;
