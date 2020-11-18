import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getBreweries }  from '../stores/actions'

export const startState = (page = 1, type = null) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getBreweries(page, type))
  }, [dispatch])
};
