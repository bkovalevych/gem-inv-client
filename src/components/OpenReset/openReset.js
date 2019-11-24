import React, { Component } from 'react';
import {sendReset} from '../../functions/UserFunctions.js';
import {Route, Link, BrowserRouter as Router, Redirect} from 'react-router-dom'
import { withRouter } from 'react-router';


class openReset extends Component {
    constructor () {
        super();
        this.state = {
            nickname: '',
            password1: '',
            password2: ''
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmitReset = this.onSubmitReset.bind(this)
    }


    onSubmitReset(e) {
        e.preventDefault();
        sendReset(this.state).then()
    }

    onChange(e) {
        this[e.target.name] = e.target.value;
    }


    render() {
        return (
            <div className="myProjectsBox">
            <br/>
            <form>
            <input className="password" type="password" name="reg_password" value={this.state.password} onChange={this.onChange} placeholder="password" required></input>
            <input className="password" type="password" name="reg_password2" value={this.state.password2} onChange={this.onChange} placeholder="repeat password" required></input>
            <button className="formSubmit formBtn">Submit</button>
            </form>
            </div>
        )
    }
}
export default openReset;
