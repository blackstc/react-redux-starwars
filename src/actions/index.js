import axios from 'axios';
const ROOT_URL = 'http://swapi.co/api';
import {
  FETCH_PEOPLE
} from './types';


export function fetchPeople() {
  let payload = [];
  let query = `${ROOT_URL}/people/`;
  let sequence = Promise.resolve();
  let promise;
  let dispatchPointer;

  return promise = (dispatch) => {
    if (dispatch !== undefined) {
      dispatchPointer = dispatch
    }

    sequence = sequence.then(() => {
      return axios.get(query)
    }).then(res => {
      payload = payload.concat(res.data.results);
      query = res.data.next;

      if (query !== null) {
        promise();
      } else {
          dispatchPointer({
            type: FETCH_PEOPLE,
            payload
          });
        }
    }).catch(err => console.log('Error loading' + err))

  };
}
