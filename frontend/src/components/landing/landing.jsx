import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import MainPageContainer from '../main/main_page_container';
import  Footer from '../footer/footer'; 

import '../../stylesheets/landing.css'; 
import github from '../../assets/github-pages-logo-repository-fork-github-86eddab19cbc3ae293ada0fe0fb9e27d.png'

class Landing extends React.Component {

    render() {
        if (this.props.loggedIn) {
            return <Redirect to='/products' />
        };
        
        return (
            <div className='landing'>
                <MainPageContainer /> 

                <section className='heading'>
                    <div className='text-container'>
                        <h1>Welcome to CYMS.</h1>
                        <h2>Your one-stop-shop for all things related to your software engineering needs.</h2>
                    </div>

                    <div className='container'>
                        <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt=""/>
                        <div className='centered'>
                            <h1>We have the gear Software Engineers need to keep creating.</h1>
                            <a href="#link">Learn More</a>
                            {/* <Link to='/#link'>learn more</Link> */}
                        </div>
                    </div>
                </section>

                <section className='featured-products'>
                    <div className='text'>
                        <h1>Featured Products</h1>
                        <h2>Hot products we know you'll love!</h2>
                        <Link className='browse' to='/products'>Browse</Link>
                    </div>
                    <img src="https://images.unsplash.com/photo-1544931170-3ca1337cce88?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxNDEzNDF8MHwxfHNlYXJjaHw1fHxjb2RlJTIweWVsbG93fGVufDB8fHw&ixlib=rb-1.2.1&q=85&w=430&dpr=1" alt=""/>
                </section>

                <section className='story'>
                    <div className='text'>
                        <h1 id='link'>Our story.</h1>
                        <h2>We are four software engineers who got tired of scouring 
                            the web for the gear we needed to do our jobs. We 
                            thought “there must be a better way”. CYMS is an 
                            e-commerce website with products curated specifically 
                            for the needs of the modern software engineer.</h2>
                    </div>

                    <div className='us'>
                        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHbqyL4KM5hLA/profile-displayphoto-shrink_800_800/0/1613427608176?e=1619654400&v=beta&t=IzXpLEbaTJBOTbJP1kkkyxgD-EejAh0xqFRlkW3lf8E" alt="Chris"/>
                        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQH-DJHSTvK6xQ/profile-displayphoto-shrink_800_800/0/1613428586843?e=1619654400&v=beta&t=EvUG-24Zfvz7eL5LX-qV40ZrAFFJ6nwNxpAPtBDUyDo" alt="Yehuda"/>
                        <img src="https://media-exp1.licdn.com/dms/image/C5603AQHQAdZifgPz_w/profile-displayphoto-shrink_800_800/0/1517351265179?e=1619654400&v=beta&t=YGJjK7JWDslQff0sEbUG7-RrSUNb3Q1m3yrEZs1-mMc" alt="Mansour"/>
                        <img src="https://ca.slack-edge.com/T03GU501J-U01DE1L5CKE-g26b91ddcb6d-512" alt="Soobin"/>
                    </div>   
                </section>

                <section className='contact'>
                    <div className='text'>
                        <h1 className='heading'>Contact Us</h1>
                        <h2 id='blerb'>If you like what we have done here or have any questions
                            about our services:
                        </h2>
                    </div>

                    <div className='names'>
                        <ul>
                            <h2 className='name'>Christopher Thorne</h2>
                            <h2><a href="https://github.com/cfthorne83">LinkedIn</a></h2>
                            <h2><a href="https://github.com/cfthorne83"></a> Github</h2>
                            <h2><a href="mailto:cfthorne83@gmail.com">Email</a></h2>

                        </ul>
                        <ul>
                            <h2 className='name'>Yehudah Rosenberg</h2>
                            <h2><a href="https://www.linkedin.com/in/yehudah-rosenberg/">LinkedIn</a></h2>
                            <h2><a href="https://github.com/yrosenberg1/"> Github</a></h2>
                            <h2><a href="mailto:jros987@gmail.com"> Email</a></h2>
                        </ul>
                        <ul>
                            <h2 className='name'>Mansour Dione</h2>
                            <h2><a href="https://www.linkedin.com/in/mansour-dione/">LinkedIn</a></h2>
                            <h2><a href="https://github.com/soura934/"> Github</a></h2>
                            <h2><a href="soura934@gmail.com"> Email</a></h2>
                        </ul>
                        <ul>
                            <h2 className='name'>Soobin Kim</h2>
                            <h2><a href="https://www.linkedin.com/in/soobin-lim-2a47a2206/">LinkedIn</a></h2>
                            <h2><a href="https://github.com/nhsb00">Github</a></h2>
                            <h2><a href="nhsb00@hotmail.com">Email</a></h2>
                        </ul>
                    </div>
                </section>

                <footer className='new-footer'>
                    <div className='brand'>
                        <h1>CYMS</h1>
                        <p>Thanks for stopping by :)</p>
                    </div>

                    <div className='git'>
                        <a href="https://github.com/soura934/CYMS">
                            <img src={github} alt="Github"/>
                        </a>
                    </div>

                    <div className='techs'>
                            <h1>Technologies</h1>
                        <ul>
                            <li>MongoDB|</li>
                            <li>Express|</li>
                            <li>Nodejs|</li>
                            <li>React</li>
                        </ul>
                    </div>
                </footer>



                {/* <footer id='footer'>
                    <Footer />
                </footer> */}
            </div>
        )
    }
}

export default Landing;