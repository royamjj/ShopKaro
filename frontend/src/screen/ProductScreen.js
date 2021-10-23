import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Fragment } from "react";
import { useParams } from "react-router";
import "./ProductScreenCss.css";
import Loading from "../components/Loading";
import "../components/CartButtonCss.css";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../actions/productActions";
import StarComponent from "../components/StarComponent";
import '../components/ValidatorCss.css';

function ProductScreen() {
  const { id } = useParams();
  const dispatchCall = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  
  useEffect(() => {
    dispatchCall(listProductDetails(id));
  }, [dispatchCall]);


  const [value, setValue] = useState(0);
  function decrease() {
    if (value > 0){
      setValue((curr) => {
        return curr - 1;
      })};
  }
  function increase() {
      if (value < 50){
      setValue((curr) => {
        return curr + 1;
      })};
  }
  function addToCartHandler(){
    if (value === 0){
      setValid(false)
      setTimeout(() => {
        setValid(true)
      }, 5000);
    }
  }
  const [isValid, setValid] = useState(true)

  return (
    <Fragment>
      <Header />
      <div className={!isValid ? "validater-div enter": "validater-div"}>Please select the quantity more than 0!!</div>
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
                <StarComponent props={{size: 20, rating:product.rating, isEditable:false}}/>
                &#160;
                <span style={{ paddingTop: "5px" }}>
                  {product.numReviews} reviews
                </span>
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
              {product.countInStock > 0 ? (
                <div className="cart-button-container">
                <button className="cart-button dec" onClick={decrease}>
                  -
                </button>
                <div className="item-value">{value}</div>
                <button className="cart-button inc" onClick={increase}>
                  +
                </button>
              </div>
              ) :<span></span>}
              <button
              onClick={addToCartHandler}
                className={
                  product.countInStock > 0
                    ? "btn btn-active"
                    : "btn btn-inactive"
                }
              >
                <i className="fas fa-shopping-cart" ></i>&#160;Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );

}
export default ProductScreen;
