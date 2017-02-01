import firebase from 'firebase';

try {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyCyk280kJCXg5W0VBP-P6uNoKRVfUm4HUs",
      authDomain: "ideazone-157322.firebaseapp.com",
      databaseURL: "https://ideazone-157322.firebaseio.com",
      storageBucket: "ideazone-157322.appspot.com",
      messagingSenderId: "1028902247329"
    };
    
    firebase.initializeApp(config);
} catch (e) {
    console.log('Firebase failed to connect: ', e);
}


export let githubProvider = new firebase.auth.GithubAuthProvider();
export let firebaseRef = firebase.database().ref();
export default firebase;