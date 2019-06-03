import React from 'react';
import './productDetail.css'

const ProductDetail = (props) => {
    console.log("ProductDetail",props);
 return (
    <div className="productDetail">
        <p>{props.productDetail.ModelNumber}</p>
        <p>{props.productDetail.Description}</p>
    </div>
 )
}; 
export default ProductDetail;