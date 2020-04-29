import React from 'react'
import Tile from 'images/Tile.png'
import Tile0 from 'images/Tile0.png'
import Tile1 from 'images/Tile1.png'
import Tile2 from 'images/Tile2.png'
import Tile3 from 'images/Tile3.png'
import './VoltorbFlipNumberTile.scss'

const tiles = {
  0: Tile0,
  1: Tile1,
  2: Tile2,
  3: Tile3
};

function VoltorbFlipNumberTile({ value, selected, flipped, onClick }) {
  return (
    <div
      className={`
        VoltorbFlip__VoltorbFlipNumberTile
        ${selected ? 'VoltorbFlip__VoltorbFlipNumberTile--selected' : ''}
      `}
    >
      <img
        src={flipped ? tiles[value] : Tile}
        alt='Number Tile'
        className='VoltorbFlip__VoltorbFlipNumberTile__tile'
        onClick={onClick}
      />
    </div>
  )
}

export default VoltorbFlipNumberTile
