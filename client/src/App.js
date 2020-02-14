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
    userId: "5e3dfdf5534e340e2bb993c8",
    currentSheetId: "",
    // userId: "",
    name: ""
  };
  componentDidMount() {
    let auth = JSON.parse(sessionStorage.getItem("auth"));
    if (!auth) return;
    this.setState({
      ...this.state,
      userId: auth.user._id,
      name: auth.user.name
    });
  }

  updateCurrentSheet = (id) => {
    this.setState({
      ...this.state,
      currentSheetId: id
    });
  }

  render() {
    return (
      <Router>
        <Spreadsheet path="/" title={this.state.currentSheetId} />
        <SheetsPage path="/sheets" userId={this.state.userId} currentSheetFunction={this.updateCurrentSheet} />
        <Login path="/login" />
        <Signup path="/signup" />
      </Router>
    );
  }
}
