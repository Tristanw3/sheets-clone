import React from "react";
import "./App.scss";

import Header from "./Components/Header/Header";
import OptionsBar from "./Components/OptionsBar/OptionsBar";
import Sheet from "./Components/Sheet/Sheet";
import Footer from "./Components/Footer/Footer";

export default class App extends React.Component {
  state = {
    currentFont: "Lucida Sans Unicode",
    currentFontSize: 11
  };
  changeFont = fontTop => {
    this.setState({
      ...this.state,
      currentFont: fontTop
    });
  };
  changeFontSize = fontSizeTop => {
    this.setState({
      ...this.state,
      currentFontSize: fontSizeTop
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <OptionsBar
          changeFontFunction={this.changeFont}
          changeFontSizeFunction={this.changeFontSize}
        />
        <Sheet
          newFont={this.state.currentFont}
          newFontSize={this.state.currentFontSize}
        />
        <Footer />
      </div>
    );
  }
}
