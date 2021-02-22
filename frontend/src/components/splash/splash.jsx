import React from 'react';
import MainPageContainer from '../main/main_page_container';
import  Footer from '../footer/footer';
import '../../stylesheets/splash-page.css'
import ProductIndexContainer from '../product/product_index_container'
import '../../stylesheets/app.css';

class Splash extends React.Component {
    render () {
        return (
            <div className="splash">
                <MainPageContainer /> 
                <ProductIndexContainer />
                
                <footer id='footer'>
                    <Footer />
                </footer>
            </div>          
        )
    }
}

export default Splash;