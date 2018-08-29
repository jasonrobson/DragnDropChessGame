import React, { Component } from "react";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import PropTypes from "prop-types";
import Square from "./square";
import Knight from "./knight";
import { moveKnight, canMoveKnight } from "./game";

class Board extends Component {
  handleSquareClick(toX, toY) {
    if (canMoveKnight(toX, toY)) {
      moveKnight(toX, toY);
    }
  }
  renderSquare(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    const black = (x + y) % 2 === 1;

    const [knightX, knightY] = this.props.knightPosition;
    const piece = x === knightX && y === knightY ? <Knight /> : null;

    return (
      <div
        key={i}
        style={{ width: "12.5%", height: "12.5%" }}
        onClick={() => this.handleSquareClick(x, y)}
      >
        <Square black={black}>{piece}</Square>
      </div>
    );
  }
  render() {
    const squares = [];
    for (let i = 0; i < 64; i++) {
      squares.push(this.renderSquare(i));
    }
    return (
      <div
        style={{
          width: 350,
          height: 350,
          display: "flex",
          flexWrap: "wrap"
        }}
      >
        {squares}
      </div>
    );
  }
}

Board.propTypes = {
  knightPosition: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
};

export default DragDropContext(HTML5Backend)(Board);
