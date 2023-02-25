import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import cart_icon from "../assets/images/cart-icon.png";
import store from "../utils/store";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between shadow-lg">
      <Link to="/">
        <img className="w-28" src={logo} alt="logo" />
      </Link>
      <div>
        <ul className="flex py-8">
          <li className="px-5 font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="px-5 font-bold">
            <Link to="about">About</Link>
          </li>
          <li className="px-5">
            <Link to="cart">
              <div className="flex">
                <img
                  className="w-6 bg-white"
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
