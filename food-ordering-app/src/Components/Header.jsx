import React from "react";
import { LOGO_URL } from "../Utils/Constants";
import "./Style.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/2560px-Swiggy_logo.svg.png"
          alt=""
        />
        <nav>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
            <Link to="/resturantMenu">
              <li>Explore</li>
            </Link>
            <button type="button" className="bg-red-500">
              Cart
            </button>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
