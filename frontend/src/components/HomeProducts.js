import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import "../App.css";

import Product from "./Product";
import Loading from "./Loading";

import { useDispatch, useSelector } from "react-redux";
//useSelector helps us select which reducer from the list

import { listProducts } from "../actions/productActions";

export function HomeProducts() {
  const dispatchCall = useDispatch();

  //selecting which state
  const productListState = useSelector((state) => state.productList);

  //destructuring state
  const { error, loading, products } = productListState;

  useEffect(() => {
    //dispatching action
    dispatchCall(listProducts());
  }, [dispatchCall]);

  return (
    <Fragment>
      {loading ? (
        <h2><Loading/></h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <main>
          <div className="heading">
            <h1>
              Our{" "}
              <span style={{ color: "rgb(255, 28, 123)", fontWeight: 900 }}>
                <b>Top</b>
              </span>{" "}
              products..
            </h1>
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
            <h1>Various products . . .</h1>
            <div className="various-container">
              {products.map((product) => (
                <div className="each-various-product" key={product._id}>
                  <Product product={product} />
                </div>
              ))}
            </div>
          </div>
        </main>
      )}
    </Fragment>
  );
}
