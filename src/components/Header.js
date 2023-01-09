const Title = () => {
  const logo = require("../assets/images/food_corner_logo.png");
  return (
    <a href="/">
      <img className="logo" src={logo} alt="logo" />
    </a>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <a href="#home">
            <li>Home</li>
          </a>
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#contact">
            <li>Contact</li>
          </a>
          <a href="#contact">
            <li>Cart</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Header;
