import React, { Component } from 'react';
import { AppDB, AppAUTH } from '../db/db-init';
import '../css/Login.css'

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
                    <label className="email-label">Email</label>
                    <input name="userEmail" type="text" value={this.state.userEmail} onChange={(e) => this.updateFormData(e)} className="right email-field" />
                    <label className="pass-label">Password</label>
                    <input name="userPassword" type="password" value={this.state.userPassword} onChange={(e) => this.updateFormData(e)} className="right pass-field" />
                    <button onClick={() => this.doSignUp()} className="button signup-button">Sign Up</button>
                    <button onClick={() => this.doSignIn()} className="button signin-button">Sign In</button>
                    <button className="right anon-button">Login Anonymously</button>
                </div>
            </div>
        );
    }

    doSignUp() {
        AppAUTH.createUserWithEmailAndPassword(this.state.userEmail, this.state.userPassword)
            .then(u => {
                AppDB.ref("Users")
                    .push()
                    .set({
                        email: this.state.userEmail
                    });

                this.doSignIn();
            })
            .catch(err => {
                //TODO: Add error page
                console.log("Error " + err);
            });
    }

    doSignIn() {
        AppAUTH.signInWithEmailAndPassword(this.state.userEmail, this.state.userPassword)
            .then(u => {
                this.props.history.push({ pathname: "/selection", state: { userEmail: this.state.userEmail } });
            })
            .catch(err => {
                //TODO: Add error page
                console.log("Error " + err);
            });
    }

    updateFormData(ev) {
        if (ev.target.type === 'number')
            this.setState({ [ev.target.name]: Number(ev.target.value) });
        else
            this.setState({ [ev.target.name]: ev.target.value });
    }
}

export default Login;