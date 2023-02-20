import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Header = () => {
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
            <a>Cart</a>
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
