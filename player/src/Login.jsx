import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <h2>Login</h2>
                <div>
                    <label>Email</label>
                    <input type="text" />
                    <label>Password</label>
                    <input type="password" />
                    <div>
                        <button>SignUp</button>
                        <button>SignIn</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;