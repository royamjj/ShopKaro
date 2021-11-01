import React, { Fragment } from 'react';
import './TopBrandsCss.css';
function TopBrands(){
    return(
        <Fragment>
            <h1 className="top-brand-heading">Our Top Brands</h1>
            <div className="top-brands-container">
            <img src="/images/logitech.png" alt="top-brand"></img>
            <img src="/images/sony.png" alt="top-brand"></img>
            <img src="/images/amazon.jpg" alt="top-brand"></img>
            <img src="/images/apple.png" alt="top-brand"></img>
            </div>
        </Fragment>
    );
}
export default TopBrands;