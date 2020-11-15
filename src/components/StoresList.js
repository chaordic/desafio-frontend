import React, { useEffect }  from 'react'
import { connect } from 'react-redux'
import { Row } from 'react-flexbox-grid/dist/react-flexbox-grid';
import Card from './Card';

const StoresList = (state) => {
  const { breweries } = state;
  const breweriesList = breweries.data || [];

  if(!breweriesList) {
    return null;
  }

  return (
    <Row around="xs">
      {breweriesList.map(((brewery, index) => {
        return <Card key={index} data={brewery} />
      }))}
    </Row>
  );
};


export default connect(state => state)(StoresList);
