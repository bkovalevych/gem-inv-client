import React, {Component} from 'react'; 
import Currency from './Currency'
import MainHead from './MainHead'
import './header.css'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <Currency/>
                <MainHead/>
            </div>
        )
    }  
}
export default Header;