import React from 'react';
import '../../stylesheets/footer.css';
import { Link } from 'react-router-dom';
import Mongodb from "../../assets/mongodb.svg";
import Redux from "../../assets/redux.svg"
import ReactIcon from "../../assets/react.svg"
import NodeJS from "../../assets/nodejs.svg"
import CYMS from "../../assets/CYMS.svg"
class Footer extends React.Component {
    render () {
        return (
            <div className="footer">
                <p>0</p>
                <div className="footer-list">
                    {/* <div className="footer-img">Image</div> */}
                    <div className="footer-contact">
                        <h1>Developers</h1>
                        <li>Christopher Thorne</li>
                        <li>Mansour Dione</li>
                        <li>Soobin Lim</li>
                        <li><a href="https://www.linkedin.com/in/yehudah-rosenberg/">Yehudah Rosenberg</a></li>
                    </div>
                    <div className="footer-contact">
                        <h1>Technologies</h1>
                        <li><img className='mongodb-icon' src={Mongodb} /></li>
                        <li>Express</li>
                        <li><img className='React' src={ReactIcon}/><img className='Redux' src={Redux} /></li>
                        <li><img className='React' src={NodeJS}/></li>
                        
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