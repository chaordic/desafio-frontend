import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid/dist/react-flexbox-grid';

const Header = () => {
  return (
        <div className="header-container">
          <div className="header-title">
            <Row middle="xs">
                <Col md={12}>
                    <h1>Breweries</h1>
                </Col>
                <Col md={12}>
                    <span className="description">A breweries list by Open Brewery DB</span>
                </Col>
            </Row>
          </div>
        </div>
  );
};

export default Header;
