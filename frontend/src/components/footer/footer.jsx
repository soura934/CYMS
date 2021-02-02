import React from 'react';
import '../../stylesheets/footer.css'

class Footer extends React.Component {
    render () {
        return (
            <div className="footer">
                <div className="footer-list">
                    <div className="footer-img">Image</div>
                    <div className="footer-contact">
                        <h1>Developers</h1>
                        <li>Christopher Thorne</li>
                        <li>Mansour Dione</li>
                        <li>Soobin Lim</li>
                        <li>Yehuda Rosenberg</li>
                    </div>
                    <div className="footer-contact">
                        <h1>Technologies</h1>
                        <li>MongoDB</li>
                        <li>Express</li>
                        <li>React & Redux</li>
                        <li>NodeJS</li>
                    </div>
                    <div className="footer-link">
                        <h1>Github</h1>
                        <a href='https://github.com/soura934/CYMS'><i className="fab fa-github"></i>GitHub</a>
                    </div>
                </div>
            </div>

        )
    }
}

export default Footer;