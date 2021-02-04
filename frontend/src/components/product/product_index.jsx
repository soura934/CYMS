import React from 'react';
import { Link } from 'react-router-dom'


import '../../stylesheets/product-index.css';

class ProductIndex extends React.Component {

    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        if (!this.props.products) return null;

        let products = this.props.products.map((product) => {
            return (
                    <ul className="product-item" key={product._id}>
                        <li>
                            <Link to={`product/${product._id}`}>{product.title}</Link>
                        </li>
                        <li><img src={product.image} alt=""/></li>
                        <li>${product.price}</li>
                        
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