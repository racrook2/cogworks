import React from 'react'
import NumberTile from 'components/VoltorbFlip/NumberTile'
import InfoTile from 'components/VoltorbFlip/InfoTile'

const boardStyle = {
  borderCollapse: 'separate',
  borderSpacing: '2px',
  margin: 'auto'
};

class Board extends React.Component {
  constructor(props) {
    super(props);

    let values = [];
    let flipped = [];
    let notes = [];

    for (let row = 0; row < props.rows; row++) {
      values[row] = [];
      flipped[row] = [];
      notes[row] = [];

      for (let col = 0; col < props.cols; col++) {
        values[row][col] = Math.floor(Math.random() * 4);
        flipped[row][col] = false;
        notes[row][col] = {
          0: false,
          1: false,
          2: false,
          3: false
        };
      }
    }

    this.state = {
      values,
      flipped,
      notes,
      selected: {}
    }
  }

  componentDidMount() {
    document.onkeydown = (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        this.onKeyDown(0, -1)
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        this.onKeyDown(-1, 0)
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        this.onKeyDown(0, 1)
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        this.onKeyDown(1, 0)
      } else if (e.key === '0' || e.key === '1' || e.key === '2' || e.key === '3' ) {
        e.preventDefault();
        this.setNote(this.state.selected.row, this.state.selected.col, parseInt(e.key))
      } else if (e.key === ' ') {
        e.preventDefault();
        this.onClick(this.state.selected.row, this.state.selected.col)
      }
    }
  }

  onKeyDown = (rowInc, colInc) => {
    if (this.state.selected.row === undefined || this.state.selected.col === undefined) {
      this.setState({
        selected: {
          row: 0,
          col: 0
        }
      })
    } else {
      this.setState(state => {
        let row = state.selected.row + rowInc;
        let col = state.selected.col + colInc;

        if (row < 0) {
          row = this.props.rows - 1
        } else if (row >= this.props.rows) {
          row = 0
        }

        if (col < 0) {
          col = this.props.cols - 1
        } else if (col >= this.props.cols) {
          col = 0
        }

        return {
          selected: {
            row,
            col
          }
        }
      })
    }
  };

  onClick = (row, col) => {
    if (row === undefined || col === undefined) {
      return
    }

    if (row === this.state.selected.row && col === this.state.selected.col && !this.state.flipped[row][col]) {
      this.setState(state => {
        let flipped = state.flipped;
        flipped[row][col] = true;

        return {
          flipped
        }
      })
    } else if (row !== this.state.selected.row || col !== this.state.selected.col) {
      this.setState({
        selected: {
          row,
          col
        }
      })
    }
  };

  setNote = (row, col, key) => {
    if (row === undefined || col === undefined || this.state.flipped[row][col]) {
      return
    }

    this.setState(state => {
      let notes = state.notes;
      notes[row][col][key] = !notes[row][col][key];

      return {
        notes
      }
    });
  };

  createBoard = () => {
    let board = [];
    let colTotalValues = [];
    let colVoltorbCounts = [];

    for (let row = 0; row < this.props.rows + 1; row++) {
      let tiles = [];
      let rowTotalValue = 0;
      let rowVoltorbCount = 0;

      if (row === this.props.rows) {
        for (let col = 0; col < this.props.cols; col++) {
          tiles.push(
            <td key={col}>
              <InfoTile
                totalValue={colTotalValues[col]}
                voltorbCount={colVoltorbCounts[col]}
              />
            </td>
          )
        }
      } else {
        for (let col = 0; col < this.props.cols + 1; col++) {
          let tile;

          if (row === 0) {
            colTotalValues[col] = 0;
            colVoltorbCounts[col] = 0
          }

          if (col === this.props.cols) {
            tile = <InfoTile
              totalValue={rowTotalValue}
              voltorbCount={rowVoltorbCount}
            />
          } else {
            let tileValue = this.state.values[row][col];

            rowTotalValue += tileValue;
            colTotalValues[col] += tileValue;

            if (tileValue === 0) {
              rowVoltorbCount++;
              colVoltorbCounts[col]++
            }

            tile = <NumberTile
              value={tileValue}
              selected={row === this.state.selected.row && col === this.state.selected.col}
              flipped={this.state.flipped[row][col]}
              notes={this.state.notes[row][col]}
              onClick={() => this.onClick(row, col)}
            />
          }

          tiles.push(
            <td key={col}>
              { tile }
            </td>
          )
        }
      }

      board.push(<tr key={row}>{ tiles }</tr>)
    }

    return board;
  };

  render() {
    return (
      <table css={boardStyle}>
        <tbody>
          { this.createBoard() }
        </tbody>
      </table>
    )
  }
}

export default Board
