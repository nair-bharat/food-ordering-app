import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import MenuItem from "./MenuItem";
import restaurant_img from "../assets/images/restaurant.png";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const total = useSelector((store) => store.cart.total);

  const dispatch = useDispatch();
  console.log(cartItems);

  const handleClearCart = () => {
    console.log("clearcart");
    dispatch(clearCart());
  };

  function removeDuplicates(cartItems) {
    return cartItems.filter((item, index) => cartItems.indexOf(item) === index);
  }

  const uniqueCartItems = removeDuplicates(cartItems);

  console.log(cartItems);
  return cartItems.length == 0 ? (
    <div className="flex flex-col justify-center items-center mx-2 my-4 border-2 border-solid text-md p-2">
      <img src={restaurant_img} alt="cooking" className="w-64" />
      <h3 className="text-sm my-4">Nothing in the cart!</h3>
      <Link to="/">
        <button className="p-2 bg-green-600 text-white text-xs my-2 rounded-sm">
          SEARCH RESTAURANTS
        </button>
      </Link>
    </div>
  ) : (
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
        {uniqueCartItems.map((item, index) => (
          <MenuItem key={`${index}+_+${item.id}`} item={item} />
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
