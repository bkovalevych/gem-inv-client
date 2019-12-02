import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './sidebar.css'
import jwt_decode from 'jwt-decode'

class SideToggle extends Component {
constructor(){
  super();

  this.state = {
    nickname: ''
  }
}

componentDidMount(){
  if(localStorage.usertoken){
  const token = localStorage.usertoken
  const decoded = jwt_decode(token)

    this.setState({
    nickname: decoded.nickname,
    })
  }

}

  logOut(e){
          e.preventDefault()
          localStorage.removeItem('usertoken');
          window.parent.location.href = 'https://gem-inv-client.herokuapp.com';
      };

  showLoginArea() {
    let sideToggle = document.querySelector('#sideToggle');
    let sideTrigger = document.querySelector('#sideTrigger');
    sideToggle.style.left = "0";
    sideTrigger.style.right = '0';
  }
  hideLoginArea() {
    let sideToggle = document.querySelector('#sideToggle');
    let sideTrigger = document.querySelector('#sideTrigger');
    sideToggle.style.left = "-23vh";
    sideTrigger.style.right = '-100vw';
}
  render() {
    return (
        <div>
          <div onMouseEnter={this.showLoginArea} className="sideMenu">
            <div className="profile">
              <div className="profilePhoto"></div>
              <div className="profileName">{this.state.nickname}</div>
            </div>
            <div onClick={this.hideLoginArea} className="sideMenuItem"><Link to="/profile">Profile</Link></div>
            <div className="sideMenuItem"><a href="#1">Projects</a></div>
            <div className="sideMenuItem"><a href="#1">Settings</a></div>
            <div className="sideMenuItem btn about-btn" onClick={this.logOut.bind(this)}><a href="/">Log out</a></div>
          </div>
        </div>
    )
  }
}
export default SideToggle;
