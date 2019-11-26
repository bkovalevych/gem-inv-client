import React from 'react';
import './profile.css'
import {Component} from 'react'
import jwt_decode from 'jwt-decode'
import {invitedLink} from '../../functions/UserFunctions.js'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import {getButtonToReplenish} from '../../functions/UserFunctions.js'

class ProfilePage extends Component {
  constructor() {
    super();
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.onChange = this.onChange.bind(this);
    this.getBtn = this.getBtn.bind(this);
    this.state = {
      show: false,
      amount: 1,
      _id: 0,
      nickname: '',
      email: '',
      register_date: '',
      inviteLink: ''
    };
  }

  getBtn() {
    getButtonToReplenish(this.state.nickname, this.state.amount).then(result => {
      let language = 'en';
      document.getElementById('btn_to_pay').innerHTML =
          '<form method="POST" action="https://www.liqpay.ua/api/3/checkout" accept-charset="utf-8">' +
          '<input type="hidden" name="data" value="'+result.data+'" />' +
          '<input type="hidden" name="signature" value="'+result.signature+'" />' +
          '<input type="image" src="//static.liqpay.ua/buttons/p1'+language+'.radius.png" name="btn_text" />' +
          '</form>'
    }).catch(err => {
      console.log(err)
    })
  }

  onChange(e){
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value})
  }

  componentDidMount(){
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    const date = new Date(decoded.register_date).getDate() + '/' + (new Date(decoded.register_date).getMonth() + 1) + '/' + new Date(decoded.register_date).getFullYear();
    var invLink = invitedLink(decoded.email);
      this.setState({
      _id: decoded._id,
      nickname: decoded.nickname,
      email: decoded.email,
      register_date: date,
      inviteLink: invLink
    })
  }


    handleClose() {
      this.setState({ show: false });
    }

    handleShow() {
      this.setState({ show: true });
    }
  // start preparations mining processing selling finish
render(){
  return (
    <div className="ProfilePage">
      <div className="myProfile">
        <div className="row">
        <div className="name_balance">
        <h2>@{this.state.nickname} <span className="id">id: {this.state._id}</span></h2>
        <div className="balance">balance: <div className="summ">$0</div>
          <input type='number' min='1' max='1000' name="amount" value={this.state.amount} onChange={this.onChange}/> UAH
          <div className="plusBtn" onClick={this.getBtn}>+</div>
          <div id='btn_to_pay' style='width: 200px; height: 200px; background: lightgray'>

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
                <div className="invested">$0</div>
                </div>
                <div className="col">
                <div>earned:</div>
                <div className="earned">$0</div>
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
          <div className="addProject">
            <div className="plusBtn">+</div>
            <div className="plusText" onClick={this.handleShow}>Add project</div>
          </div>
        </div>

      </div>
    </div>
  );
}
}

export default ProfilePage;
