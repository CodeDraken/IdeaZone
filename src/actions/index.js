import firebase, { firebaseRef, auth, firebaseIdeasRef, firebaseUsersRef } from './../data/firebase';
import _ from 'lodash';

import {
  FETCH_IDEAS,
  LOGIN,
  LOGOUT,
  ADD_IDEA,
  REMOVE_IDEA,
  EDIT_IDEA,
  ADD_RESOURCE,
  REMOVE_RESOURCE,
  EDIT_RESOURCE,
  ADD_FAVORITE_IDEA,
  REMOVE_FAVORITE_IDEA,
  USER_FAV_CHANGE,
  LOAD_USER_FAVORITES
} from './types';

// action creators
export const fetchIdeas = () => {
  return dispatch => {
    firebaseIdeasRef.on('value', snapshot => {
      // ideas is an object, keys are ids
      const ideas = snapshot.val();
      let parsedIdeas = {...ideas
      };

      // convert some of the objects to arrays
      _.forIn(parsedIdeas, (value, key) => {
        parsedIdeas[key].examples = _.toArray(parsedIdeas[key].examples);
        parsedIdeas[key].tutorials = _.toArray(parsedIdeas[key].tutorials);
        parsedIdeas[key].tags = _.toArray(parsedIdeas[key].tags);
      });

      dispatch({
        type: FETCH_IDEAS,
        payload: parsedIdeas
      });
    });
  }
};

export const loadUserFavorites = (userData) => {
  return {
    type: LOAD_USER_FAVORITES,
    payload: userData
  }
}

export const watchCurrentUser = (userID) => {
  return dispatch => {
    firebaseUsersRef.child(`${userID}/favorites`).on('value', snapshot => {
      // this.setState({
      //   userFavorites: snapshot.val().favorites
      // });
      dispatch({
        type: USER_FAV_CHANGE,
        payload: snapshot.val()
      });
    });
  }
}

export const login = (userData) => {
  return {
    type: LOGIN,
    payload: userData
  };
};

export const logout = () => {
  return {
    type: LOGOUT
  };
};

export const addIdea = (newIdea) => {
  return dispatch => {
    const newIdeaRef = firebaseIdeasRef.push(newIdea)
    return newIdeaRef.toString().match(/(?:\/)(-.*$)/g)[0];
  }
};

export const removeIdea = () => {
  return {
    type: REMOVE_IDEA
  };
};


export const editIdea = (ideaID, title, description,imageUrl, tags) => {
  return dispatch => {
    // new idea to push up
    let updatedIdea = {
      title,
      description,
      tags,
      imageUrl
    }

    firebaseIdeasRef.child(ideaID).update(updatedIdea);
    
    dispatch({
      type: EDIT_IDEA
    });
  }
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

export const addFavoriteIdea = (userID, favID, rating) => {
  return dispatch => {
    firebaseUsersRef.child(userID).child('favorites').push(favID).then(() => {
      let ideaRef = firebaseIdeasRef.child(favID);
        
      ideaRef.update({
        rating: ++rating
      });
        
      dispatch({
        type: ADD_FAVORITE_IDEA
      });  
    });
  };
};

export const removeFavoriteIdea = (userID, ideaID, favRef, rating) => {
  return dispatch => {
    firebaseUsersRef.child(userID).child('favorites').child(favRef).remove().then(() => {
      let ideaRef = firebaseIdeasRef.child(ideaID);

      ideaRef.update({
        rating: --rating
      });
      
      dispatch({
        type: REMOVE_FAVORITE_IDEA
      }); 
    });
  };
};

