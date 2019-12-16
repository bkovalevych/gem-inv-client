import React, {Component} from "react";
import TariffBlock from "./TariffBlock";
import {Modal, Button} from 'react-bootstrap';
import jwt_decode from 'jwt-decode';
import {createTarif} from '../../../functions/UserFunctions.js';

import {getPlans} from '../../../functions/UserFunctions';
class TariffsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plans: [],
            show: false,
            showModal: false,
            userId: 0,
            planId: 0,
            amount: 0
        }
        this.onChange = this.onChange.bind(this);

        this.startTariff = this.startTariff.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.openTarif = this.openTarif.bind(this);
    }

    setReplenishBoxHidden() {
      this.setState({ showModal: false });
    }

    setReplenishBoxShow() {
      this.setState({ showModal: true });
    }

    handleClose() {
      this.setState({ show: false });
    }

    handleShow() {
      this.setState({ show: true });
    }


      onChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value });
      }

    componentDidMount() {
        getPlans().then(resp => {
            this.setState({
                plans: resp.data
            })
        });

        if(localStorage.usertoken){
          const token = localStorage.usertoken;
          const decoded = jwt_decode(token);
          this.setState({
            userId: decoded._id
          });
        };
    }

    startTariff(id, e) {
        //TODO: need modal for this;
        if(localStorage.usertoken){
        this.handleShow();
        this.setState({
          planId: id
        });
      } else {
        alert('please, log in');
      }
    }

    openTarif(){
      console.log(this.state.userId);
      createTarif(this.state.userId, this.state.planId, this.state.amount)
      .then(res => {
        if(res){
            this.handleClose();
        }
      }
      )
      this.handleClose();

    }

    render() {
        const _f = (val) => {
            return parseFloat(val.toString());
        };
        if(this.state.plans){
          var plans = (this.state.plans.map((item) => {
              return <TariffBlock key={item._id.toString()} tarId={item._id.toString()} funcStart={this.startTariff} name={item.name} className="short" term={_f(item.duration)}
                                  profit={`${_f(item.profit.$numberDecimal) * 100}%`}/>
          }));
        } else {
          var plans = 'waiting';
        }
        return (
            <>
            {plans}
            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Replenish yor balance</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="modal_body">
                  <div><input className="inputSumm_Field" type='number' min='1' max='1000' name="amount" value={this.state.amount} onChange={this.onChange} /> UAH</div>
                  <button className="btn pay_btn" id='btn_to_pay' onClick={this.openTarif}>Pay</button>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>Close</Button>

              </Modal.Footer>
            </Modal>
            </>
        )
    }
}

export default TariffsComponent;
