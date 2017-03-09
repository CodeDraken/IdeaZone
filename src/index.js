import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

import * as actions from './actions';
import routes from './routes';
import configure from './configureStore';
import firebase, { firebaseRef, auth, firebaseIdeasRef, firebaseUsersRef } from './data/firebase';

import './css/main.css';

const store = configure();


// authentication
auth.onAuthStateChanged(user => {
  if (user) {
    // if someone is logged in
    store.dispatch(actions.login({
      userID: user.uid,
      username: auth.currentUser.displayName,
      userAvatar: user.photoURL
    }));

    // check if current user exists in users db and load their data
    firebaseUsersRef.child(user.uid).once('value').then(snapshot => {
      const userData = snapshot.val();
      const userExists = userData !== null;
      const userID = auth.currentUser.uid;

      if (userExists) {
        store.dispatch(actions.loadUserFavorites(userData));
      }
      else {
        firebaseUsersRef.child(userID).set({
          id: userID,
          favorites: []
        });
      }
      
      store.dispatch(actions.watchCurrentUser(userID));
    }); // /user.once

  }
  else {
    // logged out
    store.dispatch(actions.logout());
  }
});


ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);