import axios from 'axios';
const ROOT_URL = 'http://swapi.co/api';
import {
  FETCH_PEOPLE
} from './types';


export function fetchPeople(url = `${ROOT_URL}/people`) {
  let query = url;
  const payload = axios.get(query);

  return {
    type: FETCH_PEOPLE,
    payload
  }
}
