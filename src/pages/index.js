import React from 'react'
import { connect } from 'react-redux'
import Layout from '../components/Layout'
import StoresList from '../components/StoresList'
import Pagination from '../components/Pagination'
import DropDown from '../components/DropDown'
import { useRouter } from 'next/router'
import { startState } from '../hooks'

const Index = () => {
  const router = useRouter()
  const currentQuery = router.query || 1

  startState(currentQuery.page)

  return (
    <Layout>
      <DropDown />
      <StoresList />
      <Pagination />
    </Layout>
  );
};


export default connect(state => state)(Index);
