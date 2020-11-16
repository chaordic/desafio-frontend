import { combineReducers } from 'redux'
import breweries from './brewary/reducer'
import location from './location/reducer'

const reducers = {
  breweries: breweries,
  location: location,
}

export default combineReducers(reducers)
