import React from 'react';
import { Link } from 'react-router-dom'
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
                    <Link className='product-item' key={product._id}  to={`/product/${product.id}/${product._id}`}>
                        <li>{product.title}</li>
                        <li><img src={product.image} alt=""/></li>
                        <li>${product.price}</li>
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