import { useDispatch, useSelector } from "react-redux";
import { convertPrice } from "../utils/convertPrice";
import { addItem, removeItem } from "../utils/cartSlice";

const MenuItem = ({ item }) => {
  const { id, name, price } = item;
  console.log(item);
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const addCartItem = (item) => {
    dispatch(addItem(item));
  };

  const removeCartItem = (item) => {
    dispatch(removeItem(item));
  };

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
