import React from 'react';
import MainPageContainer from '../main/main_page_container';
import  Footer from '../footer/footer';
import '../../stylesheets/splash-page.css'

class Splash extends React.Component {
    render () {
        return (
            <div>
            <MainPageContainer />
            <div className="splash">
                Splash Page ( Product List )
            </div>
            <Footer />
            </div>
        )
    }
}

export default Splash;