import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import logo from '../img/dc-logo-sm.png';

function Footer(props) {
    return(
        <footer className="site-footer">
            <div className="container-fluid bg-dark text-light" style={{ width: '100%' }}>
                <div className="row align-items-center">
                    <div className="col col-sm-4 offset-2 foot-col">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/river'>The River</Link></li>
                            <li><Link to='/resources'>Resources</Link></li>
                            <li><Link to='/tripreports'>Trip Reports</Link></li>
                            <li><Link to='/guide'>Guide</Link></li>
                        </ul>
                    </div>
                    <div className="col text-center foot-col">
                        <p>Created as a public service by:</p>
                        <a href="http://diversifiedcreative.com/" target="_blank" rel="noreferrer"><img src={logo} alt="Diversified Creative logo" height="50px" /></a>
                        <hr style={{ borderTop: '3px solid white' }} /> 
                        <p>&copy; 2021 Diversified Creative</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;