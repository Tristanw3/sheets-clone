import React from "react";
import "./OptionsBar.scss";

export default class OptionsBar extends React.Component {
  state = {};

  fontChange = font => {
    this.props.changeFontFunction(font);
  };

  fontSizeChange = size => {
    this.props.changeFontSizeFunction(size);
  };

  render() {
    return (
      <div className="OptionsBar">
        <div className="font selector">
          <i className="material-icons">font_download</i>
          <select>
            <option
              onClick={() => this.fontChange("Lucida Sans Unicode")}
              value="Lucida Sans Unicode"
            >
              Lucida Sans Unicode
            </option>
            <option onClick={() => this.fontChange("Tahoma")} value="Tahoma">
              Tahoma
            </option>
            <option
              onClick={() => this.fontChange("Courier New")}
              value="Courier New"
            >
              Courier New
            </option>
            <option onClick={() => this.fontChange("Impact")} value="Impact">
              Impact
            </option>
          </select>
        </div>
        <div className="selector">
          <p>
            Font Size
          </p>
          <i onClick={() => this.fontSizeChange(30)} className="material-icons">
            add_circle_outline
          </i>
          <i onClick={() => this.fontSizeChange(10)} className="material-icons">
            remove_circle_outline
          </i>
        </div>
      </div>
    );
  }
}
