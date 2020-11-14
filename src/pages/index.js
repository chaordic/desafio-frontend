import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Layout from '../components/Layout'
import PageList from '../components/PageList'
import { startState } from '../hooks/startStateHook'

const Index = () => {
  startState()

  return (
    <Layout>
      <PageList />
    </Layout>
  );
};

export default connect(state => state)(Index);
