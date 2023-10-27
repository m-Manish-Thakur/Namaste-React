import React from "react";
import { LOGO_URL } from "../Utils/Constants";
import './Style.css'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <img src="https://w7.pngwing.com/pngs/486/458/png-transparent-web-development-e-commerce-logo-electronic-business-ecommerce.png" alt="" />
        <nav>
          <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='/about'><li>About</li></Link>
            <Link to='/contact'><li>Contact</li></Link>
            <Link to='/resturantMenu'><li>Explore</li></Link>
          <button type="button" className="btn btn-success">Cart</button> 
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
