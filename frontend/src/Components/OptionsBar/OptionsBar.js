import React from "react";
import "./OptionsBar.scss";

export default class OptionsBar extends React.Component {
    state = {};

    render() {
        return (
            <div className="OptionsBar">
                <i className="material-icons">font_download</i>
                <i className="material-icons">add_circle_outline</i>
            </div>
        )
    }
}