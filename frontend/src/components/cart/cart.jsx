import React from 'react'
import MainPageContainer from '../main/main_page_container';
import Footer from '../footer/footer';
import CartItem from './cart_item_container';

class Cart extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchCartItems(this.props.user)
    }

    render() {
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
                return (
                    <div>
                        <CartItem 
                        product={product}
                        productId={product.cartItem}
                        />                       
                    </div>
                )
            })  
            return (
                <div className="splash">
                    <MainPageContainer /> 
                        {cartProducts}
                    
                    <footer id='footer'>
                        <Footer />
                    </footer>
                </div>          
              
                  
               
            )  
        } 
    }
}
export default Cart;