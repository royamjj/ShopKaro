import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Fragment } from "react";

import ReactStars from "react-rating-stars-component";
import { useParams } from "react-router";
import "./ProductScreenCss.css";
import Loading from "../components/Loading";

import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../actions/productActions";

function ProductScreen() {
  const { id } = useParams();
  const dispatchCall = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatchCall(listProductDetails(id));
  }, [dispatchCall]);
  return (
    <Fragment>
      <Header />
      {loading ? (
        <h2>
          <Loading />
        </h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <div className="product-container">
          <img src={product.image} />
          <div className="product-items">
            <h1 style={{ margin: "20px" }}>{product.name}</h1>

            <div className="product-details">
              <div className="detail-heading">Description</div>
              <div>{product.description}</div>

              <div className="detail-heading">Reviews</div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                }}
              >
                <ReactStars
          size={20}
          count={5}
          value={parseFloat(product.rating)}
          starCount={5}
          edit={false}
          isHalf={true}
          activeColor="rgb(255, 0, 0)"
        />
                &#160;
                <span style={{paddingTop:"5px",}}>{product.numReviews} reviews</span>
                
              </div>

              <div className="detail-heading">Price</div>
              <div>
                <h3>
                  <b>Rs. {product.price}</b>
                </h3>
              </div>

              <div>
                {product.countInStock > 0 ? (
                  <h2 style={{ color: "rgb(99, 255, 125)" }}>
                    <i>In Stock</i>
                  </h2>
                ) : (
                  <h2 style={{ color: "rgb(232, 21, 21)" }}>
                    <i>Out Of Stock</i>
                  </h2>
                )}
              </div>
            </div>
            <div>
              <button
                className={
                  product.countInStock > 0
                    ? "btn btn-active"
                    : "btn btn-inactive"
                }
              >
                <i className="fas fa-shopping-cart"></i>&#160;Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default ProductScreen;
