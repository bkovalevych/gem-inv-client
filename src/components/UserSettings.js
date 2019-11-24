import React from 'react';
import './Profile/profile.css'
import {Component} from 'react'
import jwt_decode from 'jwt-decode'
import {invitedLink} from '../functions/UserFunctions.js'
import { BrowserRouter as Router, Link } from 'react-router-dom'

class UserSettings extends Component {
  constructor() {
    super();
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      _id: 0,
      nickname: '',
      email: '',
      register_date: '',
      inviteLink: ''
    };


  }

  copyToClipboard = (e) => {
     this.textArea.select();
     document.execCommand('copy');
     // This is just personal preference.
     // I prefer to not show the the whole text area selected.
     e.target.focus();
     this.textArea.select();
     
   };

  componentDidMount(){
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)

          invitedLink(decoded.email).then(res => {
                if(res){
                  console.log(res);
                  this.setState({
                    inviteLink: res
                  })
                }});
    const date = new Date(decoded.register_date).getDate() + '/' + (new Date(decoded.register_date).getMonth() + 1) + '/' + new Date(decoded.register_date).getFullYear();
      this.setState({
      _id: decoded._id,
      nickname: decoded.nickname,
      email: decoded.email,
      register_date: date
    });
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
        <div className="balance">balance: <div className="summ">$0</div></div>
        </div>
        <Link to="/profile"><div className="settings">projects</div></Link>
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
        <h2>Invitation link <button className="" onClick={this.copyToClipboard}>Copy</button></h2>
          <input ref={(textarea) => this.textArea = textarea}
           type="text" value={this.state.inviteLink} readonly="true"></input>
          <right></right>
</div>

    </div>
  );
}
}

export default UserSettings;
