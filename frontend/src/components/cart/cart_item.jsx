import React from 'react';

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
                    <li>{this.props.product.title}</li>
                    <li>{this.props.product.price}</li>
                    <li>{this.props.product.image}</li>
                </div>
            )
        }
    }
}

export default CartItem;