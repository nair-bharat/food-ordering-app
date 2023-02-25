import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import MenuItem from "./MenuItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const total = useSelector((store) => store.cart.total);

  const dispatch = useDispatch();
  console.log(cartItems);

  const handleClearCart = () => {
    console.log("clearcart")
    dispatch(clearCart());
  };
  return (
    <div className="">
      <div className="flex justify-between">
        <div>Cart Items</div>
        <button
          className="bg-green-900 text-white rounded-md text-xs w-20 h-6"
          onClick={() => handleClearCart()}
        >
          Clear Cart
        </button>
      </div>
      <div>
        {cartItems.map((item, index) => (
          <MenuItem key={`${index}+_+${item.id}`} {...item} />
        ))}
      </div>
      <div className="flex font-bold">
        <h3>To Pay</h3>
        <h3>₹ {total}</h3>
      </div>
      <button className="bg-green-600 text-white text-sm p-1">
        PROCEED TO PAY
      </button>
    </div>
  );
};

export default Cart;
