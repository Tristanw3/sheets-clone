import React from "react";
import "./OptionsBar.scss";

export default class OptionsBar extends React.Component {
  state = {};

  render() {
    return (
      <div className="OptionsBar">
        <div className="font selector">
          <i className="material-icons">font_download</i>
          <select>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div className="selector">
          <i className="material-icons">add_circle_outline</i>
        </div>
      </div>
    );
  }
}
