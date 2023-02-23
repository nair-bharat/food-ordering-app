import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import store from "../utils/store";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const price = useSelector((store) => store.cart.total);
  return (
    <div className="flex justify-between shadow-lg">
      <img className="w-28" src={logo} alt="logo" />
      <div>
        <ul className="flex py-8">
          <li className="px-5">
            <Link to="/">Home</Link>
          </li>
          <li className="px-5">
            <Link to="about">About</Link>
          </li>
          <li className="px-5">
            <a>Contact</a>
          </li>
          <li className="px-5">
            <Link to="cart">
              Cart - {cartItems.length}, {price}
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
