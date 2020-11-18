import React from 'react'
import {breweriesTypes} from '../assets/breweriesTypes'
import { Row } from 'react-flexbox-grid/dist/react-flexbox-grid'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { getBreweries }  from '../stores/actions'

const DropDown = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const currentPath = router.pathname
  const currentQuery = router.query

  const handleChange = (event) => {
    const type = event.target.value
    currentQuery.type = type
    dispatch(getBreweries(currentQuery.page, currentQuery.type))
    router.push({
        pathname: currentPath,
        query: currentQuery,
    })
  };

  return (
    <Row>
      <div className="dropdown">
          <label for="brewariesTypes">Filter: </label>
            <select name="brewariesTypes" onChange={handleChange} id="brewariesTypes">
                <option id="0" value="">select...</option>
                {breweriesTypes.map(brewery => {
                  return (
                    <option id={brewery.id} value={brewery.name}>{brewery.name}</option>
                  )
                })}
            </select>
      </ div>
     </Row>
  );
};


export default DropDown;
