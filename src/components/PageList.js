import React, { useEffect }  from 'react'
import { Row } from 'react-flexbox-grid/dist/react-flexbox-grid';
import Card from './Card';

const PageList = (props) => {

  return (
    <Row around="xs">
      {/* {breweries && breweries.map(brewery => {
        return <Card />
      })} */}
    </Row>
  );
};


export default PageList;
