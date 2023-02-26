import React from "react";
import { useSelector } from "react-redux";
import logoImage from "../../assets/images/logo.png";

export default function Navbar({ setOpenCartPage }) {
  const carts = useSelector((state) => state.carts);

  const totalCart = carts?.reduce((prev, item) => {
    return prev + item.quantity;
  }, 0);

  const handleOpenCart = () => {
    setOpenCartPage(true);
  };

  const handleCloseCart = () => {
    setOpenCartPage(false);
  };

  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <a href="index.html">
          <img src={logoImage} alt="LWS" className="max-w-[140px]" />
        </a>

        <div className="flex gap-4">
          <button
            type="button"
            onClick={handleCloseCart}
            className="navHome"
            id="lws-home"
          >
            {" "}
            Home{" "}
          </button>
          <button
            type="button"
            onClick={handleOpenCart}
            className="navCart"
            id="lws-cart"
          >
            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
            <span id="lws-totalCart">{totalCart}</span>
          </button>
          {/* <a href="#home" className="navHome" id="lws-home">
            {" "}
            Home{" "}
          </a>
          <a href="cart.html" className="navCart" id="lws-cart">
            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
            <span id="lws-totalCart">0</span>
          </a> */}
        </div>
      </div>
    </nav>
  );
}
