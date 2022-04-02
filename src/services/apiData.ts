import axios from 'axios';

export const apiData = axios.create({
   baseURL: 'https://rest.cryptoapis.io/v2/'
});