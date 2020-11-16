import React from 'react'
import { connect } from 'react-redux'
import { Col } from 'react-flexbox-grid/dist/react-flexbox-grid'
import { useGetSingleData } from '../hooks'

const StoreInfo = ({breweries,location}) => {
  const {query = null} = location
  const { single = null } = breweries

  if(query) {
    const id = query.id
    useGetSingleData(id)
  }

  if(single) {
    const { name, brewery_type, street, city, state, country, website_url, phone, latitude, longitude } = single
    console.log(single)

    return (
      <Col xs={12} sm={12} md={12}>
        <div className="card-no-hover">
            <div className="title-box">
                <h1 className="title">{name}</h1>
            </div>
            <div className="card-box">
                <span>Type: {brewery_type} </span>
                <span>Street: {street}</span>
                <span>City: {city}</span>
                <span>State: {state}</span>
                <span>Country: {country}</span>
                <span>Website: {website_url}</span>
                <span>Phone: {phone}</span>
                <span>Open in Maps: {`${latitude},${longitude}`}</span>
            </div>
        </div>
      </Col>
    )
  }

  return null
};

export default connect(state => state)(StoreInfo);
