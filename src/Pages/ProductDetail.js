import React ,{ Component } from "react";

class ProductDetail extends Component{
    
    render(){
        console.log(this.props.match.params.message);
        return (
            <h1 className="ProductDetail">Hello ProductDetail: {this.props.mesaje}</h1>
        );
    }
}

export default ProductDetail;