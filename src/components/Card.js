import React from 'react'
import Link from 'next/link'
import Flag from './Flag'
import { Grid, Row, Col } from 'react-flexbox-grid/dist/react-flexbox-grid'

const Card = ({data}) => {

  const href = `/detail/${data.id}`
  const {name, city,state,street, postal_code, brewery_type} = data

  return (
    <Col xs={12} sm={4} md={3} lg={3}>
       <Link href={href}>
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
