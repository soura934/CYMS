import React from 'react';

class CartItem extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.fetchOneCartItem(this.props.cartitem)
    }

    render() {
        if (!this.props.bread) {
            return null
        } else {
            return (
                <div>
                    <li>{this.props.product.title}</li>
                </div>
            )
        }
    }
}

export default CartItem;