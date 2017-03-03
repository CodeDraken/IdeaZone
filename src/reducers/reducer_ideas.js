import { FETCH_IDEAS, ADD_IDEA, REMOVE_IDEA, EDIT_IDEA, ADD_RESOURCE, REMOVE_RESOURCE, EDIT_RESOURCE, ADD_FAVORITE_IDEA } from '../actions/index';

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_IDEAS:
      return {...state}
    case ADD_IDEA:
      return {...state}
    case REMOVE_IDEA:
      return {...state}
    case EDIT_IDEA:
      return {...state}
    case ADD_RESOURCE:
      return {...state}
    case REMOVE_RESOURCE:
      return {...state}
    case EDIT_RESOURCE:
      return {...state}
    case ADD_FAVORITE_IDEA:
      return {...state}
    default:
      return state;
  }
}