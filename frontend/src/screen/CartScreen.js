import React, { Fragment } from "react";
import { Header } from "../components/Header";
import "./CartScreenCss.css";
import CartItemComponent from "../components/CartItemComponent";
import products from "../products";

export default function CartScreen() {
  const cartItems = products;
  let totalPrice = 0;
  for (let i = 0; i < products.length; i++) {
    totalPrice += products[i].price * products[i].countInStock;
  }
  let num = totalPrice.toFixed(2);
  return (
    <Fragment>
      <Header />
      <div className="cart-heading">
        <h1>Your Cart</h1>
      </div>
      <div className="cart-container">
        <div className="cart-items">
          {cartItems.map((p) => (
            <CartItemComponent
              props={{
                image: p.image,
                name: p.name,
                total: p.price * p.countInStock,
                quantity: p.countInStock,
                _id: p._id,
              }}
              key={p._id}
            />
          ))}
        </div>
        <div className="cart-total">
          <div>
            <h2>Total Amount of Cart:</h2>
            <p>Rs {num}</p>
          </div>
          <div className="cart-checkout">
        <button className="btn">PROCEED TO CHECKOUT</button>
      </div>
        </div>
      </div>
    </Fragment>
  );
}
