import React from 'react';
import MainPageContainer from '../main/main_page_container';
import  Footer from '../footer/footer';
import '../../stylesheets/splash-page.css'
import ProductIndexContainer from '../product/product_index_container'

class Splash extends React.Component {
    render () {
        return (
            <div className='splash-container'>
                <p>0</p>
            <div className="splash">
                <ProductIndexContainer />
            </div>
       
            </div>
            </div>
        )
    }
}

export default Splash;