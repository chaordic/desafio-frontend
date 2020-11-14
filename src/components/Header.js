import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid/dist/react-flexbox-grid';

const Header = () => {
  return (
    <header>
        <div className="header-container">
            <Row start="xs">
                <h1>Breweries</h1>
            </Row>
            <Row start="xs">
                <p className="description">A breweries list by Open Brewery DB</p>
            </Row>
      </div>
    </header>
  );
};

export default Header;
