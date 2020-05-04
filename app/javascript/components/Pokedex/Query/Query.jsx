import React, { useState } from 'react'
import Condition from 'components/Pokedex/Query/Condition/Condition'
import LinkButton from 'components/shared/LinkButton/LinkButton'
import Button from 'components/shared/Button/Button'

function Query() {
  const [ conditionId, setConditionId ] = useState(0);
  const [ conditions, setConditions ] = useState({});

  const clonedConditions = () => Object.assign({}, conditions);

  const addCondition = () => {
    setConditions(() => {
      let newConditions = clonedConditions();
      newConditions[conditionId] = {};

      return newConditions
    });

    setConditionId(conditionId + 1)
  };

  const updateCondition = (id, condition) => {
    setConditions(() => {
      let newConditions = clonedConditions();
      newConditions[conditionId] = condition;

      return newConditions
    });
  };

  const removeCondition = (id) => {
    setConditions(() => {
      let newConditions = clonedConditions();

      delete newConditions[id];

      return newConditions
    });
  };

  return(
    <div>
      {
        Object.keys(conditions).map(id =>
          <Condition
            key={id}
            id={id}
            updateCondition={updateCondition}
            removeCondition={removeCondition}
          />
        )
      }
      <LinkButton onClick={addCondition}>
        + Add Condition
      </LinkButton>
      <Button>Search</Button>
    </div>
  )
}

export default Query
