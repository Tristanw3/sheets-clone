import React from "react";

import "./SignUp.scss";
import { Link } from "@reach/router";
import axios from "axios";

export default class Signup extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  handleName = e => {
    this.setState({
      ...this.state,
      name: e.target.value
    });
  };

  handleEmail = e => {
    this.setState({
      ...this.state,
      email: e.target.value
    });
  };

  handlePassword = e => {
    this.setState({
      ...this.state,
      password: e.target.value
    });
  };

  handleConfirmPassword = e => {
    this.setState({
      ...this.state,
      confirmPassword: e.target.value
    });
  };

  handleSignUp = e => {
    if (this.state.password === this.state.confirmPassword) {
      const user = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      };
      axios.post("/api/users", user).then(resp => {
        console.log(resp);
        sessionStorage.setItem("auth", JSON.stringify(resp.data));
      });
    } else {
      alert("problem");
    }
  };

  render() {
    return (
      <div className="SignUp">
        <h1>Sign-Up</h1>
        <div>
          <input
            type="text"
            placeholder="Name"
            required
            onChange={this.handleName}
          />
          <input
            type="text"
            placeholder="Email"
            required
            onChange={this.handleEmail}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Password"
            required
            onChange={this.handlePassword}
          />
          <input
            type="text"
            placeholder="Confirm Password"
            required
            onChange={this.handleConfirmPassword}
          />
        </div>

        <button onClick={this.handleSignUp}>SignUp</button>

        <p>
          <Link to="/login">Already have an account?</Link>
        </p>
      </div>
    );
  }
}
