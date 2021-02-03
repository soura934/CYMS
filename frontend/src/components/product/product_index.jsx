import React from 'react';
import ProductIndexItem from './product_index_item'

class ProductIndex extends React.Component {

    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        if (!this.props.products) return null;

        let products = this.props.products.map((product) => {
            return (
                <ul>
                    <li>{product.title}</li>
                    <li>{product.price}</li>
                    <li>{product.description}</li>
                </ul>
            )
        })
        
        return (
            <div>
                {/* {this.props.products[0].title} 
                {this.props.products[0].description} 
                {this.props.products[0].price}  */}
                {products}

            </div>
        );
    }
}

export default ProductIndex;