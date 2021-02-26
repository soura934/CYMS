import React from 'react';
import { Link } from 'react-router-dom'
import '../../stylesheets/product-index.css';

class ProductIndex extends React.Component {
    constructor(props){
        super(props);
        this.getGreeting = this.getGreeting.bind(this);
    }

    componentDidMount() {
        this.props.fetchProducts();
    }
    
    getGreeting() {
        if (this.props.loggedIn){
            let name = this.props.user.firstName;
            let capped = name[0].toUpperCase() + name.slice(1);
            return (
                <div>Welcome, {capped}!</div>
            );
        } else {
            return null;
        }
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
            <div className='index-container'>
                {this.getGreeting()}

                <div className='banner'>
                    <div className='gradient'>
                <div className='product-index'>
                    {products}
                </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default ProductIndex;