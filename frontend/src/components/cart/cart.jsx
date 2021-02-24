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

    componentDidUpdate(prevProps) {
        
    //     if(!this.props.cart || JSON.stringify(prevProps.cart) !== JSON.stringify(this.props.cart)){
             
    //         this.props.fetchCartItems(this.props.user)
    //     }
    // }
    
    // this.props.fetchOneCartItem(this.props.productId)
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
                debugger
                 totalprice += parseFloat(product.price)
                return (
                    <ul key={idx}>
                        <CartItem 
                        product={product}
                        productId={product.cartItem}
                        />   
                    </ul>
                )
            })  
            totalnumber = this.props.cart.length
            return (
                <div className="splash">
                    <MainPageContainer /> 
                    <div>
                        <h1>Your Cart</h1>

                            {cartProducts}

                        <p>Total price: $ {totalprice}</p>
                        <p>{totalnumber} in cart</p>

                        <div>
                            <button>Check Out</button>
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