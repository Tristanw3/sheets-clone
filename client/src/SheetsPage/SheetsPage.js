import React from "react";
import "../App.scss";

import axios from "axios";

import Footer from "../Components/Footer/Footer";

export default class SheetsPage extends React.Component {
  state = {
    sheetsItems: [],
    currentFont: "Lucida Sans Unicode",
    currentFontSize: 11
  };

  addSheet() {
    console.log("go");
    axios
      .post(
        `/sheets/create`,
        {
          title: "blank",
          userId: this.props.userId
        },
        {
          // headers: { Authorization: `Bearer ${auth.token}` }
        }
      )
      .then(response => {
        this.setState({
          ...this.state,
          sheetsItems: response.data
        });
        console.log(this.state.foodItems);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <button onclick={this.addSheet()}>New Sheet</button>
        <Footer />
      </div>
    );
  }
}
