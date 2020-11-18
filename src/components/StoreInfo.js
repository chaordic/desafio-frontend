import React from 'react'
import { connect } from 'react-redux'
import { Col } from 'react-flexbox-grid/dist/react-flexbox-grid'
import BackPage from './BackPage'
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
    const mapLink = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`

    return (
      <>
      <BackPage />
        <Col md={12}>
          <div className="card-no-hover">
              <div className="title-box">
                  <h1 className="title">{name}</h1>
              </div>
              <div className="card-box">
                  <span>Type:&nbsp;{brewery_type}</span>
                  <span>Street:&nbsp;{street}</span>
                  <span>City:&nbsp;{city}</span>
                  <span>State:&nbsp;{state}</span>
                  <span>Country:&nbsp;{country}</span>
                  <span>Website:&nbsp;&nbsp;
                    <a href={website_url} target="_blank">
                        {website_url}
                    </a>
                  </span>
                  <span>Phone:&nbsp;{phone}</span>
                  <span>Open in Maps:&nbsp;&nbsp;
                      <a href={mapLink} target="_blank">
                          {`${latitude},${longitude}`}
                      </a>
                  </span>
              </div>
          </div>
        </Col>
      </>
    )
  }

  return null
};

export default connect(state => state)(StoreInfo)
