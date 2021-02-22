import React from 'react';
import MainPageContainer from '../main/main_page_container';
import  Footer from '../footer/footer';
import '../../stylesheets/splash-page.css'
import ProductIndexContainer from '../product/product_index_container'

class Splash extends React.Component {
    render () {
        return (
            <div className="splash">
                <MainPageContainer /> 
                <ProductIndexContainer />
            </div>          
        )
    }
}

export default Splash;