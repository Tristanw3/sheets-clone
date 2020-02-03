import React from "react";
import "./Sheet.scss";

import FormulaBar from "../FormulaBar/FormulaBar";
import Cell from "./Cell/Cell";

export default class Sheet extends React.Component {
  state = {
    size: {
      rows: 7,
      columns: 7
    },
    cellsData2: {
      "0_0": {
        value: 22,
        font: "Impact",
        fontSize: 18
      },
      "2_2": {
        value: 10
      },
      "1_3": {
        value: 34
      },
      "5_5": {
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
      let styling = {};
      let cellLoc = rowIndex + "_" + cInd;
      if (this.state.cellsData2.hasOwnProperty(cellLoc)) {
        valCell = this.state.cellsData2[cellLoc].value

        styling.fontFamily = this.state.cellsData2[cellLoc].hasOwnProperty("font") ? this.state.cellsData2[cellLoc].font : null;
        styling.fontSize = this.state.cellsData2[cellLoc].hasOwnProperty("fontSize") ? this.state.cellsData2[cellLoc].fontSize : null;

      }




      y = (
        <Cell
          key={rowIndex + "-" + cInd}
          row={rowIndex}
          col={cInd}
          val={valCell}
          styling={styling}
          selected={selectedCell}
          updateCurrentCellValue={this.updateCurrentCellValue}
          changeSelected={this.changeSelected}
        />
      )
      rowData.push(y)
    }
    return rowData;
  };


  cellfunc2 = () => {
    let rArray = [];
    let z;
    for (let rInd = 0; rInd < this.state.size.columns; rInd++) {
      z = (
        <div className="rowStyling" key={rInd}>
          {this.cellFunc(rInd)}
        </div>
      )
      rArray.push(z)
    }
    return rArray;
  }


  render() {
    let selCellVal = getRawFormula2(this.state.cellsData2, this.state.selectedCell.row, this.state.selectedCell.col)

    return (
      <div className="Sheet">
        <FormulaBar
          currentCellValue={selCellVal}
          updateCurrentCellValue={this.updateCurrentCellValue}
        />
        {this.cellfunc2()}
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
