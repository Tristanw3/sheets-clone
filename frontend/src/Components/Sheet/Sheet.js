import React from "react";
import "./Sheet.scss";

import FormulaBar from "../FormulaBar/FormulaBar";
import Cell from "./Cell/Cell";

export default class Sheet extends React.Component {
  state = {
    size: {
      rows: 20,
      columns: 20
    },
    cellsData: {
      "0_0": {
        value: 22,
        font: "Impact",
        fontSize: 24
      },
      "0_1": {
        value: "Car",
        font: "Impact",
        fontSize: 20
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
      cellsData: changeValue(
        e.target.value,
        this.state.cellsData,
        this.state.selectedCell.row,
        this.state.selectedCell.col
      )
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
  };

  cellFunc = rowIndex => {
    let rowData = [];
    let y;
    for (let cInd = 0; cInd < this.state.size.columns; cInd++) {
      let selectedCell = false;
      if (
        rowIndex === this.state.selectedCell.row &&
        cInd === this.state.selectedCell.col
      ) {
        selectedCell = true;
      }

      let valCell = "";
      let styling = {};
      let cellLoc = rowIndex + "_" + cInd;
      if (this.state.cellsData.hasOwnProperty(cellLoc)) {
        valCell = this.state.cellsData[cellLoc].value;

        styling.fontFamily = this.state.cellsData[cellLoc].hasOwnProperty(
          "font"
        )
          ? this.state.cellsData[cellLoc].font
          : null;
        styling.fontSize = this.state.cellsData[cellLoc].hasOwnProperty(
          "fontSize"
        )
          ? this.state.cellsData[cellLoc].fontSize
          : null;
      }

      y = (
        <Cell
          key={cellLoc}
          row={rowIndex}
          col={cInd}
          val={valCell}
          styling={styling}
          selected={selectedCell}
          updateCurrentCellValue={this.updateCurrentCellValue}
          changeSelected={this.changeSelected}
        />
      );
      rowData.push(y);
    }
    return rowData;
  };

  cellfunc2 = () => {
    let rArray = [];
    let z;
    for (let rInd = 0; rInd < this.state.size.rows; rInd++) {
      z = (
        <div className="rowStyling" key={rInd}>
          <div className="square">
            <p>{rInd + 1}</p>
          </div>
          {this.cellFunc(rInd)}
        </div>
      );
      rArray.push(z);
    }
    return rArray;
  };

  headerFunc = () => {
    let headerArray = [];
    let h;

    headerArray.push(
      <div className="cornerBlock">
        <p>X</p>
      </div>
    );

    for (let cHeader = 0; cHeader < this.state.size.columns; cHeader++) {
      h = (
        <div className="colHeaders">
          <p>{cHeader + 1}</p>
        </div>
      );
      headerArray.push(h);
    }

    return headerArray;
  };

  render() {
    let selCellVal = getRawFormula(
      this.state.cellsData,
      this.state.selectedCell.row,
      this.state.selectedCell.col
    );

    return (
      <div className="Sheet">
        <FormulaBar
          currentCellValue={selCellVal}
          updateCurrentCellValue={this.updateCurrentCellValue}
        />
        <div className="columnHeaderRow">{this.headerFunc()}</div>
        {this.cellfunc2()}
      </div>
    );
  }
}

function getRawFormula(cells, row, col) {
  if (cells.hasOwnProperty([row + "_" + col])) {
    return cells[row + "_" + col].value;
  }

  return 0;
}

function changeValue(val, cells, row, col) {
  let cellLoc = row + "_" + col;
  if (cells.hasOwnProperty(cellLoc)) {
    cells[cellLoc].value = val;
  } else {
    cells[cellLoc] = { value: val };
  }

  return cells;
}

// formula function
function getValue(formula) {
  if (formula.charAt(0) === "=") {
    let equation;
    let rawEquation = formula.split("");
    rawEquation.shift();
    rawEquation.forEach((ele, ind) => {});
  } else {
    return "error";
  }
}
