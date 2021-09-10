import React, { useState, useEffect } from 'react';
import Table from 'components/shared/Table/Table';
import Row from 'components/TypeChart/Row';
import Type from 'components/shared/Type';
import PageLayout from 'components/layout/PageLayout';

function TypeChart() {
  const [ loading, setLoading ] = useState(true);
  const [ types, setTypes ] = useState([]);
  const [ typeRelations, setTypeRelations ] = useState({});

  const typeObjects = () => types.map(type =>
    <Type type={type} />
  );

  useEffect(() => {
    Promise.all([
      fetch('/types'),
      fetch('/type_relations')
    ])
      .then(responses =>
        responses.map(response => response.json())
      )
      .then(data => {
        setLoading(false);
        data[0].then(data => setTypes(data));
        data[1].then(data => setTypeRelations(data))
      })
  }, []);

  return (
    <PageLayout>
      <Table
        columns={[ ...[ '' ], ...typeObjects() ]}
        loading={loading}
      >
        {
          types.map((type, index) =>
            <Row
              key={type.name}
              index={index}
              type={type}
              columns={types}
              typeRelations={typeRelations[type.name]}
            />
          )
        }
      </Table>
    </PageLayout>
  )
}

export default TypeChart
