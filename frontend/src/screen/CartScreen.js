import React, { Fragment, useState } from "react";
import { Header } from "../components/Header";
import "./CartScreenCss.css";
import CartItemComponent from "../components/CartItemComponent";
import products from "../products";

export default function CartScreen() {
  const cartItems =  products; 
  
  let totalPrice = 0;
  if (cartItems.length > 0){
    for (let i = 0; i < cartItems.length; i++) {
      totalPrice += cartItems[i].price * cartItems[i].countInStock;
    }
  }
  // const [buttonState, setButtonState] = useState(cartItems.length > 0 ? true : false);
  let num = totalPrice.toFixed(2); 
  return (
    <Fragment>
      <Header />
      <div className="cart-heading">
        <h1>Your Cart</h1>
      </div>
      <div className="cart-container">
        <div className="cart-items">
          {cartItems.length === 0 
          ? <h2>Your shopping cart is empty! Start shopping now!!</h2>
          : cartItems.map(p => {
            return(
            <CartItemComponent props={{
              image: p.image,
              name: p.name,
              total: p.price * p.countInStock,
              quantity: p.countInStock,
              _id: p._id,
            }}
            key={p._id} />)
          })
        }
        </div>
        <div className="cart-total">
          <div>
            <h2>Total Amount of Cart:</h2>
            <p>Rs {num}</p>
          </div>
          <div className="cart-checkout">
        <button className={totalPrice > 0 ? "btn" : "btn btn-inactive"}>PROCEED TO CHECKOUT</button>
      </div>
        </div>
      </div>
    </Fragment>
  );
}