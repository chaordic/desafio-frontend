import { connect } from 'react-redux'
import Layout from '../../components/Layout'
import StoreInfo from '../../components/StoreInfo'
import BackPage from '../../components/BackPage'
import { startState, useLocation } from '../../hooks'

const Details = ({Urllocation}) => {
  startState()
  useLocation(Urllocation)
  return (
    <Layout>
      <BackPage />
      <StoreInfo />
    </Layout>
  );
};


export const getServerSideProps = ({ query, params}) => {

  const Urllocation = {
    Urllocation: {
      query: query || '',
      params: params || '',
    }
  }

  return {props: Urllocation}
}

export default connect(state => state)(Details);
