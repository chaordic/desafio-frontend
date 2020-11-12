import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import Layout from '../components/Layout';
import PageList from '../components/PageList';
import { wrapper } from '../store/store';
import { getBreweries } from '../store/brewary/action';

const Index = (props) => {
  useEffect(() => {
    const data = props.getBreweries()

    return () => {
     data
    }
  }, [props])


  return (
    <Layout>
      <PageList />
    </Layout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
  store.dispatch(getBreweries())
})

const mapDispatchToProps = (dispatch) => {
  return {
    getBreweries: getBreweries(),
  }
}

export default connect(null, mapDispatchToProps)(Index);
