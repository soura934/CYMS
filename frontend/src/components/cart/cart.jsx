import React from 'react'
import MainPageContainer from '../main/main_page_container';
import Footer from '../footer/footer';
import CartItem from './cart_item_container';

import '../../stylesheets/cart.css'

class Cart extends React.Component{
    constructor(props){
        super(props)

        this.deleteItem = this.deleteItem.bind(this);
        this.checkout = this.checkout.bind(this);
    }

    componentDidMount() {
        this.props.fetchCartItems(this.props.user)
    }

    deleteItem(productId){
        return e => this.props.removeProduct(productId).then(() => this.props.fetchCartItems(this.props.user))
    }

    checkout() {
        alert('your order is placed!');
    }

    render() {
        let totalprice = 0;
        let totalnumber;
        
       if (!this.props.cart){
           return null
       }

       if (this.props.cart.length === 0){
           return (
                <div className="splash">
                    <MainPageContainer /> 
                     <div>No Items are Currently in Cart.</div>
                    <footer id='footer'>
                        <Footer />
                    </footer>
                </div>
           )
       } else {
            let cartProducts = this.props.cart.map((product, idx) => {
                 totalprice += parseFloat(product.price)
                return (
                    <div className="cart-list" key={idx}>
                        <CartItem 
                        productId={product.cartItem}
                        />   
                        <button onClick={this.deleteItem(product._id)}>Delete</button>
                    </div>
                       
                )
            })  
            totalnumber = this.props.cart.length
            return (
                <div className="splash">
                    <MainPageContainer /> 
                    <div className="cart-main">
                        <h1>Your Cart</h1>

                            {cartProducts}
                        <div className="cart-info">
                            <p>Total price: $ <span className="cart-number">{totalprice}</span></p>
                            <p> <span className="cart-number">{totalnumber}</span> in cart</p>
                        </div>
                        <div className="checkout">
                            <button className="checkout-button" onClick={this.checkout}>Check Out</button>
                        </div>
                        <div>
                            {/* <button onClick=
                            {this.checkout, this.deleteItem(product._id)}
                            >Check Out</button> */}
                        </div>
                    </div>
                    <footer id='footer'>
                        <Footer />
                    </footer>
                </div>          
            )  
        } 
    }
}
export default Cart;