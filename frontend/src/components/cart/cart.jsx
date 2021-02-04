import React from 'react';
import Footer from "../footer/footer";

import MainPageContainer from '../main/main_page_container';
import '../../stylesheets/cart.css';

class ShoppingCart extends React.Component {
    componentDidMount(){
        
       {this.props.fetchCart()}
       debugger
    }
    render () {
        if (!this.props.CartItems) return null;

        let cartItems = this.props.CartItems.map((item) => {
            return (
                    <ul className="cart-item" key={item._id}>
                        <li className='cart-title'>
                           {item.title}
                        </li>
                        <li className='cart-pic'><img src={item.image} alt=""/></li>
                        <li className='price'>${item.price}</li>
                        
                    </ul>
            )
        })
        debugger
        return (
            <div>
                <MainPageContainer /> 
                     <div className='cart-container'>
                         <div className='text-container'>
                            <h1>Shopping Cart </h1>
                         </div>
                         <div className='cart-items-container'>
                             <div className='cart-index'>
                                 {cartItems}
                             </div>
                         </div>
                     </div>
                
                <Footer />
            </div>

        )
    }
}

export default ShoppingCart;