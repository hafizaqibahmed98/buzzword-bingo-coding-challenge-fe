import React from "react";
import Square from "./Square";

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(false),
        };
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = !squares[i]
        this.setState({squares: squares});
    }

    renderSquare(i) {
        return (
            <Square
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    }

    render() {
        const size = 5
        const rows = Array(size).fill(0).map((it, row) => {
            const columns = Array(size).fill(0).map((it, col) =>
                this.renderSquare(row * size + col)
            )
            return (
                <div className="board-row">
                    {columns}
                </div>
            )
        })

        return (
            <div>
                {rows}
            </div>
        );
    }
}

export default Board;
