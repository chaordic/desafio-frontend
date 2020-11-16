import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getLocation }  from '../stores/actions';

export const useLocation = (location) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getLocation(location))
  }, [dispatch])
};
