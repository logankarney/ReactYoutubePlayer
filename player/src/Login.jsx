import React, { Component } from 'react';
import './Login.css'

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userEmail: "",
            userPassword: ""
        }
    }

    render() {
        return (
            <div>
                <h2>Login</h2>
                <div id="container">
                    <label className="label email-label">Email</label>
                    <input name="userEmail" type="text" value={this.state.userEmail} onChange={(e) => this.updateFormData(e)} className="field email-field" />
                    <label className="label pass-label">Password</label>
                    <input name="userPassword" type="password" value={this.state.userPassword} onChange={(e) => this.updateFormData(e)} className="field pass-field" />
                    <button onClick={() => this.doSignUp()} className="button signup-button">SignUp</button>
                    <button onClick={() => this.doSignIn()} className="button signin-button">SignIn</button>
                </div>
            </div>
        );
    }

    doSignUp() {
        alert(`Signed up ${this.state.userEmail}`)
    }

    doSignIn() {
        alert(`Signed in ${this.state.userEmail}`)
    }

    updateFormData(ev) {
        if (ev.target.type === 'number')
            this.setState({ [ev.target.name]: Number(ev.target.value) });
        else
            this.setState({ [ev.target.name]: ev.target.value });
    }
}

export default Login;