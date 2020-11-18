import React from 'react'
import Link from 'next/link'
import Flag from './Flag'
import { useRouter } from 'next/router'
import { Grid, Row, Col } from 'react-flexbox-grid/dist/react-flexbox-grid'

const Card = ({data}) => {
  const router = useRouter()
  const currentQuery = router.query
  const {name, city,state,street, postal_code, brewery_type} = data
  const link = {
    pathname: `/detail/${data.id}`,
    query: {page: currentQuery.page, type: currentQuery.type},
  }
  return (
    <Col xs={12} sm={4} md={3} lg={3}>
       <Link href={link}>
          <a className="card">
              <div className="title-box">
                  <h1 className="title">{name}</h1>
              </div>
              <div className="card-box">
                  <p>{street}</p>
                  <p>{`${state} - ${postal_code}`}</p>
                  <p>{city}</p>
              </div>
              <div className="card-footer">
                  <Flag type={brewery_type} />
              </div>
          </a>
        </Link>
    </Col>
  );
};

export default Card;
