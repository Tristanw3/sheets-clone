import React from "react";
import "./Cell.scss";

export default class Cell extends React.Component {

  select = () => {
    this.props.changeSelected(this.props.row, this.props.col);
  };

  render() {
    return (
      <input
        value={this.props.val}
        className={this.props.selected ? "selected Cell" : "Cell"}
        onChange={this.props.updateCurrentCellValue}
        onClick={this.select}
        style={this.props.styling}
      />
    );
  }
}
