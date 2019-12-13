import React, { Component } from 'react';
import './tariffblock.css'

class TariffBlock extends Component {
    render() {
        return (
            <div className={`plan-block ${this.props.className}`}>
                <h4>{this.props.name}</h4>
                <h2>{this.props.term} days</h2>
                <div onClick={() => this.props.funcStart(this.props.tarId)} className="btn plan-btn">Start now</div>
                <div className="profit-block">
                    <div className="profit-percent"><h4>Profit:</h4><h3>{this.props.profit}</h3></div>
                </div>
            </div>
        )
    }
}
export default TariffBlock;