import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid/dist/react-flexbox-grid';

const Header = () => {
  return (
    <header>
        <div className="container">
            <Row start="xs">
                <h1>TITLE</h1>
            </Row>
            <Row start="xs">
                <p>a Breweries list by open brewery DB</p>
            </Row>
      </div>
    </header>
  );
};

export default Header;