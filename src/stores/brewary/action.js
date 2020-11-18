import axios from 'axios';
import {BREWERIES_URL} from '../../assets/constants';

export const brewariesActionTypes = {
  SUCESS: 'BREWERY_LIST_SUCESS',
  SINGLE_SUCESS: 'BREWERY_SINGLE_SUCESS',
}

export const getBreweries = (page = 1, type) => (dispatch) => {

  const FolterByType = type ? `&by_type=${type}` : '';
  const url = `${BREWERIES_URL}?page=${page}${FolterByType}`


  axios.get(url).then(response => {
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
