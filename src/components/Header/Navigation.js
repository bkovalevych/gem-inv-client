import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


class Navigation extends Component {
    render() {
        return (
            <div className="navigation-box hidden">
                    <div ><Link to="/"><a href="#navMain">Main</a></Link></div>
                    <div ><Link to="/"><a href="#navAbout">About Us</a></Link></div>
                    <div><Link to="/"><a href="#navTariffs">Plans</a></Link></div>
                    <div ><Link to="/"><a href="#navPath">Path</a></Link></div>
                    <div><Link to="/"><a href="#navGallery">Gallery</a></Link></div>
                    <div><Link to="/"><a href="#1">FAQ</a></Link></div>
            </div>

        )
    }
}
export default Navigation;
