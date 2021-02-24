import React from 'react';

class CartItem extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        debugger
        this.props.fetchOneCartItem(this.props.productId)
    }


    render() {
        debugger
        if (!this.props.product) {
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