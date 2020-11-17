import React, { useState } from 'react'
import { connect } from 'react-redux'
import Layout from '../components/Layout'
import ReactPaginate from 'react-paginate'
import Details from '../components/StoresList'
import { useRouter } from 'next/router'
import { startState, useLocation} from '../hooks'

const Index = ({urllocation}) => {
  const router = useRouter()
  const currentPath = router.pathname
  const currentQuery = router.query

  startState(currentQuery.page)
  useLocation(urllocation)

  const pagginationHandler = (page) => {
    currentQuery.page = page.selected + 1
    router.push({
        pathname: currentPath,
        query: currentQuery,
    })
  };

  return (
    <Layout>
      <Details />
      <ReactPaginate
        previousLabel={''}
        nextLabel={''}
        breakClassName={'break-me'}
        activeClassName={'active'}
        containerClassName={'pagination'}
        subContainerClassName={'pages-pagination'}
        pageCount={3}
        marginPagesDisplayed={3}
        pageRangeDisplayed={5}
        onPageChange={pagginationHandler}
      />
    </Layout>
  );
};

export const getServerSideProps = ({ query, params}) => {

  const urllocation = {
    urllocation: {
      query: query || '',
      params: params || '',
    }
  }

  return {props: urllocation}
}


export default connect(state => state)(Index);
