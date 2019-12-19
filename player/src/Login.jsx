import React, { Component } from 'react';
import './Login.css'

class Login extends Component {
    render() {
        return (
            <div>
                <h2>Login</h2>
                <div id="container">
                    <label className=" label email-label">Email</label>
                    <input type="text" className="field email-field" />
                    <label className="label pass-label">Password</label>
                    <input type="password" className="field pass-field" />
                    <button className="button signup-button">SignUp</button>
                    <button className="button signin-button">SignIn</button>
                </div>
            </div>
        );
    }
}

export default Login;