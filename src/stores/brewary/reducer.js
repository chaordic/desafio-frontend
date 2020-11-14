import {brewariesActionTypes} from './action';

const initialState = {
  data: []
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case brewariesActionTypes.SUCESS:
      return Object.assign({}, state, {
        data: action.data
      })
    default:
      return state
  }
}
