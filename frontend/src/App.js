import React from "react";
import "./App.css";

import Header from "./Components/Header/Header";
import Sheet from "./Components/Sheet/Sheet";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />

        <Sheet />
      </div>
    );
  }
}
