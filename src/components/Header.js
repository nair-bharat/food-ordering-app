import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../assets/images/food-icon.png";
import cart_icon from "../assets/images/cart-icon.png";
import store from "../utils/store";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between shadow-lg bg-yellow-50">
      <Link to="/">
        <img className="w-28 md:w-32" src={logo} alt="logo" />
      </Link>
      <div>
        <ul className="flex flex-row py-10">
          <li className="md:px-5 font-bold text-sm px-2 md:text-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="md:px-5 font-bold text-sm px-2 md:text-lg">
            <Link to="about">About</Link>
          </li>
          <li className="md:px-5 px-2">
            <Link to="cart">
              <div className="flex">
                <img
                  className="md:w-6 w-5 bg-white"
                  src={cart_icon}
                  alt="cart-icon"
                />
                <div className="text-red-500 font-bold px-1">{cartItems.length}</div>
              </div>
            </Link>
          </li>
          <li className="px-5">
            <a>Login</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
