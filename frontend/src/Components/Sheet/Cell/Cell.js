import React from "react";
import "./Cell.scss";

export default class Cell extends React.Component {
  select = () => {
    this.props.changeSelected(this.props.row, this.props.col);
  };

  press = e => {
    if (e.keyCode === 38) {
      this.props.changeSelected(this.props.row - 1, this.props.col);
    } else if (e.keyCode === 39) {
      this.props.changeSelected(this.props.row, this.props.col + 1);
    } else if (e.keyCode === 40) {
      this.props.changeSelected(this.props.row + 1, this.props.col);
    } else if (e.keyCode === 37) {
      this.props.changeSelected(this.props.row, this.props.col - 1);
    }
  };

  render() {
    return (
      <input
        value={this.props.val}
        className={this.props.selected ? "selected Cell" : "Cell"}
        onChange={this.props.updateCurrentCellValue}
        onKeyDown={this.press}
        onClick={this.select}
        style={this.props.styling}
        tabIndex="0"
      />
    );
  }
}
