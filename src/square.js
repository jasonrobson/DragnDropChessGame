import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Square extends Component {
  render() {
    const { black } = this.props;
    const fill = black ? "black" : "white";
    const color = black ? "white" : "black";
    return (
      <div
        style={{ backgroundColor: fill, width: "100%", height: "100%", color }}
      >
        {" "}
        {this.props.children}{" "}
      </div>
    );
  }
}

Square.propTypes = {
  black: PropTypes.bool
};
