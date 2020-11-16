export const locationActionTypes = {
  SUCESS: 'GET_LOCATION_SUCESS',
}

export const getLocation = (location) => (dispatch) => {
  return dispatch({
    type: locationActionTypes.SUCESS,
    location,
  })
}
