import axios from 'axios';
const ROOT_URL = 'http://swapi.co/api';
import {
  FETCH_PEOPLE
} from './types';


export function fetchPeople() {
  let query = `${ROOT_URL}/people`;
  const payload = axios.get(query);
  //const request = (query) => {
  //  return axios.get(query);
  //};
  //
  //  request(query)
  //    .then(res => {
  //      payload.push(res.data.results);
  //      query = res.data.next;
  //    })


  return {
    type: FETCH_PEOPLE,
    payload
  }
}
