import {
  LOGIN,
  LOGOUT,
  LOAD_USER_FAVORITES,
  USER_FAV_CHANGE
} from '../actions/types';

const userDefault = {
  // from auth
  userID: null,
  username: 'Anonymous',
  userAvatar: null,
  // user data
  favorites: []
};

export default (state = userDefault, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        ...action.payload,
        favorites: state.favorites
      };
    case LOGOUT:
      return userDefault;
    case LOAD_USER_FAVORITES:
      return {
        ...state,
        favorites: action.payload.favorites || []
      };
    case USER_FAV_CHANGE:
      return {
        ...state,
        favorites: action.payload
      }
    default:
      return state;
  }
}