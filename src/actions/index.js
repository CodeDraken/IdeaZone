import firebase, { firebaseRef, auth, firebaseIdeasRef, firebaseUsersRef } from './../data/firebase';

export const FETCH_IDEAS = 'FETCH_IDEAS';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT'
export const ADD_IDEA = 'ADD_IDEA';
export const REMOVE_IDEA = 'REMOVE_IDEA';
export const EDIT_IDEA = 'EDIT_IDEA';
export const ADD_RESOURCE = 'ADD_RESOURCE';
export const REMOVE_RESOURCE = 'REMOVE_RESOURCE';
export const EDIT_RESOURCE = 'EDIT_RESOURCE';
export const ADD_FAVORITE_IDEA = 'ADD_FAVORITE_IDEA';


// action creators
export const fetchIdeas = () => {
  return {
    type: FETCH_IDEAS
  };
};

export const login = () => {
  
};

export const logout = () => {
  
};

export const addIdea = () => {
  return {
    type: ADD_IDEA
  };
};

export const removeIdea = () => {
  return {
    type: REMOVE_IDEA
  };
};

export const editIdea = () => {
  return {
    type: EDIT_IDEA
  };
};

export const addResource = () => {
  return {
    type: ADD_RESOURCE
  };
};

export const removeResource = () => {
  return {
    type: REMOVE_RESOURCE
  };
};

export const editResource = () => {
  return {
    type: EDIT_RESOURCE
  };
};

export const addFavoriteIdea = () => {
  return {
    type: ADD_FAVORITE_IDEA
  };
};