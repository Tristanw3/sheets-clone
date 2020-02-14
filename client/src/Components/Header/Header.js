import React from "react";
import "./Header.scss";

export default class Header extends React.Component {
  state = {};

  render() {
    return <div className="Header">
      <h1>{this.props.title}</h1>
    </div>;
  }
}
