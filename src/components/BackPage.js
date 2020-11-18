import React from 'react'
import Link from 'next/link'
import LeftArrow from '../assets/svgs/LeftArrow.svg'
import { Row } from 'react-flexbox-grid/dist/react-flexbox-grid';


const backPage = () => {
  return (
    <Row>
      <Link href="/">
        <a className="backpage"><LeftArrow />Back</a>
      </Link>
    </Row>
   );
}

export default backPage;
