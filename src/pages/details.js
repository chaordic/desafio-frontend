import React from 'react'
import { connect } from 'react-redux'
import Layout from '../components/Layout'
import StoreInfo from '../components/StoreInfo'
import { startState } from '../hooks/startStateHook'

const Details = () => {

  return (
    <Layout>
      <StoreInfo />
    </Layout>
  );
};

export default connect(state => state)(Details);
