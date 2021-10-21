import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";
function Product({ product }) {
  return (
    <Fragment>
      <Link to={`/product/${product._id}`}>
        <img className="various-image" src={product.image} alt="image"/>
        <div className="various-info">{product.name}</div>
        <div>
          <h3>
            <b>Rs. {product.price}</b>
          </h3>
        </div>
      </Link>
      <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
        <StarRatings
          rating={product.rating}
          numberOfStars={5}
          isSelectable={false}
          isAggregateRating={true}
          starRatedColor="rgb(255, 0, 0)"
          starDimension="20px"
          starSpacing="2px"
        />
        {product.numReviews} reviews
      </div>
    </Fragment>
  );
}

export default Product;
