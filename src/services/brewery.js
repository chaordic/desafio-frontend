import axios from 'axios';
import {BREWERIES_URL} from '../assets/constants';

export const getBreweryData = async () => {
    console.log(">>>>", BREWERIES_URL);
    return await axios.get(`${BREWERIES_URL}`)
        .then((response) => {
            console.log("brewerydata >>>>", response)
            return response.data;
        })
        .catch((error) => {
            console.log(error);
        });
}