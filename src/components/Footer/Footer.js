import React, { Component } from 'react';
import '../../css/footer.css'
import logo from '../../images/logo.png';
import instagram from '../../icons/inst.png';
import fb from '../../icons/fb.png';
import twit from '../../icons/twit.png';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class Footer extends Component {
    render() {
        return (
            <div className="footer-box">
                <div className="footer-top">
                </div>
                <div className="footer-main">
                  
                    <div className="footer-main-row">
                        <div className="questions">
                            <p>Have any questions?
                            <br />
                                Feel free to contact us.
                            <br />
                                <br />
                                <a className="footer-hover" href="#1">GemInv@gmail.com</a>
                            </p>
                        </div>
                        <div className="footer-nav hidden">
                            <div><Link to="/"><a className="footer-hover" href="#navMain">Main</a></Link></div>
                            <div><a className="footer-hover" href="#navAbout">About Us</a></div>
                            <div><a className="footer-hover" href="#navTariffs">Plans</a></div>
                            <div><a className="footer-hover" href="#navPath">Path</a></div>

                            <div><a className="footer-hover" href="#navGallery">Gallery</a></div>
                            <div><a className="footer-hover" href="#1">FAQ</a></div>
                        </div>
                        <div className="socials">
                            <img className="footer-hover-soc" src={instagram} alt="" height="" />
                            <img className="footer-hover-soc" src={fb} alt="" height="" />
                            <img className="footer-hover-soc" src={twit} alt="" height="" />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Footer;
