import React from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'react-flexbox-grid/dist/react-flexbox-grid'

const StoreInfo = () => {

  return (
    <Col xs={12} sm={12} md={12}>
      <div className="card-no-hover">
          <div className="title-box">
              <h1 className="title">MADTREE BREWEING</h1>
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
