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
    cellsData2: {
      "0_0": {
        value: 22
      },
      "2_2": {
        value: 10
      },
      "1_3": {
        value: 34
      },
      "4_5": {
        value: 11
      }

    },
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

  updateCurrentCellValue = e => {
    this.setState({
      ...this.state,
      cellsData2: changeValue2(e.target.value, this.state.cellsData2, this.state.selectedCell.row, this.state.selectedCell.col)
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


  cellFunc = (rowIndex) => {
    let rowData = [];
    let y;
    for (let cInd = 0; cInd < this.state.size.rows; cInd++) {
      let selectedCell = false;
      if (
        rowIndex === this.state.selectedCell.row &&
        cInd === this.state.selectedCell.col
      ) {
        selectedCell = true;
      }

      let valCell = 0;
      if (this.state.cellsData2.hasOwnProperty(rowIndex + "_" + cInd)) {
        valCell = this.state.cellsData2[rowIndex + "_" + cInd].value
      }

      y = (<Cell
        key={rowIndex + "-" + cInd}
        row={rowIndex}
        col={cInd}
        val={valCell}
        selected={selectedCell}
        updateCurrentCellValue={this.updateCurrentCellValue}
        changeSelected={this.changeSelected}
      />)
      rowData.push(y)
    }
    return rowData;
  };


  render() {
    // let selCellVal = getRawFormula(this.state.cellsData, this.state.selectedCell.row, this.state.selectedCell.col)
    let selCellVal = getRawFormula2(this.state.cellsData2, this.state.selectedCell.row, this.state.selectedCell.col)

    let cellFunc = (row, rowIndex) => {
      return row.map((cellValue, colIndex) => {
        let selectedCell = false;
        if (
          rowIndex === this.state.selectedCell.row &&
          colIndex === this.state.selectedCell.col
        ) {
          selectedCell = true;
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
          {/* {cellFunc(rowEle, rowIndex)} */}
          {this.cellFunc(rowIndex)}
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

function getRawFormula2(cells, row, col) {
  if (cells.hasOwnProperty([row + "_" + col])) {
    return cells[row + "_" + col].value
  }

  return 0
}

function changeValue(val, cells, row, col) {
  cells[row][col] = val;
  return cells
}

function changeValue2(val, cells, row, col) {
  cells[row + "_" + col] = {
    value: val
  }


  return cells
}
