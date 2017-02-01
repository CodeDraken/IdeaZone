import React, {Component} from 'react';

import firebase, {firebaseRef} from './../data/firebase';
import Navbar from './Navbar';
import Footer from './Footer';

// Appears on every page, other pages are passed to {props.children}
class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      user: undefined,
      ideas: [],
      users: {}
    };
  }
  
  componentDidMount() {
    const auth = firebase.auth();
    
    // data handler
    firebaseRef.on('value', snapshot => {
      const users = snapshot.val().users || {};
      const ideas = snapshot.val().ideas || {};
      
      //console.log('snapshot val: ', snapshot.val());
      
      let newUsers = [];
      let newIdeas = [];
      
      // load ideas
      // TODO fix tutorials
      Object.keys(ideas).forEach( (ideaId) => {
        let { createdAt, description, examples, imageUrl, owner, rating, tags, title, tutorials } = ideas[ideaId];
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
        
      });
      
      // load each user and their favorites
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
      
      
      console.log('New users: ', newUsers);
      console.log('New ideas: ', newIdeas);
      
    });
    
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
      console.log('state user: ', this.state.user);
    });
    console.log('state: ', this.state);
  }
  
  render() {
    return (
      <div>
        <Navbar />
        {this.props.children && React.cloneElement(this.props.children, {
          data: "data passed in!"
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