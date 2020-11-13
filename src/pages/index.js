import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import Layout from '../components/Layout';
import PageList from '../components/PageList';
import { getBreweries }  from '../stores/actions';

const Index = () => {

  return (
    <Layout>
      <PageList />
    </Layout>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBreweries: dispatch(getBreweries),
  }
}

export default connect(state => state)(Index);
