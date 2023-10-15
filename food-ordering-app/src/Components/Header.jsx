import React from "react";
import { LOGO_URL } from "../Utils/Constants";
import './Style.css'

const Header = () => {
  return (
    <>
      <header>
        <img src={LOGO_URL} alt="" />
        <nav>
          <ul>
            <li>Home</li>
            <li>Explore</li>
            <li>About</li>
            <li>Services</li>
            <button>Cart</button>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
