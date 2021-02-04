import React from 'react';
import { Redirect } from 'react-router-dom';


class ProductShow extends React.Component{

componentDidMount(){
    this.props.fetchProduct(this.props.match.params._id)
}

    render() {
        if (!this.props.product){
            return null;
        } 
    
        return (
                <div>
                    <h1>product show</h1>
                    <h1>{this.props.product.title}</h1>
                    <img src={this.props.product.image} alt=""/>
                    <p>{this.props.product.description}</p>
                </div>
            )

    }
}

export default ProductShow;