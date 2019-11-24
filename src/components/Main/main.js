import React, {Component} from 'react';
import './main.css';


class Main extends Component {
    render() {
        return (
            <div className="header">
                <div id="closed">

                </div>
                <ul id="block">
                    <li id='a'><h3>A</h3> <span>X</span></li>
                    <li id='b'><h3>B</h3> <span>X</span></li>
                    <li><h3>C</h3> <span>X</span></li>
                    <li><h3>D</h3> <span>X</span></li>
                    <li><h3>E</h3> <span>X</span></li>
                    <li><h3>F</h3> <span>X</span></li>
                </ul>
            </div>
        )
    }
}

export default Main;