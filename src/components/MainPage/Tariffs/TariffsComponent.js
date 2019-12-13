import React, {Component} from "react";
import TariffBlock from "./TariffBlock";
import {getPlans} from '../../../functions/UserFunctions';
class TariffsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plans: []
        }
        this.startTariff = this.startTariff.bind(this);
    }

    componentDidMount() {
        getPlans().then(resp => {
            this.setState({
                plans: resp.data
            })
        });

    }

    startTariff(id, e) {
        //TODO: need modal for this;
        alert(id);
    }
    render() {
        const _f = (val) => {
            return parseFloat(val.toString());
        };
        return (
            <>

                {this.state.plans.map((item) => {
                    return <TariffBlock key={item._id.toString()} tarId={item._id.toString()} funcStart={this.startTariff} name={item.name} className="short" term={_f(item.duration)}
                                        profit={`${_f(item.profit.$numberDecimal) * 100}%`}/>
                })}
            </>
        )
    }
}

export default TariffsComponent;