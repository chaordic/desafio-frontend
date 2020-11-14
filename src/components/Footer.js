import React from 'react';
import { Row } from 'react-flexbox-grid/dist/react-flexbox-grid';

const Footer = () => {
  return (
    <footer>
       <div className="footer-container">
            <Row start="xs">
                <span>Breweries List</span>
            </Row>
      </div>
    </footer>
  );
};

export default Footer;
