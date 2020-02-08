import React from "react";

import "./Login.scss";

import { Link } from "@reach/router";
import axios from "axios";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleEmailForm = e => {
    this.setState({
      ...this.state,
      email: e.target.value
    });
  };

  handlePasswordForm = e => {
    this.setState({
      ...this.state,
      password: e.target.value
    });
  };

  handleLoginBtn = () => {
    let email = this.state.email;
    let password = this.state.password;
    axios
      .post("/login", {
        email: email,
        password: password
      })
      .then(response => {
        sessionStorage.setItem("auth", JSON.stringify(response.data));
        let auth = JSON.stringify(response.data);
        this.setState({
          ...this.state,
          isLoggedIn: true,
          currentUser: auth.user
        });
      })
      .catch(err => {
        console.log("Failed to login user with error: ");
        console.log(err);
      });
  };

  render() {
    return (
      <div className="Login">
        <h1>Login</h1>
        <div>
          <input
            type="text"
            placeholder="Email"
            onChange={this.handleEmailForm}
          />
          <input
            type="text"
            placeholder="Password"
            onChange={this.handlePasswordForm}
          />
        </div>

        <button onClick={this.handleLoginBtn}>Login</button>

        <p>
          <Link to="/signup">Need to Sign-Up?</Link>
        </p>
      </div>
    );
  }
}
