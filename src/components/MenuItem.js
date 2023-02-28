import { useDispatch, useSelector } from "react-redux";
import { convertPrice } from "../utils/convertPrice";
import { addItem, removeItem } from "../utils/cartSlice";

const MenuItem = ({ item }) => {
  const { id, name, price } = item;
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const addCartItem = (item) => {
    dispatch(addItem(item));
  };

  const removeCartItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div className="flex text-sm my-3">
      <h2 className="mr-2">{name}</h2>
      <div className="flex border border-solid w-16">
        <button
          className="px-1 text-green-700 w-4"
          onClick={() => removeCartItem(item)}
        >
          -
        </button>
        <div className="px-2 text-green-700 w-7 md:pt-0 pt-1.5">
          {cartItems.filter((cartItem) => cartItem.id === id).length}
        </div>

        <button
          className="px-1 text-green-700 w-4"
          onClick={() => addCartItem(item)}
        >
          +
        </button>
      </div>
      <h2 className="ml-1">₹{convertPrice(price)}</h2>
    </div>
  );
};

export default MenuItem;
