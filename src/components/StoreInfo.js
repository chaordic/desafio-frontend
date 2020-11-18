import React from 'react'
import { connect } from 'react-redux'
import { Col } from 'react-flexbox-grid/dist/react-flexbox-grid'
import { useRouter } from 'next/router'
import BackPage from './BackPage'
import { useGetSingleData } from '../hooks'

const StoreInfo = ({breweries}) => {
  const router = useRouter()
  const currentQuery = router.query
  const { single = null } = breweries

  if(currentQuery) {
    const id = currentQuery.id
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
                  <span>Type: {brewery_type}</span>
                  <span>Street: {street}</span>
                  <span>City: {city}</span>
                  <span>State: {state}</span>
                  <span>Country: {country}</span>
                  <span>Website:
                    <a href={website_url} target="_blank">
                        {website_url}
                    </a>
                  </span>
                  <span>Phone: {phone}</span>
                  <span>Open in Maps:
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

export default connect(state => state)(StoreInfo);
