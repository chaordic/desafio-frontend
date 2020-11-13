import {brewariesActionTypes} from './action';

const initialState = {
  ...{},
}

export default function reducer(state = initialState, action) {
  console.log(">>>> reducer", state, action);
  switch (action.type) {
    case brewariesActionTypes.SUCESS:
      return Object.assign({}, state, {
        ...action.data,
      })
    default:
      return state
  }
}
