import axios from 'axios';
import {BREWERIES_URL} from '../../assets/constants';

export const brewariesActionTypes = {
  SUCESS: 'BREWERY_LIST_SUCESS',
  SINGLE_SUCESS: 'BREWERY_SINGLE_SUCESS',
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


export const getBrewery = (id) => (dispatch) => {
  axios.get(`${BREWERIES_URL}/${id}`).then(response => {
    const data = response.data;
    return dispatch({
      type: brewariesActionTypes.SINGLE_SUCESS,
      data,
    })
  })
}
