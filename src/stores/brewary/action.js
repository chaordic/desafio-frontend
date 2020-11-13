import axios from 'axios';
import {BREWERIES_URL} from '../../assets/constants';

export const brewariesActionTypes = {
  SUCESS: 'BREWERY_LIST_SUCESS',
}

export const getBreweries = () => (dispatch) => {
  axios.get(`${BREWERIES_URL}`).then(response => {
    const data = response.data;
    return dispatch({
      type: brewariesActionTypes.SUCESS,
      data,
    })
  })
}
