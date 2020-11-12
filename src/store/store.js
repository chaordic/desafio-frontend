import { createStore, applyMiddleware, combineReducers } from 'redux'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import thunkMiddleware from 'redux-thunk'
import breweries from './brewary/reducer'
import { brewariesActionTypes } from './brewary/action'

const bindMiddleware = (middleware) => {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
}

const combinedReducer = combineReducers({
  breweries
})

const reducer = (state, action) => {
  console.log(">>>>", action.type)
  switch (action.type) {
    case HYDRATE:
      const nextState = {
        ...state,
        ...action.payload,
      }
      return nextState
    default:
        return combinedReducer(state, action);
  }
}

const initStore = () => {
  return createStore(reducer, bindMiddleware([thunkMiddleware]))
}

export const wrapper = createWrapper(initStore)
