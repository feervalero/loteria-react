import React, { Component } from 'react';

class ProductsService extends Component {
    state = {  }
    
    getData(){
        fetch("http://localhost/api/odata/Products").then(data => {
            this.setState(data);    
            console.log(data);
        });
    }

    render() { 
        return ( <h1></h1> );
    }
}
 
export default ProductsService;