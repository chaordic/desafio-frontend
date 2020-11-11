import React from 'react';
import Layout from '../components/Layout';
import PageList from '../components/PageList';
import { getBreweryData } from '../services/brewery';

const Index = () => {
  return (
    <Layout>
      <PageList />
    </Layout>
  );
};

Index.getInicialProps = () => {
  console.log(">>>>>", getBreweryData())
  return getBreweryData();
}

export default Index;