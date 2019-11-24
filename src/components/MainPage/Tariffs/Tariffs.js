import React, { Component } from 'react';
import TariffBlock from './TariffBlock'
import './tariffs.css'

class Tariffs extends Component {
    render() {
        return (
            <div className="tariffs-box" id="navTariffs">
                <div className="plans-particles"></div>
                <div className="tariffs-text">
                    <h1>Our plans</h1>
                    <h3>
                        Choose you preferred and suitable plan
                    </h3>
                </div>
                <div className="plans">
                    <TariffBlock name="Short" className="short" term="18" profit="112%" />
                    <TariffBlock name="Medium" className="medium" term="30" profit="124%" />
                    <TariffBlock name="Long" className="long" term="45" profit="136%" />
                </div>
                <div className="pay-restrict">
                    <h5>*every project may be started only from $50</h5>
                    <div className="only-btc"></div>
                </div>
            </div>
        )
    }
}
export default Tariffs;