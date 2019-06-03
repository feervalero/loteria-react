import React from 'react';
import ProductDetail from './ProductDetail';

const FeaturedProduct = (props) => {
    console.log("FeaturedProduct",props.productDetail);
    if (props.productDetail) return (
    <div>
        <ProductDetail productDetail={props.productDetail} />
    </div>
    )
    return (<div>No products found</div>)
};
 
export default FeaturedProduct;