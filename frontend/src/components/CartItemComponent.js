import React from "react";
import products from "../products";
import './CartProductCss.css';
import '../App.css';
import { Link } from "react-router-dom";
export default function CartItemComponent({props}){
    return(
        <div className="cart-item-container">
            <div className="cart-item-image">
            <img  src={props.image} alt="item logo" />
            </div>
            <div className="cart-item-details">
                <div className="cart-item-details-name">
                    <Link to={`/products/${props._id}`}>
                        <h2>{props.name}</h2>
                    </Link>
                </div>
                <div className="cart-item-details-all">
                    <p><span style={{color:"darkgreen"}}>Quantity: </span>{props.quantity}</p>
                    <p><span style={{color:"green"}}>Total: </span>Rs {props.total}</p>
                    <p className="cart-item-delete"><i className="fa fa-trash" aria-hidden="true"></i></p>
                </div>
            </div>
        </div>
    );
}