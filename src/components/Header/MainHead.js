import React, {Component} from 'react';
import Logo from './Logo' 
import Navigation from './Navigation'
import LoginArea from './LoginArea'


class MainHead extends Component {
    render() {
        return (
            <div className="main-head">
                <LoginArea/>
                <Logo/>
                <Navigation/>
            </div>
        )
    }  
}
export default MainHead;