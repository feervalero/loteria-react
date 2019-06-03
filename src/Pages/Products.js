import React ,{ Component } from "react";
import FeaturedProduct from "../components/featuredProduct";


class Products extends Component{

    
    state = {}
    
    componentDidMount(){
        console.log("DidMounting...");
        this.getProducts();
    }

    getProducts = ()=>{
        console.log("Getting products...");
        fetch("/products.json")
        .then(resp => resp.json())
        .then(datos=>{
            this.data = datos;
            const productone = this.data;
            this.setState({productone});
            const producttwo = this.data[1];
            this.setState({producttwo});
            
        });
    }

    render(){
        console.log("RENDER",this.state.productone);
        if(this.state.productone){
            return (
                <div>
                    {this.state.productone.map(productDetail => <FeaturedProduct key={productDetail.Id} productDetail={productDetail} />)}
                </div>
            );
        }return (<div></div>)
    }
}

export default Products;