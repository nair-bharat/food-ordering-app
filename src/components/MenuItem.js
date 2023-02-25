import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";
import store from "../utils/store";
import { addCartItem, removeCartItem } from "../utils/cartActions";
import { convertPrice } from "../utils/convertPrice";

const MenuItem = ({ id, name, price }) => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex">
      <h2>{name}</h2>
      <div className="flex border border-solid w-16">
        <button
          className="px-2 text-green-700"
          onClick={() => removeCartItem(item)}
        >
          -
        </button>
        <div className="px-2 text-green-700">
          {cartItems.filter((cartItem) => cartItem.id === id).length}
        </div>

        <button
          className="px-1 text-green-700"
          onClick={() => addCartItem(item)}
        >
          +
        </button>
      </div>
      <h2>{convertPrice(price)}</h2>
    </div>
  );
};

export default MenuItem;
