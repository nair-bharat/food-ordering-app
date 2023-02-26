import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import MenuItem from "./MenuItem";
import restaurant_img from "../assets/images/restaurant.png";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const total = useSelector((store) => store.cart.total);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    console.log("clearcart");
    dispatch(clearCart());
  };

  function removeDuplicates(cartItems) {
    return cartItems.filter((item, index) => cartItems.indexOf(item) === index);
  }

  const uniqueCartItems = removeDuplicates(cartItems);

  return cartItems.length == 0 ? (
    <div className="flex flex-col justify-center items-center mx-2 my-4 border-2 border-solid text-md p-2">
      <img src={restaurant_img} alt="cooking" className="w-64" />
      <h3 className="text-sm my-4">No food in the cooking pan!</h3>
      <Link to="/">
        <button className="p-2 bg-green-600 text-white text-xs my-2 rounded-sm">
          SEARCH RESTAURANTS
        </button>
      </Link>
    </div>
  ) : (
    <div className="m-5 w-auto p-6">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-lg text-green-600">Food Items</h1>
        <button
          className="bg-green-600 text-white rounded-md text-xs w-20 h-6"
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
      <div className="border border-black my-4"></div>
      <div className="flex font-bold">
        <h3 className="pr-1">Total Amount:</h3>
        <h3 className="pl-1">₹{total}</h3>
      </div>
      <button className="bg-green-600 text-white text-sm p-1 mt-4">
        PROCEED TO PAY
      </button>
    </div>
  );
};

export default Cart;
