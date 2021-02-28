import React from 'react';
import { Link } from 'react-router-dom'

import '../../stylesheets/cart.css'

class CartItem extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        
        this.props.fetchOneCartItem(this.props.productId)  
    }

    render() {
               
        if (!this.props.product) {
            return null
        } else {
            return (
                <div className="cart-item">
                    <Link to={`/product/${this.props.product.id}/${this.props.product._id}`}>
                        <img className="cart-img" src={this.props.product.image} alt=""/>
                    </Link>

                    <div className="cart-detail">
                        <Link to={`/product/${this.props.product.id}/${this.props.product._id}`}>
                            <p className="cart-title">{this.props.product.title}</p>
                        </Link>
                            <p className="cart-price">  ${this.props.product.price}</p>
                    </div>
                </div>
            )
        }
    }
}

export default CartItem;