import React from "react";
import "./App.scss";

import { Router, Link } from "@reach/router";

// Pages
import Spreadsheet from "./Spreadsheet/Spreadsheet";
import SheetsPage from "./SheetsPage/SheetsPage";
import Login from "./Login/Login";
import Signup from "./SignUp/SignUp";

export default class App extends React.Component {
  state = {
    user: "id"
  };
  componentDidMount() {
    let auth = JSON.parse(sessionStorage.getItem("auth"));
    if (!auth) return;
    this.setState({
      user_id: auth.user._id
    });
  }

  render() {
    return (
      <Router>
        <Spreadsheet path="/" />
        <SheetsPage path="/sheets" user_id={this.state.user_id} />
        <Login path="/login" />
        <Signup path="/signup" />
      </Router>
    );
  }
}
