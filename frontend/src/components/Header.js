import React from "react";
import "../App.css";
import { useState } from "react";
import { Link } from "react-router-dom";
export function Header() {
  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <header className="header">
      <div className="header-logo">
        <Link to={"/"} style={{ textDecoration: 'none' }}>
          <p className="logo-name" id="logo">
            ShopKaro
          </p>
        </Link>
      </div>

      <div
        className={isActive ? "header-info header-info-active" : "header-info"}
      >
        <div className="search">
          <input
            type="text"
            className="search-input"
            placeholder="Search for Items"
          />
          <button className="btn">Search</button>
        </div>
        <div className="header-user">
          <Link className="cred" to="/login" style={{ textDecoration: 'none'}}>
          <i className="fas fa-user"></i>&#160;Login
          </Link>
          <Link className="cred" to="/cart" style={{ textDecoration: 'none' }}>
          <i className="fas fa-shopping-cart"></i>&#160;Cart
          </Link>
        </div>
      </div>

      <div
        className={isActive ? "burger toggle" : "burger"}
        onClick={toggleClass}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </header>
  );
}