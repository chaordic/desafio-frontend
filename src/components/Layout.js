import React from 'react';
import Menu from './Menu';

const Layout = ({ children }) => {
  return (
    <div>
      <Menu />
      {children}
    </div>
  );
};

export default Layout;