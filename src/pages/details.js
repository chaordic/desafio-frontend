import React from 'react'
import { connect } from 'react-redux'
import Layout from '../components/Layout'
import Details from '../components/Details'
import { startState } from '../hooks/startStateHook'

const Details = () => {
  startState()

  return (
    <Layout>
      <Details />
    </Layout>
  );
};

export default connect(state => state)(Details);
