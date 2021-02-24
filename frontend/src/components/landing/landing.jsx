import React from 'react';
import { Link } from 'react-router-dom';

import MainPageContainer from '../main/main_page_container';
import  Footer from '../footer/footer'; 

import '../../stylesheets/landing.css'; 
import chris from '../../assets/IMG_3036.jpeg'
// import chris from './IMG_3036.jpeg'

class Landing extends React.Component {

    render() {
        
        return (
            
            <div className='landing'>
                <MainPageContainer /> 
                <Link to='/products'>product index link</Link>

                <section className='heading'>
                    <h1>Welcome to CYMS.</h1>
                    <h2>Your one-stop-shop for all things related to your software engineering needs.</h2>

                    <div className='container'>
                        <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt=""/>
                        <div className='centered'>
                            <h1>We have the gear Software Engineers need to keep creating.</h1>
                            <a href="">Learn More</a>
                        </div>
                    </div>
                </section>

                <section>
                    <div>
                        <h1>Featured Products</h1>
                        <h2>Hot products we know you'll love!</h2>
                        <button>Browse</button>
                    </div>
                    <img src="https://images.unsplash.com/photo-1544931170-3ca1337cce88?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDEzNDF8MHwxfHNlYXJjaHw1fHxjb2RlJTIweWVsbG93fGVufDB8fHw&ixlib=rb-1.2.1&q=85&w=430&dpr=1" alt=""/>
                </section>

                <section>
                    <h1>Our story.</h1>
                    <p>We are four software engineers who got tired of scouring 
                        the web for the gear we needed to do our jobs. We 
                        thought “there must be a better way”. CYMS is an 
                        e-commerce website with products curated specifically 
                        for the needs of the modern software engineer.</p>
                    <div>
                        <img src={chris} alt="Chris"/>
                        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQH-DJHSTvK6xQ/profile-displayphoto-shrink_800_800/0/1613428586843?e=1619654400&v=beta&t=EvUG-24Zfvz7eL5LX-qV40ZrAFFJ6nwNxpAPtBDUyDo" alt="Yehuda"/>
                        <img src="https://media-exp1.licdn.com/dms/image/C5603AQHQAdZifgPz_w/profile-displayphoto-shrink_800_800/0/1517351265179?e=1619654400&v=beta&t=YGJjK7JWDslQff0sEbUG7-RrSUNb3Q1m3yrEZs1-mMc" alt="Mansour"/>
                        <img src="https://ca.slack-edge.com/T03GU501J-U01DE1L5CKE-g26b91ddcb6d-512" alt="Soobin"/>
                    </div>   
                </section>



                {/* <footer id='footer'>
                    <Footer />
                </footer> */}
            </div>
        )
    }
}

export default Landing;