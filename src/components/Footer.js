import React from 'react';
import { Row } from 'react-flexbox-grid/dist/react-flexbox-grid';

const Footer = () => {
  return (
    <footer>
       <div className="footer-container">
            <Row start="xs">
                <h1>Breweries List</h1>
            </Row>
      </div>
    </footer>
  );
};

export default Footer;
