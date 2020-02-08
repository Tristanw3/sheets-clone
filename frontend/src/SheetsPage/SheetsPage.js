import React from "react";
import "../App.scss";

import Footer from "../Components/Footer/Footer";

export default class SheetsPage extends React.Component {
  state = {
    currentFont: "Lucida Sans Unicode",
    currentFontSize: 11
  };

  render() {
    return (
      <div className="App">
        text info
        <Footer />
      </div>
    );
  }
}
