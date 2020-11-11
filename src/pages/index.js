import React from 'react';
import Layout from '../components/Layout';
import PageList from '../components/PageList';
import getBreweryData from '../services/brewery';

const Index = () => {
  return (
    <Layout>
      <PageList />
    </Layout>
  );
};

Index.getStaticProps = async () => {
  const response = await axios.get(`${BREWERIES_URL}`);
  
  console.log("response >>>>", response);

  return response;
}

export default Index;