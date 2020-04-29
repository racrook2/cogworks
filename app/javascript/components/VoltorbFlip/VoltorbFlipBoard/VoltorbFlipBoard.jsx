import React from 'react'
import VoltorbFlipNumberTile from 'components/VoltorbFlip/VoltorbFlipBoard/VoltorbFlipNumberTile/VoltorbFlipNumberTile'
import VoltorbFlipInfoTile from 'components/VoltorbFlip/VoltorbFlipBoard/VoltorbFlipInfoTile/VoltorbFlipInfoTile'
import './VoltorbFlipBoard.scss'

class VoltorbFlipBoard extends React.Component {
  constructor(props) {
    super(props);

    let values = [];
    let flipped = [];

    for (let row = 0; row < props.rows; row++) {
      values[row] = [];
      flipped[row] = [];

      for (let col = 0; col < props.cols; col++) {
        values[row][col] = Math.floor(Math.random() * 4);
        flipped[row][col] = false
      }
    }

    this.state = {
      values,
      flipped,
      selected: {}
    }
  }

  componentDidMount() {
    document.onkeydown = (e) => {
      if (e.key === 'ArrowLeft') {
        this.onKeyDown(0, -1)
      } else if (e.key === 'ArrowUp') {
        this.onKeyDown(-1, 0)
      } else if (e.key === 'ArrowRight') {
        this.onKeyDown(0, 1)
      } else if (e.key === 'ArrowDown') {
        this.onKeyDown(1, 0)
      } else if (e.key === ' ') {
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
              <VoltorbFlipInfoTile
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
            tile = <VoltorbFlipInfoTile
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

            tile = <VoltorbFlipNumberTile
              value={tileValue}
              selected={row === this.state.selected.row && col === this.state.selected.col}
              flipped={this.state.flipped[row][col]}
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
      <table className='VoltorbFlip__VoltorbFlipBoard'>
        <tbody>
          { this.createBoard() }
        </tbody>
      </table>
    )
  }
}

export default VoltorbFlipBoard
