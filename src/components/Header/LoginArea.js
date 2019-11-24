import React, { Component } from 'react';
import '../../font-awesome/css/font-awesome.min.css';
import SideToggle from './SideToggle';
import './sidebar.css'
import jwt_decode from 'jwt-decode'


class LoginArea extends Component {
    constructor(){
      super();

       this.state = {
         nickname: ''
       }
    }

    componentDidMount(){
      if(new URLSearchParams(window.location.search).get('referer')){
        this.showLoginForm();
      }
    if(localStorage.usertoken){
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token)
      this.setState({
      nickname: decoded.nickname
      })
    }
  }

    almostShow() {
        let sideToggle = document.querySelector('#sideToggle');
        let sideTrigger = document.querySelector('#sideTrigger');
        sideToggle.style.left="-20vh";
        sideTrigger.style.right='-97vw';
    }
    almostHide(){
        let sideToggle = document.querySelector('#sideToggle');
        let sideTrigger = document.querySelector('#sideTrigger');
        sideToggle.style.left="-23vh";
        sideTrigger.style.right='-100vw';
    }



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
    showLoginForm() {
        let loginForm = document.getElementById('loginForm');
        loginForm.style.display = 'block'
    }
    render() {
      const user = (<div onMouseOver={this.almostShow} onMouseOut={this.almostHide} onClick={this.showLoginArea} className="login-area">
          <i className="fa fa-bars" aria-hidden="true"></i> {this.state.nickname}</div>
      );
      const guest = (<div  onClick={this.showLoginForm} className="login-area btn">
          <button>sign in/sign up</button></div>);
        return (
            <div className="login-area-box">
                <div id="sideToggle">
                    <SideToggle />
                </div>
                <div onClick={this.hideLoginArea} id="sideTrigger"></div>
                                {localStorage.usertoken?user:guest}
            </div>
        )
    }

}
export default LoginArea;
