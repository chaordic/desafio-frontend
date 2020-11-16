import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getBrewery }  from '../stores/actions';

export const useGetSingleData = (id) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getBrewery(id))
  }, [dispatch])
};
