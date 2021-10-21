import React, {useEffect, useState} from "react";
import { Fragment } from "react";
import "../App.css";
import Product from "./Product";
import axios from 'axios';
import Loading from './Loading';

export function HomeProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function fetchProducts(){
      const {data} = await axios.get('/api/products/')
      setProducts(data);
    }
    fetchProducts();
    setTimeout(() => {
      
    }, 500);
    setLoading(false)
  }, [])

  return (
    <Fragment>
       {loading ? <Loading/> : (
         <main>
         <div className="heading">
         <h1>Our top products..</h1>
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
         <h1>Various products..</h1>
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
