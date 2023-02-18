import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <div className="flex justify-between shadow-lg">
      <img className="w-28" src={logo} alt="logo" />
      <div>
        <ul className="flex py-8">
          <li className="px-5">
            <a>Home</a>
          </li>
          <li className="px-5">
            <a>About</a>
          </li>
          <li className="px-5">
            <a>Contact</a>
          </li>
          <li className="px-5">
            <a>Cart</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
