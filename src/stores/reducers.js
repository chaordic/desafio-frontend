import { combineReducers } from 'redux'
import breweries from './brewary/reducer'

const reducers = {
  breweries: breweries,
}

export default combineReducers(reducers)
