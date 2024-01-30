import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    return (
      <div className="header">
        <div>
          <img className="logo"
            
            src={LOGO_URL}
          ></img>
        </div>
        <div className="nav-items">
          <ul>
            <li>
            <Link to="/">HOME</Link>

            </li>
            <li>
            <a href="/about">About Us</a>
            
             </li>
            <li>
            <Link to="/contact"> Contact Us</Link>
            </li>
            <li>Cart</li>
            <div>
              <button className="login-btn">login</button>
              <button>logout </button>
            </div>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;