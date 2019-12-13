import React, {Component} from "react";
import TariffBlock from "./TariffBlock";
import {getPlans} from '../../../functions/UserFunctions';
class TariffsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plans: []
        }
    }

    componentDidMount() {
        getPlans().then(resp => {
            this.setState({
                plans: resp.data
            })
        });

    }

    render() {
        const _f = (val) => {
            return parseFloat(val.toString());
        }
        return (
            <>
                {this.state.plans.map((item) => {
                    return <TariffBlock name={item.name} className="short" term={_f(item.duration)}
                                        profit={`${_f(item.profit.$numberDecimal) * 100}%`}/>
                })}
            </>
        )
    }
}

export default TariffsComponent;