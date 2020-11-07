import React from 'react';
import Link from 'next/link';

const Menu = () => {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      &nbsp;
    </nav>
  );
};

export default Menu;