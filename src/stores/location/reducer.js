import {locationActionTypes} from './action';

const initialState = {
  ...{}
}

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case locationActionTypes.SUCESS:
      return Object.assign({}, state, {
        ...action.location
      })
    default:
      return state
  }
}
