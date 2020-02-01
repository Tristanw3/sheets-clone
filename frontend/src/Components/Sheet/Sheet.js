import React from "react";
import "./Sheet.css";

import FormulaBar from "../FormulaBar/FormulaBar";
import Cell from "./Cell/Cell";

export default class Sheet extends React.Component {
  state = {
    cellsData: [
      [0 - 0, 44, 1, 2, 3],
      [0, 50, 1, 2, 3],
      [0, 60, 1, 2, 3],
      [0, 70, 1, 2, 3],
      [0 - 4, 80, 1, 2, 3]
    ],
    currentFormula: "",
    selectedCell: {
      row: 0,
      col: 0
    }
  };

  updateVal = e => {
    this.setState({
      ...this.state,
      currentFormula: this.state.cellsData[this.selectedCell.row][
        this.state.selectedCell.col
      ]
    });
  };

  updateFormula = (e, rowLoc, colLoc) => {
    this.setState({
      ...this.state,
      currentFormula: e.target.value,
      selectedCell: {
        row: rowLoc,
        col: colLoc
      }
    });
  };

  render() {
    let cellsData = this.state.cellsData;

    let cellFunc = (row, rowIndex) => {
      return row.map((cellValue, colIndex) => {
        let selectedCell;
        if (
          rowIndex === this.state.selectedCell.row &&
          colIndex === this.state.selectedCell.col
        ) {
          selectedCell = true;
        } else {
          selectedCell = false;
        }
        return (
          <Cell
            key={rowIndex + "-" + colIndex}
            row={rowIndex}
            col={colIndex}
            val={cellValue}
            updateFormula={this.updateFormula}
            selected={selectedCell}
          />
        );
      });
    };

    let rowsAndCells = cellsData.map((rowEle, rowIndex) => {
      return (
        <div className="rowStyling" key={rowIndex}>
          {cellFunc(rowEle, rowIndex)}
        </div>
      );
    });

    return (
      <div className="Sheet">
        <FormulaBar
          currentCellValue={this.state.currentFormula}
          updateVal={this.updateVal}
        />
        {rowsAndCells}
      </div>
    );
  }
}
