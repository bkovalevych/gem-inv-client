import React, {Component} from 'react'; 

class Currency extends Component {
    render() {
        return (
            <div className="currency" id="navMain">
                <div className="btc-usd">BTC/USD: $8 400</div>
                <div className="btc-usd">USD/BTC: 0.00234</div>
            </div>
        )
    }  
}
export default Currency;