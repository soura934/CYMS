import React from 'react';
import Footer from "../footer/footer";

import MainPageContainer from '../main/main_page_container';


class ShoppingCart extends React.Component {
    render () {
        return (
            <div>
                <MainPageContainer /> 
                     <div >
                         <h1>Shopping Cart </h1>
                         

                    </div>
                
                <Footer />
            </div>

        )
    }
}

export default ShoppingCart;