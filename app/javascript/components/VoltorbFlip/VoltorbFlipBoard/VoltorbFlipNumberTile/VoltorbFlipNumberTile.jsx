import React from 'react'
import './VoltorbFlipNumberTile.scss'

function VoltorbFlipNumberTile({ value, selected, flipped, onClick }) {
  return (
    <div
      className={`
        VoltorbFlip__VoltorbFlipNumberTile
        ${selected && 'VoltorbFlip__VoltorbFlipNumberTile--selected'}
        ${flipped && 'VoltorbFlip__VoltorbFlipNumberTile--flipped'}
      `}
      onClick={onClick}
    >
      { value }
    </div>
  )
}

export default VoltorbFlipNumberTile
