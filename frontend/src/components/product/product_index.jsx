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

                <div className='banner-container'>
                    <div className='banner'>
                        <h1>Browse Our Premium Tech Products</h1>
                        <div className='overlay'></div>
                        <img className='banner-img' src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80" alt=""/>
                    </div>
                </div>

                    {/* <div className='test'> */}
                        <div className='product-index'>
                            {products}
                        </div>

                    {/* </div> */}
                        {/* <div className='gradient'></div> */}

            </div>
        );
    }
}

export default ProductIndex;