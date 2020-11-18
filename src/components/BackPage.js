import React from 'react'
import Link from 'next/link'
import LeftArrow from '../assets/svgs/LeftArrow.svg'
import { Row } from 'react-flexbox-grid/dist/react-flexbox-grid';
import { useRouter } from 'next/router'

const backPage = () => {
  const router = useRouter()
  const currentQuery = router.query
  const link = {
    pathname: '/',
    query: {page: currentQuery.page, type: currentQuery.type},
  }
  return (
    <Row>
      <Link href={link}>
        <a className="backpage"><LeftArrow />Back</a>
      </Link>
    </Row>
   );
}

export default backPage;
