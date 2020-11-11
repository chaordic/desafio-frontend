import axios from 'axios';
import {BREWERIES_URL} from '../assets/constants';

export const getBreweryData = async () => {
    const res = await axios.get(`${BREWERIES_URL}`)
    const json = await res.json()

    return json;
}
