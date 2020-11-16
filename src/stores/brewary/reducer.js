import {brewariesActionTypes} from './action';

const initialState = {
  data: [],
  single: {}
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case brewariesActionTypes.SUCESS:
      return Object.assign({}, state, {
        ...state,
        data: action.data
      })
    case brewariesActionTypes.SINGLE_SUCESS:
      return Object.assign({}, state, {
        ...state,
        single: action.data
      })
    default:
      return state
  }
}
