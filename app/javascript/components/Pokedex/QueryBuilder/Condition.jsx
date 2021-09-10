import React from 'react'
import Select from 'components/shared/inputs/Select/Select'
import Text from 'components/shared/inputs/Text/Text'
import Number from 'components/shared/inputs/Number/Number'
import LinkButton from 'components/shared/buttons/LinkButton'

function Condition({ id, condition, updateCondition, removeCondition }) {
  const isNumericalAttribute = attr => (
    ['hp', 'atk', 'def', 'spa', 'spd', 'spe'].includes(attr)
  );

  const attributeCondition = attr => {
    let newCondition = { attr: attr };

    if (isNumericalAttribute(attr)) {
      newCondition.operator = undefined
    } else {
      newCondition.operator = 'eq'
    }

    return newCondition;
  };

  return(
    <div>
      <Select
        options={[
          ['name', 'Name'],
          ['types', 'Type'],
          ['abilities', 'Ability'],
          ['hp', 'HP'],
          ['atk', 'Attack'],
          ['def', 'Defense'],
          ['spa', 'Special Attack'],
          ['spd', 'Special Defense'],
          ['spe', 'Speed'],
        ]}
        onChange={
          e => updateCondition(
            id, attributeCondition(e.target.value)
          )
        }
      />
      { isNumericalAttribute(condition.attr) &&
        <>
          is
          <Select
            options={[
              ['eq', 'Equal to'],
              ['gte', 'At least'],
              ['lte', 'At most'],
              ['between', 'Between']
            ]}
            onChange={
              e => updateCondition(
                id, { operator: e.target.value }
              )
            }
          />
        </>
      }
      { !isNumericalAttribute(condition.attr) &&
        condition.operator &&
        <>
          is
          <Text
            onChange={
              e => updateCondition(
                id, { val: e.target.value }
              )
            }
          />
        </>
      }
      { isNumericalAttribute(condition.attr) &&
        condition.operator &&
        <Number
          min={0}
          max={255}
          onChange={
            e => updateCondition(
              id, { val: e.target.value }
            )
          }
        />
      }
      { isNumericalAttribute(condition.attr) &&
        condition.operator === 'between' &&
        <>
          and
          <Number
            min={0}
            max={255}
            onChange={
              e => updateCondition(
                id, { val: e.target.value }
              )
            }
          />
        </>
      }
      <LinkButton onClick={() => removeCondition(id)}>╳</LinkButton>
    </div>
  )
}

export default Condition
