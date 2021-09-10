import React from 'react'
import Tile from 'images/Tile.png'
import Tile0 from 'images/Tile0.png'
import Tile1 from 'images/Tile1.png'
import Tile2 from 'images/Tile2.png'
import Tile3 from 'images/Tile3.png'

const tiles = {
  0: Tile0,
  1: Tile1,
  2: Tile2,
  3: Tile3
};

const selectedStyle = {
  outline: '0.25rem red solid'
};

const imageStyle = {
  verticalAlign: 'middle'
};

function NumberTile({ value, selected, flipped, onClick }) {
  return (
    <div css={selected ? selectedStyle : {}}>
      <img
        src={flipped ? tiles[value] : Tile}
        alt='Number Tile'
        css={imageStyle}
        onClick={onClick}
      />
    </div>
  )
}

export default NumberTile
