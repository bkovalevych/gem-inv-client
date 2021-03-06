import React, { Component } from 'react';
import '../../css/aboutus.css'
import {mainChart} from "../../functions/UserFunctions"
class AboutUs extends Component {
    constructor(params) {
        super(params);
        this.state = {numberUsers: 0, invested: 0, payed: 0}
    }

    componentDidMount() {
        mainChart().then(resp => {
            if (resp.data) {
                this.setState(resp.data);
            }
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div className="about-box" id="navAbout" > 
                <div className="about-top">
                </div>
                <div className="about-text">
                    <h1>About us</h1>
                    <h3>
                        This project is based in Kashmir, India where the largest sapphire deposits in India are. Since 2013, we have been mining, processing and then selling precious stones in Mumbai and other major cities. Currently, we have grown into a stable, understandable market entity in this area and decided to expand. Sapphirium is aimed to build a reliable investing platform based on the mining, buying and selling gems.<br/><br/>
    By investing in our project you will get 12% to 36% clean profit depending on the duration of the investment plus our referral system with bonuses. Interesting?
                    </h3>
                    <div className="about-btn btn inline-block">Start now</div>
                </div>

                <div className="stats">
                    <div className="stat-block">
                        <h2>{this.state.numberUsers}</h2>
                        <h4>Happy clients</h4>
                    </div>
                    <div className="stat-block">
                        <h2>{this.state.invested} UAH</h2>
                        <h4>Invested in</h4>
                    </div>
                    <div className="stat-block">
                        <h2>{this.state.payed} UAH </h2>
                        <h4>Payed</h4>
                    </div>
                </div>
                <div className="about-bottom">
                </div>
            </div>
        )
    }
}
export default AboutUs;