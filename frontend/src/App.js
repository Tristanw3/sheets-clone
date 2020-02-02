import React from "react";
import "./App.scss";

import Header from "./Components/Header/Header";
import OptionsBar from "./Components/OptionsBar/OptionsBar";
import Sheet from "./Components/Sheet/Sheet";
import Footer from "./Components/Footer/Footer"

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <OptionsBar />
        <Sheet />
        <Footer />
      </div>
    );
  }
}
