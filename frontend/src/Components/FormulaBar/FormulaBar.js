import React from "react";
import "./FormulaBar.scss";


export default class FormulaBar extends React.Component {

  render() {
    return (
      <div className="FormulaBar">
        <i class="material-icons">create</i>
        <input
          value={this.props.currentCellValue}
          onChange={this.props.updateCurrentCellValue}
        ></input>
      </div >
    );
  }
}
