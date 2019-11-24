import React, { Component } from 'react';
import {login, register} from '../../functions/UserFunctions.js';
import './resetPasswordForm.css'
import { withRouter } from 'react-router';

class ResetPasswordForm extends Component {
constructor() {
  super();
  this.state = {
    reg_nickname: '',
    reg_email: '',
    reg_password: '',
    reg_password2: '',
    si_email_nickname: '',
    si_password: '',
    formErrors: {reg_email: '', reg_password: '', reg_password2: ''},
    reg_emailValid: false,
    reg_passwordValid: false,
    reg_password2Valid: false,
    formValid: false
  };
    this.onChange = this.onChange.bind(this)
    this.onSubmitRegister = this.onSubmitRegister.bind(this)
    this.onSubmitLogin = this.onSubmitLogin.bind(this)
}


  onChange(e){
    const name = e.target.name;
    const value = e.target.value;
    console.log(value);console.log(name);
    this.setState({[name]: value})
  }

  onSubmitRegister(e){
    e.preventDefault()
        const user = {
          email: this.state.reg_email,
          nickname: this.state.reg_nickname,
          password: this.state.reg_password
        }
        console.log(user.email);
        register(user).then(res => {
          for(var key in res.errors){
            console.log(res.errors[key].message);
          }
          if(typeof res == 'object'){
          if(res.errors.message){
              alert('An error occured')
          }} else {
            alert("Пожалуйста, проверьте свою почту");
          }
        })
  }

  onSubmitLogin(e){
    e.preventDefault()
        const user = {
          nickname: this.state.si_email_nickname,
          email: this.state.si_email_nickname,
          password: this.state.si_password
        }
        login(user).then(res => {
          console.log(res);
          if(typeof res == 'object'){
            if(res.errors.message){
              alert('An error occured')
          }
        } else {

          window.parent.location.reload();
        }
        })
  }

hideLoginForm() {
    let loginForm = document.getElementById('loginForm');
    loginForm.style.display = 'none';
}
showSignInForm() {
  let signInForm = document.getElementById('signInForm');
  let signUpForm = document.getElementById('signUpForm');
  let signUpBtn = document.getElementById('signUpBtn');
  let signInBtn = document.getElementById('signInBtn');
  signInForm.style.display = 'block';
  signUpForm.style.display = 'none';
  signUpBtn.className = 'hide';
  signInBtn.className = 'show';
}

showSignUpForm() {
  let signInForm = document.getElementById('signInForm');
  let signUpForm = document.getElementById('signUpForm');
  let signUpBtn = document.getElementById('signUpBtn');
  let signInBtn = document.getElementById('signInBtn');
  signInForm.style.display = 'none';
  signUpForm.style.display = 'block';
  signUpBtn.className = 'show';
  signInBtn.className = 'hide';
}

  render() {
      return (
        <div id="loginForm">
          <div className="tabs">
            <h4 id="signInBtn" className="show" onClick={this.showSignInForm}>Sign in</h4>
            <h4 id="signUpBtn" className="hide" onClick={this.showSignUpForm}>Sign up</h4>
          </div>
          <div id="signInForm">
            <form>
              <input className="nickName" type="text" placeholder="nickname or e-mail" name="si_email_nickname" value={this.state.email} onChange={this.onChange} required></input>
              <input className="password" type="password" name="si_password" value={this.state.password} onChange={this.onChange} placeholder="password" required></input>
              <p className="forgot">Forgot password?</p>
              <input className="formSubmit formBtn" type="submit" onClick={this.onSubmitLogin}></input>
            </form>
          </div>
          <div id="signUpForm">
            <form>
              <input className="nickName" type="text" name="reg_nickname" value={this.state.nickname} onChange={this.onChange} placeholder="nickname" required></input>
              <input className="email" type="email" name="reg_email" value={this.state.email} onChange={this.onChange} placeholder="e-mail"></input>
              <input className="password" type="password" name="reg_password" value={this.state.password} onChange={this.onChange} placeholder="password" required></input>
              <input className="password" type="password" name="reg_password2" value={this.state.password2} onChange={this.onChange} placeholder="repeat password" required></input>

              <button className="formSubmit formBtn" onClick={this.onSubmitRegister}>Submit</button>
            </form>
          </div>

          <button className="formCancel formBtn" onClick={this.hideLoginForm}>Cancel</button>
       </div>
      )
  }
}
export default ResetPasswordForm;
