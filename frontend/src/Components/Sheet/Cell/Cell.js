import React from "react";
import "./Cell.css";

export default class Cell extends React.Component {
  state = {
    text: this.props.val
  };

  changeCell = e => {
    this.props.updateFormula(e, this.props.row, this.props.col);
    this.setState({
      ...this.state,
      text: e.target.value
    });
  };

  select = e => {
    this.props.updateFormula(e, this.props.row, this.props.col);
    this.setState({
      ...this.state,
      selected: true
    });
  };

  render() {
    let classVar = this.props.selected ? "selected Cell" : "Cell";
    return (
      <input
        value={this.state.text}
        className={classVar}
        onChange={this.changeCell}
        onClick={this.select}
      ></input>
    );
  }
}
