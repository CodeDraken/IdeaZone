import {
  FETCH_IDEAS,
  FETCH_IDEA,
  ADD_IDEA,
  REMOVE_IDEA,
  EDIT_IDEA,
  ADD_RESOURCE,
  REMOVE_RESOURCE,
  EDIT_RESOURCE,
  ADD_FAVORITE_IDEA
} from '../actions/types';


export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_IDEAS:
      return {
        ...state,
        ...action.payload
      };
    case FETCH_IDEA:
      return {
        ...state,
        currentIdea: action.payload
      };
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