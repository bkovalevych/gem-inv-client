import React, {Component} from 'react'; 
import MainHead from './MainHead'
import './header.css'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <MainHead/>
            </div>
        )
    }  
}
export default Header;