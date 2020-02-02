import React from "react";
import "./Sheet.scss";

import FormulaBar from "../FormulaBar/FormulaBar";
import Cell from "./Cell/Cell";

export default class Sheet extends React.Component {
  state = {
    size: {
      rows: 6,
      columns: 6
    },
    cellsData: [
      [0, 44, 1, 2, 3],
      [0, 50, 1, 2, 3],
      [0, 60, 1, 2, 3],
      [0, 70, 1, 2, 3],
      [0, 80, 1, 2, 3]
    ],
    selectedCell: {
      row: 0,
      col: 0
    }
  };

  updateCurrentCellValue = e => {
    this.setState({
      ...this.state,
      cellsData: changeValue(e.target.value, this.state.cellsData, this.state.selectedCell.row, this.state.selectedCell.col),
    });
  };

  changeSelected = (rowLoc, colLoc) => {
    this.setState({
      ...this.state,
      selectedCell: {
        row: rowLoc,
        col: colLoc
      }
    });
  }


  render() {
    let selCellVal = getRawFormula(this.state.cellsData, this.state.selectedCell.row, this.state.selectedCell.col)

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
            selected={selectedCell}
            updateCurrentCellValue={this.updateCurrentCellValue}
            changeSelected={this.changeSelected}
          />
        );
      });
    };

    let rowsAndCells = this.state.cellsData.map((rowEle, rowIndex) => {
      return (
        <div className="rowStyling" key={rowIndex}>
          {cellFunc(rowEle, rowIndex)}
        </div>
      );
    });

    return (
      <div className="Sheet">
        <FormulaBar
          currentCellValue={selCellVal}
          updateCurrentCellValue={this.updateCurrentCellValue}
        />
        {rowsAndCells}
      </div>
    );
  }
}


function getValue(formula) {
  if (formula.charAt(0) === "=") {
    let equation;
    let rawEquation = formula.split("");
    rawEquation.shift();
    rawEquation.forEach((ele, ind) => {

    });

  } else {
    return "error"
  }

}

function getRawFormula(cells, row, col) {
  return cells[row][col]
}

function changeValue(val, cells, row, col) {
  cells[row][col] = val;
  return cells
}
