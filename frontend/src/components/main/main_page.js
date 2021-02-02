import React from 'react';
import '../../stylesheets/splash-page.css'
import { Link } from 'react-router-dom';
class MainPage extends React.Component {

    render () {
        return (
            <div className='header'>
                <p className="brand-name">
                    CYMS
                </p>
                <div className="authentication">
                <Link to="/login">Login</Link>
                <>or</>
                <Link to="/signup">Signup</Link>
                </div>
            </div>
        )
    }
}

export default MainPage;