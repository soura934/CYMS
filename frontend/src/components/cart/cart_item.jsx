import React from 'react';
import { Link } from 'react-router-dom'

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
                <div>
                    <Link to={`/product/${this.props.product.id}/${this.props.product._id}`}>
                        <li>{this.props.product.title}</li>
                        <img width="200" height="200" src={this.props.product.image} alt=""/>
                    </Link>
                        <li>${this.props.product.price}</li>
                </div>
            )
        }
    }
}

export default CartItem;