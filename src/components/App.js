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
      userAvatar: undefined,
      ideas: undefined,
      userFavorites: undefined,
      currentUserRef: undefined
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
          username: auth.currentUser.displayName,
          userAvatar: user.photoURL
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
              userFavorites: _.toArray(usersData[_.findKey(usersData, {'id': auth.currentUser.uid})].favorites) || [],
              currentUserRef: _.findKey(usersData, {'id': auth.currentUser.uid})
            });
            watchCurrentUser();
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
    
    // on currentUserData change
    const watchCurrentUser = () => {
      firebaseUsersRef.child(this.state.currentUserRef).on('value', snapshot => {
        //console.log('user change: ', snapshot.val());
        this.setState({
          userFavorites: _.toArray(snapshot.val().favorites)
        });
      });
    } // /currentUserData change
    
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
    } else {
      alert('Please sign in to add ideas!');
    }
  } // /addIdea
  
  addFavoriteIdea = (ideaID) => {
    // pass current user id to post for rendering heart
    // receive post id when clicking heart
    if (auth.currentUser) {
      // test if idea id is already a favorite -1 if not a favorite else index
      let notAFavorite = _.findIndex(this.state.userFavorites, (val) => {
        return val === ideaID;
      });

      // -1 means not a favorite
      if (notAFavorite < 0) {
        let newFavoriteRef = firebaseUsersRef.child(this.state.currentUserRef).child('favorites').push(ideaID).then(() => {
          let ideaRef = firebaseIdeasRef.child(ideaID);
          let rating = this.state.ideas[ideaID].rating;
          
          ideaRef.update({
            rating: ++rating
          });
        });
      } else {
        alert('Idea ' + ideaID + ' is already a favorite!');
      }
    }
  } // /addFavoriteIdea
  
  render() {
    // use this.props.children.type.name to identify component being rendered
    //console.log('props.children: ', this.props.children);
    
    // use this.props.location.query.id for url arguments
    //console.log('url args: ', this.props.location.query.id);
    
    // use React.cloneElement for passing props to children
    // will break if multiple child components http://stackoverflow.com/questions/32370994/how-to-pass-props-to-this-props-children
    
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
          handleAddIdea: this.addIdea,
          handleAddFavorite: this.addFavoriteIdea
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
        break;
    }
    
    return (
      <div>
        <Navbar username={this.state.username} avatar={this.state.userAvatar} />
        
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