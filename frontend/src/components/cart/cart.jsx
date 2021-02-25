import React from 'react'
import MainPageContainer from '../main/main_page_container';
import Footer from '../footer/footer';
import CartItem from './cart_item_container';

class Cart extends React.Component{
    constructor(props){
        super(props)

        this.deleteItem = this.deleteItem.bind(this);
    }

    componentDidMount() {
        debugger
        this.props.fetchCartItems(this.props.user)
    }

    deleteItem(productId){
        debugger
        return e => this.props.removeProduct(productId).then(() => this.props.fetchCartItems(this.props.user))
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
                    <ul key={idx}>
                        {product.price}
                        <CartItem 
                        productId={product.cartItem}
                        />   
                        <button onClick={this.deleteItem(product._id)}>Delete</button>
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