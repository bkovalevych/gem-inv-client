import React, { Component } from 'react';
import '../../css/waiting.css'

class Waiting extends Component {
    render() {
        return (
            <div className="waiting-box">
                <div className="waiting-image waiting-filter gallery-border reset-image">
                    <div className="waiting-text">
                        <h1>We are waiting for you</h1>
                        <h2 className="grey">Let`s get it started now</h2>
                        <h3 className="blue">We care to deliver adaptive services
                            and solutions to our customers to
                            achieve and satisfy their needs.
                        </h3>
                        <div className="btn waiting-btn">Get started</div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Waiting;