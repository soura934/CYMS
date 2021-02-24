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
                    <ul key={idx}>
                        <CartItem 
                        product={product}
                        productId={product.cartItem}
                        />   
                    </ul>
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