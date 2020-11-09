import React from 'react';
import Header from './Header';
import { Row } from 'react-flexbox-grid/dist/react-flexbox-grid';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container">
      <Row start="xs">
        {children}
      </ Row>
      </div>
    </>
  );
};

export default Layout;