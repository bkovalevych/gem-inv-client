import React, { Component } from 'react';
import {sendReset} from '../../functions/UserFunctions.js';
import {Route, Link, BrowserRouter as Router, Redirect} from 'react-router-dom'
import { withRouter } from 'react-router';
import './sendToReset.css'

class sendToReset extends Component {
    constructor () {
        super();
        this.state = {
            nickname: '',
            redirect: false
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmitReset = this.onSubmitReset.bind(this)


    }


    onSubmitReset(e) {
        e.preventDefault();
        sendReset(this.state).then()
    }

    onChange(e) {
        this.state.nickname = e.target.value;
    }


    render() {
        return (
            <div id="sendToReset" className=" hide">
                    <form className="sendToResetForm">
                        We send to your email confirmation to change your password <br/>
                        <input className="nickName" type="text" placeholder="nickname or e-mail" name="si_email_nickname" value={this.state.email} onChange={this.onChange} required></input>
                        <input className="formSubmit formBtn" type="submit" onClick={this.onSubmitReset}></input>
                    </form>
            </div>
        )
    }
}
export default sendToReset;