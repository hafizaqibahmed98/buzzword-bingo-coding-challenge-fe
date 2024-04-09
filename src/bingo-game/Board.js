import React from "react";
import { Button } from "@mui/material";

// Components
import Square from "./Square";

// Utils
import { checkAndMarkBingo, checkIfGameOver, initializeBoardSquares } from "../utils/bingoUtils";
import Dictionary from "./Dictionary";

const size = 5;
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: initializeBoardSquares(Dictionary, size),
      isGameOver: false,
    };
  }

  handleClick(i) {
    let { squares } = this.state;
    checkAndMarkBingo(squares, i);
    this.setState({
      squares,
      isGameOver: checkIfGameOver(squares),
    });
  }

  restartGame() {
    this.setState({
      squares: initializeBoardSquares(Dictionary, size),
      isGameOver: false,
    });
  }

  renderSquare(i) {
    const { squares, isGameOver } = this.state;
    return (
      <Square
        key={i}
        square={squares[i]}
        onClick={() => this.handleClick(i)}
        isGameOver={isGameOver}
      />
    );
  }

  renderBoard() {
    const board = [];
    for (let row = 0; row < size; row++) {
      const columns = [];
      for (let col = 0; col < size; col++) {
        const index = row * size + col;
        columns.push(this.renderSquare(index));
      }
      board.push(<div key={row}>{columns}</div>);
    }
    return board;
  }

  render() {
    return (
      <>
        {this.renderBoard()}
        <Button onClick={() => this.restartGame()} variant="contained">
          Restart Game
        </Button>
      </>
    );
  }
}

export default Board;