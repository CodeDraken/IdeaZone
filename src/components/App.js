import React, {Component} from 'react';
import _ from 'lodash';
import moment from 'moment';

import firebase, {firebaseRef, auth, firebaseIdeasRef, firebaseUsersRef} from './../data/firebase';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

// Appears on every page, other pages are passed to {props.children}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: undefined,
      username: 'Anonymous',
      ideas: undefined,
      userFavorites: undefined
    };
  }
  
  componentDidUpdate() {
    // console.log(auth.currentUser.uid, auth.currentUser.displayName);
    //console.log('new state: ', this.state);
  } // /componentDidUpdate
  
  componentDidMount() {

    
    // authentication
    auth.onAuthStateChanged(user => {
      if (user) {
        // if someone is logged in
        this.setState({
          userID: user.uid,
          username: auth.currentUser.displayName
        });
        
        // check if current user exists in users db
        firebaseUsersRef.once('value').then(snapshot => {
          const usersData = snapshot.val();
          // current logged in user is not in the users database
          if ( !( _.findKey(usersData, {'id': auth.currentUser.uid}) ) ) {
            // new user to add
            firebaseUsersRef.push({
              id: auth.currentUser.uid,
              favorites: []
            });
            // add it to our current data
            this.setState({
              userFavorites: {}
            });
          } else {
            // user is in database load their favorites
            this.setState({
              userFavorites: _.toArray(usersData[_.findKey(usersData, {'id': auth.currentUser.uid})].favorites) || []
            });
          }
        }); // /user.once
        
      } else {
        // logged out
        this.setState({
          userID: undefined,
          username: 'Anonymous'
        });
      }
    }); // /auth change
    
    // ideas data change
    firebaseIdeasRef.on('value', snapshot => {
      // ideas is an object, keys are ids
      const ideas = snapshot.val();
      let parsedIdeas = {...ideas};
      
      // convert objects to arrays
      _.forIn(parsedIdeas, (value, key) => {
        parsedIdeas[key].examples = _.toArray(parsedIdeas[key].examples);
        parsedIdeas[key].tutorials = _.toArray(parsedIdeas[key].tutorials);
        parsedIdeas[key].tags = _.toArray(parsedIdeas[key].tags);
      });
      
      this.setState({
        ideas: parsedIdeas
      });
    }); // /ideas data change
    
  } // /componentDidMount
  
  addIdea = (ideaTitle, ideaDesc, ideaImgUrl, ideaTags) => {
    // only logged in users can add ideas
    if (auth.currentUser) {
      // new idea to push up
      let newIdea = {
        title: ideaTitle,
        description: ideaDesc,
        owner: auth.currentUser.uid,
        ownerName: auth.currentUser.displayName,
        createdAt: moment().unix(),
        tags: ideaTags.split(', '),
        imageUrl: ideaImgUrl,
        rating: 0,
        tutorials: null,
        examples: null
      }
      
      let newIdeaRef = firebaseIdeasRef.push(newIdea);
    }
  } // /addIdea
  
  addIdeaFavorite = (ideaID) => {
    
  }
  
  render() {
    // use this.props.children.type.name to identify component being rendered
    //console.log('props.children: ', this.props.children);
    
    // use this.props.location.query.id for url arguments
    //console.log('url args: ', this.props.location.query.id);
    
    const defaultIdeaData = {
      createdAt: 12345,
      description: 'loading data...',
      examples: [],
      imageUrl: '',
      owner: 'Developer',
      ownerName: 'Anonymous',
      rating: 0,
      tags: [],
      title: 'Loading data...',
      tutorials: []
    };
    
    let componentToRender = this.props.children.type.name;
    // object of props to pass
    let dataToPass = {};
    
    // props to pass in depending on component type
    switch(componentToRender) {
      case 'SearchPage':
        dataToPass = {
          ideas: this.state.ideas,
          handleAddIdea: this.addIdea
        };
        break;
      case 'IdeaPage':
        let postID = this.props.location.query.id;
        let postData = _.at(this.state.ideas, postID);
        dataToPass = {
          postData: postData[0] || defaultIdeaData,
          defaultIdeaData
        };
        break;
      default:
        dataToPass = {};
    }
    
    return (
      <div>
        <Navbar username={this.state.username} />
        
          {this.props.children && React.cloneElement(this.props.children, dataToPass)}
          
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