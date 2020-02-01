import React from "react";
import "./FormulaBar.scss";

export default class FormulaBar extends React.Component {
  state = {
    currentCellValue: ""
  };

  render() {
    return (
      <div className="FormulaBar">
        <input
          value={this.props.currentCellValue}
          onChange={this.props.updateVal}
        ></input>
      </div>
    );
  }
}
