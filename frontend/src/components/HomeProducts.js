import React from "react";
import { Fragment } from "react";
import "../App.css";
import Product from "./Product";
import products from "../products";
export function HomeProducts() {
  return (
    <Fragment>
      <main>
        <div className="heading">
          <h1>Our top products..</h1>
        </div>
        <div className="top-product">
          <div className="left-symbol">&lsaquo;</div>
          <div className="right-symbol">&rsaquo;</div>
          <div className="top-product-img"></div>
          <div className="top-product-info">
            <p>Airpods Wireless Bluetooth Headphones</p>
            <button className="btn buy-now">Buy now &#8594;</button>
          </div>
        </div>

        <div className="various-products">
          <h1>Various products..</h1>
          <div className="various-container">
            {products.map((product) => (
              <div className="each-various-product" key={product._id}>
                <Product product={product} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </Fragment>
  );
}
