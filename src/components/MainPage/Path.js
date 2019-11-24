import React, { Component } from 'react';
import '../../css/path.css'
import step1 from '../../images/step1.png'
import step2 from '../../images/step2.png'
import step3 from '../../images/step3.png'
import step4 from '../../images/step4.png'

class Path extends Component {
    render() {
        return (
            <div className="path-box" id="navPath">
                <div className="path-top">
                </div>
                <div className="path-text">
                    <h1>Investment path</h1>
                    <div className="path-elements">
                        <img src={step1} alt="" height="" />
                        <img src={step2} alt="" height="" />
                        <img src={step3} alt="" height="" />
                        <img src={step4} alt="" height="" />
                    </div>
                    <h3>Our business model is aimed at people who value their time and want to get a guaranteed profit.  As you can see all the processes are very simple and clear.</h3>
                </div>
                <div className="path-bottom">
                </div>
            </div>
        )
    }
}
export default Path;