import React, { useEffect, useState } from 'react'
import Condition from 'components/Pokedex/QueryBuilder/Condition'
import LinkButton from 'components/shared/buttons/LinkButton'
import Button from 'components/shared/buttons/Button'

function QueryBuilder({ handleSubmit }) {
  const [ conditionId, setConditionId ] = useState(0);
  const [ conditions, setConditions ] = useState({});

  useEffect(() => {
    if (conditionsValid()) handleSubmit(conditions);
  }, [conditions]);

  const clonedConditions = () => Object.assign({}, conditions);

  const conditionsValid = () =>
    Object.values(conditions).every(condition => {
      const values = Object.values(condition);

      return values.length === 3 && values.every(value =>
        value.length > 0
      );
    });

  const addCondition = () => {
    setConditions(() => {
      let newConditions = clonedConditions();
      newConditions[conditionId] = {};

      return newConditions
    });

    setConditionId(conditionId + 1)
  };

  const updateCondition = (id, newCondition) => {
    setConditions(() => {
      let newConditions = clonedConditions();
      const condition = newConditions[id];
      newConditions[id] = Object.assign({}, condition, newCondition);

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
            condition={conditions[id]}
            updateCondition={updateCondition}
            removeCondition={removeCondition}
          />
        )
      }
      <LinkButton onClick={addCondition}>
        + Add Condition
      </LinkButton>
    </div>
  )
}

export default QueryBuilder
