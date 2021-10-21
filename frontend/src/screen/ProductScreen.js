import React, {useEffect, useState} from "react";
import { Header } from "../components/Header";
import { Fragment } from "react";

import StarRatings from "react-star-ratings";
import { useParams } from "react-router";
import "./ProductScreenCss.css";
import axios from 'axios';


function ProductScreen() {
  const { id } = useParams();

  const [product, setProduct] = useState([]);
  useEffect(() => {
    async function fetchProduct(){
      const {data} = await axios.get(`/api/products/${id}`);
      console.log(data);
      setProduct(data);
    }
    fetchProduct();

  }, [])
  

  return (
    <Fragment>
      <Header />
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
              <StarRatings
                rating={product.rating}
                numberOfStars={5}
                isSelectable={false}
                isAggregateRating={true}
                starRatedColor="rgb(255, 0, 0)"
                starDimension="20px"
                starSpacing="2px"
              />&#160;
              {product.numReviews} reviews
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
            <button className={product.countInStock > 0 ? "btn btn-active": "btn btn-inactive"}>
              <i className="fas fa-shopping-cart"></i>&#160;Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ProductScreen;
