import React from "react";
import { LOGO_URL } from "../Utils/Constants";
import "./Style.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import store from "../Utils/appStore";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
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
            <button type="button" className="bg-slate-300 rounded-md">
              <Link to="/cart">
                <li className="font-bold">Cart-({cartItems.length})</li>
              </Link>
            </button>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
