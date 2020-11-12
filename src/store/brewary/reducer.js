import {brewariesActionTypes} from './action';

const initialState = {
  breweries: [],
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case brewariesActionTypes.SUCESS:
      return Object.assign({}, state, {
        breweries: action.data,
      })
    default:
      return state
  }
}
