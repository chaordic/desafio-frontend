import React from 'react';
import axios from 'axios';
import Layout from '../components/Layout';
import PageList from '../components/PageList';
import {getBreweryData} from '../services/brewery';

const Index = ({ response }) => {
  console.log(">>>>", response);
  return (
    <Layout>
      <PageList />
    </Layout>
  );
};

Index.getInitialProps = () => {
  const data = getBreweryData();
  return { response: data }
}

export default Index;
