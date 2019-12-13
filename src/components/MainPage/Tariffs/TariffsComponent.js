import React, {Component} from "react";
import TariffBlock from "./TariffBlock";

class TariffsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plans: []
        }
    }

    componentDidMount() {
        //TODO: service for download tariffs
        this.setState({
            plans: [{
                name: "111",
                duration: "7",
                profit: "0.01"
            },
                {
                    name: "222",
                    duration: "7",
                    profit: "0.03"
                },
                {
                    name: "333",
                    duration: "7",
                    profit: "0.02"
                },
            ]
        })
    }

    render() {
        return (
            <>
                {this.state.plans.map((item) => {
                    return <TariffBlock name={item.name} className="short" term={parseInt(item.duration)}
                                        profit={`${parseFloat(item.profit) * 100}%`}/>
                })}
            </>
        )
    }
}

export default TariffsComponent;