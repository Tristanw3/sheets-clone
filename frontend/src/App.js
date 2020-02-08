import React from "react";
import "./App.scss";

import { Router, Link } from "@reach/router";

// Pages
import Spreadsheet from "./Spreadsheet/Spreadsheet";
import SheetsPage from "./SheetsPage/SheetsPage";
import Login from "./Login/Login";
import Signup from "./SignUp/SignUp";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Spreadsheet path="/" />
        <SheetsPage path="/Sheets" />
        <Login path="/login" />
        <Signup path="/signup" />
      </Router>
    );
  }
}
