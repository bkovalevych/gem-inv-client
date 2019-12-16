import React from 'react';
import './profile.css'
import { Component } from 'react'
import jwt_decode from 'jwt-decode'
import { invitedLink } from '../../functions/UserFunctions.js'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import {getButtonToReplenish, getWithdrawData, getBalance, getTransactions, userChart} from '../../functions/UserFunctions.js'
import {Modal, Button} from 'react-bootstrap'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


class ProfilePage extends Component {
  constructor() {
    // const box = (<div className="replenish" >
    //   <input className="inputSumm_Field" type='number' min='1' max='1000' name="amount" value={this.state.amount} onChange={this.onChange}/> UAH
    //   <div className="plusBtn" onClick={this.getBtn}>+</div>
    // </div>)
    super();
    this.getTransactions = getTransactions.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.setReplenishBoxHidden = this.setReplenishBoxHidden.bind(this);
    this.setReplenishBoxShow = this.setReplenishBoxShow.bind(this);
    this.onChange = this.onChange.bind(this);
    this.getBtn = this.getBtn.bind(this);
    this.sendTransactionToWithdraw = this.sendTransactionToWithdraw.bind(this);
    this.setWithdrawBoxShow = this.setWithdrawBoxShow.bind(this);
    this.setWithdrawBoxHidden = this.setWithdrawBoxHidden.bind(this);
    this.getBalance = getBalance.bind(this);
    this.state = {
      show: false,
      showModal: false,
      showModalWithDraw: false,
      amount: 1,
      amountWithdraw: 1,
      _id: 0,
      nickname: '',
      email: '',
      firstName: '',
      secondName: '',
      register_date: '',
      inviteLink: '',
      isReplenishOpen:false,
      invested: 0,
      earned: 0,
      balance: 0,
      data: null
    };
  }



  sendTransactionToWithdraw(e) {
    e.preventDefault();
    if (!this.state.showModalWithDraw) {
      return;
    }
    if (!this.state._id) {
      alert("_id is required");
      return;
    }
    if (this.state.amountWithdraw > this.state.balance) {
      alert("Amount is bigger than balance");
      return;
    }
    if (!this.state.amount) {
      alert("Amount is required");
      return;
    }
    if (!this.state.card) {
      alert("card is required");
      return;
    }

    let doc = document.getElementById('btn_to_pay');
    getWithdrawData(
      this.state._id,
      this.state.firstName,
      this.state.secondName,
      this.state.card,
      this.state.amountWithdraw).then(result => {
        if (result.errors) {
          console.log(result.errors);
        }
        console.log(result);
        alert(result.data);
      }).catch(err => { alert(err) })



  }

  getBtn() {
    if (!this.state.showModal) {
      return;
    }
    let doc = document.getElementById('btn_to_pay');
    getButtonToReplenish(this.state.nickname, this.state.amount).then(result => {

      doc.parentNode.innerHTML +=
        '<form id="formReplenish" method="POST" action="https://www.liqpay.ua/api/3/checkout" accept-charset="utf-8">' +
        '<input type="hidden" name="data" value="' + result.data + '" />' +
        '<input type="hidden" name="signature" value="' + result.signature + '" />' +
        '<input type="button"  name="btn_text" />' +
        '</form>';
      let formReplenish = document.getElementById("formReplenish");
      formReplenish.submit();
      // doc.disabled = false;
    }).catch(err => {
      console.log(err)
    })
  }

  onChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value })

  }

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    const date = new Date(decoded.register_date).getDate() + '/' + (new Date(decoded.register_date).getMonth() + 1) + '/' + new Date(decoded.register_date).getFullYear();
    const invLink = invitedLink(decoded.email);
    this.getBalance(decoded._id).then(data => {
      console.log("componentDidMount " + data);
      this.setState({
        balance: data.data
      })
    });
    userChart(decoded._id).then(resp => {
      if (resp.data) {
        this.setState(resp.data);
      }
    }).catch(err => {
      console.log(err);
    });
    this.getTransactions(decoded._id).then(resp => {
      resp.data.forEach(elem => {
        elem.amount = elem.amount.$numberDecimal;
        elem.plan.profit = elem.plan.profit.$numberDecimal * 100;
      });
      this.setState({ data: resp.data });
    }).catch(err => {
      console.log(err.toString());
    });
    this.setState({
      _id: decoded._id,
      nickname: decoded.nickname,
      email: decoded.email,
      register_date: date,
      inviteLink: invLink,
      balance: decoded.balance.toString()
    })

  }
  setWithdrawBoxHidden() {
    this.setState({ showModalWithDraw: false });
  }

  setWithdrawBoxShow() {
    this.setState({ showModalWithDraw: true });
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
  // start preparations mining processing selling finish

  renderTable = () => {
    return this.state.data ? this.state.data.map(transaction =>
    {
      let st = new Date(transaction.startDate);
      let fn = new Date(transaction.endDate);
      let cur = new Date().valueOf();
      let percentage = fn.valueOf() <= cur? 100: ((cur - st.valueOf()) / (fn.valueOf() - st.valueOf()) * 100).toFixed(1);
      return (
        <tr key={transaction._id}>
          <td>{transaction.plan.name}</td>
          <td>{st.getDate()}/{st.getMonth()}</td>
          <td>{fn.getDate()}/{fn.getMonth()}</td>
          <td>{transaction.amount}</td>
          <td>{(transaction.amount * (1 + transaction.plan.profit / 100)).toFixed(2)}</td>
          <td>{transaction.plan.profit}%</td>
          <td>{transaction.status}</td>
          <td style={{width: "50px"}}><CircularProgressbar value={percentage} text={`${percentage}%`}/></td>
        </tr>
      )}
    ) : "";
  };

  render(){

    console.log(this.state.balance);
    return (
      <div className="ProfilePage">
        <div className="myProfile">
          <div className="row">
            <div className="name_balance">
              <h2>@{this.state.nickname} <span className="id">id: {this.state._id}</span></h2>
              <div className="balance">
                <div className="balanceRow"> balance: <div className="summ">{this.state.balance.toString()} uah</div></div>
                <button className="btn repl_btn" onClick={this.setReplenishBoxShow}>Replenish</button>
                <button className="btn withdr_btn" onClick={this.setWithdrawBoxShow}>Withdraw money to card</button>
                <Modal show={this.state.showModalWithDraw} onHide={this.setWithdrawBoxHidden}>
                  <Modal.Header closeButton>
                    <Modal.Title>Withdraw your money</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <form className='withdrawBox' onSubmit={this.sendTransactionToWithdraw}>
                      <div> <p>Card</p> <input type='text' value={this.state.card} name='card' onChange={this.onChange} pattern="^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$" /></div>
                      <div><p>Amount</p> <input className="inputSumm_Field" type='number' min='1' max='10000' name="amountWithdraw" value={this.state.amountWithdraw} onChange={this.onChange} /> UAH </div>
                      <button className="btn send_btn" id='btn_to_withdraw' type='submit'>Send</button>
                    </form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={this.setWithdrawBoxHidden}>Close</Button>

                  </Modal.Footer>
                </Modal>
                <Modal show={this.state.showModal} onHide={this.setReplenishBoxHidden}>
                  <Modal.Header closeButton>
                    <Modal.Title>Replenish yor balance</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="modal_body">
                      <div><input className="inputSumm_Field" type='number' min='1' max='1000' name="amount" value={this.state.amount} onChange={this.onChange} /> UAH</div>
                      <button className="btn pay_btn" id='btn_to_pay' onClick={this.getBtn}>Pay</button>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={this.setReplenishBoxHidden}>Close</Button>

                  </Modal.Footer>
                </Modal>
                <div id='replenishBox' >

                </div>

                </div>
              </div>
              <Link to="/settings"><div className="settings">settings</div></Link>
            </div>
            <div className="profileData">
              <div className="myProfileData">
                <div className="col">
                  <div className="profile_info">
                    <div className="profile_info_header">profile info </div>
                    <div>registration date: {this.state.register_date}</div>
                    <div>email: {this.state.email}</div>
                  </div>
                </div>
                <span className="vertical_divider"></span>
                <div className="col">
                  <div className="profile_statistics">
                    <div className="profile_info_header">statistics</div>
                    <div className="statistics_row">
                      <div className="col">
                        <div>invested:</div>
                        <div className="invested">{this.state.invested} UAH</div>
                      </div>
                      <div className="col">
                        <div>earned:</div>
                        <div className="earned">{this.state.earned} UAH</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        <div className="myProjectsBox">
          <h2>My projects</h2>
          <div className="myProjects">
          <Link to='/' className="plusText" onClick={this.handleShow}>
            <div className="addProject">
              <div className="plusBtn">+</div>
              Add project
            </div>
</Link>

            <div className="transactionBlock">
              <table id="customers">
                <tr>
                  <th>Plan</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Invested</th>
                  <th>Earned by finish</th>
                  <th>Profit</th>
                  <th>Status</th>
                  <th>Time spent</th>
                </tr>
                {this.renderTable()}
              </table>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default ProfilePage;
