import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid/dist/react-flexbox-grid';

const Card = () => {
  return (
    <Col xs={3} sm={3} md={3}>
        <div className="card">
            <div className="title-box">
                <h1 className="title">Avondale Brewing Co</h1>
            </div>
            <div className="card-box">
                <p>201 41st St S</p>
                <p>Irmingham Alabama - 35222-1932</p>
                <p>unitedStates</p>
            </div>
            <div className="card-footer">
                <p>unitedStates</p>
            </div>
        </div>
    </Col>
  );
};

export default Card;