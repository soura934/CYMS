import React from 'react';
import { Link } from 'react-router-dom'

// import ProductIndexItem from './product_index_item'
import '../../stylesheets/product-index.css';

class ProductIndex extends React.Component {

    componentDidMount() {
        this.props.fetchProducts();
    }

    render() {
        if (!this.props.products) return null;
        if (!Array.isArray(this.props.products)) return null;

        let products = this.props.products.map((product) => {
            return (
                    <Link className='product-index-link' key={product._id}  to={`/product/${product.id}/${product._id}`}>
                        <ul className='product-item' >
                            <li>{product.title}</li>
                            <li><img src={product.image} alt=""/></li>
                            <li>${product.price}</li>
                        </ul>
                    </Link>
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