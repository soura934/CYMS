import React from 'react'

class Cart extends React.Component{
    constructor(props){
        super(props)
    }



   render() {
       if (!this.props.cart){
           return null
       }
       if (this.props.cart.length === 0){
           return <div>
         <p> No Items are Currently in Cart. </p>
         </div>
       } else {
        //    cartProducts = this.props.cart.map((product, idx) => {

        //    })
       
        } 
    }
}
export default Cart;