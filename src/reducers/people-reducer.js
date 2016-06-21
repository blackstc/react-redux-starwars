import {
  FETCH_PEOPLE,
} from '../actions/types';

const INITIAL_STATE = { all: [], single: {} };

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_PEOPLE:
      return { ...state, all: action.payload.data.results }
  }

  return state;
}
