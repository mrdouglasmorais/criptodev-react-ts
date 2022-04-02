import axios from 'axios';

export const apiData = axios.create({
   baseURL: 'https://meliuz-server-rn.herokuapp.com/'
});