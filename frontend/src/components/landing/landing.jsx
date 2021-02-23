import React from 'react';
import { Link } from 'react-router-dom';

import MainPageContainer from '../main/main_page_container';
import  Footer from '../footer/footer'; 

import '../../stylesheets/landing.css'; 

class Landing extends React.Component {

    render() {
        
        return (
            
            <div className='landing'>
                <MainPageContainer /> 
                <Link to='/products'>product index link</Link>

                <div className='heading'>
                    <h1>Welcome to CYMS.</h1>
                    <h2>Your one-stop-shop for all things related to your software engineering needs.</h2>
                </div>

                <div>
                    <strong>We have the gear Software Engineers need to keep creating.</strong>
                    <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt=""/>
                </div>




                <footer id='footer'>
                    <Footer />
                </footer>
            </div>
        )
    }
}

export default Landing;