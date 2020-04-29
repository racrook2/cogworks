import React from 'react'
import VoltorbFlipNumberTile from 'components/VoltorbFlip/VoltorbFlipBoard/VoltorbFlipNumberTile/VoltorbFlipNumberTile'
import VoltorbFlipInfoTile from 'components/VoltorbFlip/VoltorbFlipBoard/VoltorbFlipInfoTile/VoltorbFlipInfoTile'

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

  onClick = (row, col) => {
    if (row === this.state.selected.row && col === this.state.selected.col && !this.state.flipped[row][col]) {
      this.state.flipped[row][col] = true
    } else {
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

          tiles.push(<td key={col}>{ tile }</td>)
        }
      }

      board.push(<tr key={row}>{ tiles }</tr>)
    }

    return board;
  };

  render() {
    return (
      <table>
        <tbody>
        { this.createBoard() }
        </tbody>
      </table>
    )
  }
}

export default VoltorbFlipBoard
