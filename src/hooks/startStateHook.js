import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getBreweries }  from '../stores/actions'

export const startState = (page = null) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getBreweries(page))
  }, [dispatch])
};
