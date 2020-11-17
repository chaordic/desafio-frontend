import React from 'react'
import Link from 'next/link'
import LeftArrow from '../assets/svgs/LeftArrow.svg'


const backPage = () => {
  return (
    <Link href="/">
      <a className="backpage"><LeftArrow />Back</a>
    </Link>
   );
}

export default backPage;
