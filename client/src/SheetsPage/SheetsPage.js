import React from "react";
import "../App.scss";
import "./SheetsPage.scss"

import { Link } from "@reach/router";

import axios from "axios";

import Footer from "../Components/Footer/Footer";

export default class SheetsPage extends React.Component {
  state = {
    sheetsItems: [1, 2],
    currentFont: "Lucida Sans Unicode",
    currentFontSize: 11
  };

  componentDidMount() {
    this.getAllSheets()
  }

  addSheet() {
    axios
      .post(
        `/sheets/create`,
        {
          title: "blank",
          userId: this.props.userId
        }
        // },
        // {
        //   // headers: { Authorization: `Bearer ${auth.token}` }
        // }
      )
      .then(response => {
        // this.setState({
        //   ...this.state,
        //   sheetsItems: response.data
        // });
      })
      .catch(err => {
        console.log(err);
      });
  }

  getAllSheets() {
    axios
      .post(
        `/sheets`,
        {
          userId: this.props.userId
        },
        {
          // headers: { Authorization: `Bearer ${auth.token}` }
        }
      )
      .then(response => {
        this.setState({
          ...this.state,
          sheetsItems: response.data.sheets
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  updateCurrentSheet(id) {
    console.log(this.props)
    this.props.currentSheetFunction(id)
  }

  render() {
    console.log(this.state.sheetsItems)
    const sheetBoxs = this.state.sheetsItems.map((ele, ind) => (
      <div className="card" key={ind}>
        <Link to="/" onClick={() => this.updateCurrentSheet(ele._id)} >{ele.title}</Link>
      </div >
    ))
    return (
      <div className="App">
        <div className="Page">
          {sheetBoxs}
          <button className="newSheetButton" onClick={() => this.addSheet()}>New Sheet</button>
        </div>
        <Footer />
      </div>
    );
  }
}
