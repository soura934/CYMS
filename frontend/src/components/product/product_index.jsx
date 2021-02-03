import React from 'react';
import ProductIndexItem from './product_index_item'
import '../../stylesheets/product-index.css';

class ProductIndex extends React.Component {

    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        if (!this.props.products) return null;

        let products = this.props.products.map((product) => {
            return (
                    <ul className="product-item">
                        <li>{product.title}</li>
                        {/* <img src="/assets/adjustable desktop.png" alt=""/> */}
                        <li>${product.price}</li>
                        {/* <li>{product.description}</li> */}
                    </ul>
            )
        })
        
        return (
            <div className='product-index'>
                {products}
            </div>
        );
    }
}

export default ProductIndex;