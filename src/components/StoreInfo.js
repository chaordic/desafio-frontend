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

  const { name } = single
  return (
    <Col xs={12} sm={12} md={12}>
      <div className="card-no-hover">
          <div className="title-box">
              <h1 className="title">{name}</h1>
          </div>
          <div className="card-box">
              <span>Type: Regional</span>
              <span>Street: 3301 Madison Rd</span>
              <span>City: Cincinnati</span>
              <span>State: Ohio</span>
              <span>Country: United States</span>
              <span>Website: http://www.site.com.br</span>
              <span>Phone: 2138368733</span>
              <span>Open in Maps: 39.1563456, 39.1563456</span>
          </div>
      </div>
    </Col>
  )
};

export default connect(state => state)(StoreInfo);