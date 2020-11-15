import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid/dist/react-flexbox-grid';

const Card = ({data}) => {

  const title = data.name
  const city = data.city
  const state = data.state
  const street = data.street
  const postalCode = data.postal_code

  return (
    <Col xs={3} sm={3} md={3}>
        <div className="card">
            <div className="title-box">
                <h1 className="title">{title}</h1>
            </div>
            <div className="card-box">
                <p>{street}</p>
                <p>{`${state} - ${postalCode}`}</p>
                <p>{city}</p>
            </div>
            <div className="card-footer">
                <p>unitedStates</p>
            </div>
        </div>
    </Col>
  );
};

export default Card;
