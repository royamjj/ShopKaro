import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
function Product({ product }) {
  return (
    <Fragment>
      <Link to={`/products/${product._id}`}>
        <img className="various-image" src={product.image} alt="image" />
        <div className="various-info">{product.name}</div>
        <div>
          <h3>
            <b>Rs. {product.price}</b>
          </h3>
        </div>
      </Link>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign:"center",
        }}
      >
        <ReactStars
          size={25}
          count={5}
          value={parseFloat(product.rating)}
          starCount={5}
          edit={false}
          isHalf={true}
          activeColor="rgb(255, 0, 0)"
        />
        <span style={{paddingTop:"5px",}}>{product.numReviews} reviews</span>
        
      </div>
    </Fragment>
  );
}

export default Product;
