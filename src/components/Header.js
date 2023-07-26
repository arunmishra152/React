import { APP_LOGO } from "../utils/constants";

const Header = () => {
    return (
      <div className="heading">
        <div className="logo-container">
          <img
            className="logo"
            src= {APP_LOGO}
          ></img>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;