import React, { useState } from 'react'
import LinkButton from 'components/shared/LinkButton/LinkButton'

function Condition({ id, updateCondition, removeCondition }) {
  const [ condition, setCondition ] = useState({});

  const setAttribute = (e) => {

  };

  return(
    <div>
      { id }
      <select onChange={(e) => setAttribute(e)}>
        <option value='name'>Name</option>
        <option value='types'>Type</option>
        <option value='abilities'>Ability</option>
        <option value='hp'>HP</option>
        <option value='atk'>Attack</option>
        <option value='def'>Defense</option>
        <option value='spa'>Special Attack</option>
        <option value='spd'>Special Defense</option>
        <option value='spe'>Speed</option>
      </select>
      <LinkButton onClick={() => removeCondition(id)}>╳</LinkButton>
    </div>
  )
}

export default Condition
