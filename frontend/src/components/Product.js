import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import StarComponent from "./StarComponent";
function Product({ product }) {
  return (
    <Fragment>
      <Link to={`/products/${product._id}`}>
        <img className="various-image" src={product.image} alt="product show" />
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
        <StarComponent props={{size: 20, rating:product.rating, isEditable:false}}/>
        <span style={{paddingTop:"5px",}}>{product.numReviews} reviews</span>
        
      </div>
    </Fragment>
  );
}

export default Product;
