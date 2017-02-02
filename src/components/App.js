import React, {Component} from 'react';
import _ from 'lodash';

import firebase, {firebaseRef} from './../data/firebase';
import Navbar from './Navbar';
import Footer from './Footer';

// Appears on every page, other pages are passed to {props.children}
class App extends Component {
  constructor(props) {
    super(props);
    // user is the currently logged in user id or undefined, ideas are all of the ideas,
    // users array of user ids and their favorites
    this.state = {
      user: undefined,
      ideas: [],
      users: []
    };
  }
  
  componentDidMount() {
    const auth = firebase.auth();
    
    // data handler runs when Firebase data changes and on first load
    firebaseRef.on('value', snapshot => {
      const users = snapshot.val().users || {};
      const ideas = snapshot.val().ideas || {};
      
      let newUsers = users;
      let newIdeas = [];
      
      // load ideas | loop through the object of idea objects properly converting everything as needed
      Object.keys(ideas).forEach( (ideaId) => {
        
        // the current idea object
        let currentIdeaObject = ideas[ideaId];
        
        // load the non-array properties
        let { createdAt, description, imageUrl, owner, rating, title } = currentIdeaObject;
        
        // firebase uses objects for arrays so convert the data that's suppose to be an array to an array
        let arrayExamples = _.toArray(currentIdeaObject.examples),
        arrayTags = _.toArray(currentIdeaObject.tags),
        arrayTutorials = _.toArray(currentIdeaObject.tutorials);
        
        /* //////////////////
        TODO test more than 1 ideas on the data before removing old code
        
        let arrayExamples = [], arrayTags = [], arrayTutorials = [];
        
        // make the examples object into an array
        Object.keys(ideas[ideaId].examples).forEach((example) => {
            arrayExamples.push(ideas[ideaId].examples[example]);
        });
        
        // make the tags object into an array
        Object.keys(ideas[ideaId].tags).forEach((tag) => {
            arrayTags.push(ideas[ideaId].tags[tag]);
        });
        
        // make the tutorials object into an array
        Object.keys(ideas[ideaId].tutorials).forEach((tutorial) => {
            arrayTutorials.push(ideas[ideaId].tutorials[tutorial]);
        });
        
        ////////////////// */
        
        // push the idea object onto our newIdeas array
        newIdeas.push({
          ideaId,
          createdAt,
          description,
          examples: arrayExamples,
          imageUrl,
          owner,
          rating,
          tags: arrayTags,
          title,
          tutorials: arrayTutorials
        });
        
      }); // /load ideas
      
      
      // load each user and their favorites 
      // TODO: figure out which method to use for users: array or object version
      
      // object version of users
      // _.forIn(newUsers, (value, key) => {
      //   newUsers[key].favorites = _.toArray(newUsers[key].favorites);
      // });
      
      // array version
      newUsers = _.toArray(users).map( user => {
        return {
          ...user,
          favorites: _.toArray(user.favorites)
        };
      });
      
      /* //////////////////
        TODO test more than 1 user on the data before removing old code
      Object.keys(users).forEach( (userId) => {
        let userFavorites = [];
        
        Object.keys(users[userId].favorites).forEach((favorite) => {
            userFavorites.push(users[userId].favorites[favorite]);
        });
        
        newUsers.push({
          userId,
          favorites: userFavorites
        });

      });
      ////////////////// */
      
      console.log('New users: ', newUsers);
      console.log('New ideas: ', newIdeas);
      
      this.setState({
        users: newUsers,
        ideas: newIdeas
      });
      
    }); // firebase on value
    
    // authentication
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          user: user.uid
        });
      } else {
        this.setState({
          user: undefined
        });
      }
    });
    
  } // component did mount
  
  render() {
    return (
      <div>
        <Navbar />
        {this.props.children && React.cloneElement(this.props.children, {
          data: this.state
        })}
        <Footer />
      </div>
    );
  }
}

export default App;

/*
// pass in props
{this.props.children && React.cloneElement(this.props.children, {
  onRemoveTaco: this.handleRemoveTaco
})}

*/