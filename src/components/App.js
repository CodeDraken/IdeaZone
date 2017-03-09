import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import moment from 'moment';

import firebase, { firebaseRef, auth, firebaseIdeasRef, firebaseUsersRef } from './../data/firebase';
import * as actions from '../actions';

import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import ModalIdea from './common/ModalIdea';
import ModalEdit from './common/ModalEdit';
import ModalResource from './common/ModalResource';

// TODO REDUX
// editIdea, adding resources, addFavorites, pass data through

// Appears on every page, other pages are passed to {props.children}
class App extends Component {
  componentDidUpdate() {} // /componentDidUpdate

  componentDidMount() {
      this.props.fetchIdeas();

    } // /componentDidMount


  addIdea = (ideaTitle, ideaDesc, ideaImgUrl, ideaTags) => {
      // only logged in users can add ideas
      if (this.props.user.userID) {
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

        // let newIdeaRef = firebaseIdeasRef.push(newIdea);
        this.props.addIdea(newIdea)
      }
      else {
        alert('Please sign in to add ideas!');
      }
    } // /addIdea


  editIdea = (ideaID, ideaTitle, ideaDesc, ideaImgUrl, ideaTags) => {
      if (auth.currentUser && this.props.ideas[ideaID].owner === auth.currentUser.uid) {
        // new idea to push up
        let updatedIdea = {
          title: ideaTitle,
          description: ideaDesc,
          tags: ideaTags.split(', '),
          imageUrl: ideaImgUrl
        }

        let updatedIdeaRef = firebaseIdeasRef.child(ideaID).update(updatedIdea);
      }
      else {
        alert('Only the owner can edit this idea!');
      }
    } // /edit idea


  // adding examples / tutorials
  addResource = (ideaID, exampleTitle, exampleLink, exampleImg, tutorialTitle, tutorialLink) => {
      if (ideaID) {
        // only logged in users can add resources
        if (auth.currentUser) {
          const ideaRef = firebaseIdeasRef.child(ideaID);

          // add example
          if (exampleTitle && exampleLink) {
            // TODO urls need a http:// in front if not included
            let newExampleRef = ideaRef.child('examples').push({
              title: exampleTitle,
              imageUrl: exampleImg,
              url: exampleLink
            });
          }

          // add tutorial
          if (tutorialTitle && tutorialLink) {
            // TODO urls need a http:// in front if not included
            let newTutorialRef = ideaRef.child('tutorials').push({
              text: tutorialTitle,
              url: tutorialLink
            });
          }

        }
        else {
          alert('Please sign in to add examples or tutorials!');
        }
      }
    } // /addResource

  removeResource = () => {
      console.log('removing: ');
    } // /removeResource


  addFavoriteIdea = (ideaID) => {
      // pass current user id to post for rendering heart
      // receive post id when clicking heart
      if (auth.currentUser) {
        // test if idea id is already a favorite -1 if not a favorite else index
        let favoriteID = _.findKey(this.props.user.favorites, (val) => {
          return val === ideaID;
        });

        // not a favorite so add it
        if (!favoriteID) {
          let newFavoriteRef = firebaseUsersRef.child(this.props.user.userID).child('favorites').push(ideaID).then(() => {
            let ideaRef = firebaseIdeasRef.child(ideaID);
            let rating = this.props.ideas[ideaID].rating;

            ideaRef.update({
              rating: ++rating
            });
          });
        }
        else {
          // unfavorite idea
          firebaseUsersRef.child(this.props.user.userID).child('favorites').child(favoriteID).remove(() => {
            let ideaRef = firebaseIdeasRef.child(ideaID);
            let rating = this.props.ideas[ideaID].rating;

            ideaRef.update({
              rating: --rating
            });
          });
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

    //let componentToRender = this.props.children...;
    let componentToRender = this.props.children.props.route.componentName;
    // object of props to pass
    let dataToPass = {};

    let postID = this.props.location.query.id;
    let isFavorite = _.findKey(this.props.user.favorites, (val) => val === postID) ? true : false;
    // props to pass in depending on component type
    switch (componentToRender) {
      case 'SearchPage':
        dataToPass = {
          ideas: this.props.ideas,
          handleAddFavorite: this.addFavoriteIdea,
          userFavorites: this.props.user.favorites
        };
        break;
      case 'IdeaPage':
        let postData = _.at(this.props.ideas, postID)[0] || defaultIdeaData;
        let isOwner = auth.currentUser && postData.owner === auth.currentUser.uid;

        dataToPass = {
          postData: postData,
          handleAddFavorite: this.addFavoriteIdea,
          defaultIdeaData,
          postID,
          isOwner,
          isFavorite
        };
        break;
      default:
        dataToPass = {};
        break;
    }

    return (
      <div>
        <ModalIdea handleAddIdea={this.addIdea} />
        
        {
        _.at(this.props.ideas, this.props.location.query.id)[0] !== undefined &&
          <div>
            <ModalEdit handleEditIdea={this.editIdea} ideaID={this.props.location.query.id} ideaData={_.at(this.props.ideas, this.props.location.query.id)[0]} />
            <ModalResource handleAddResource={this.addResource} ideaID={this.props.location.query.id} />
          </div>
        }
        
        
        
        <Navbar username={this.props.user.username} avatar={this.props.user.userAvatar} />
        
          {this.props.children && React.cloneElement(this.props.children, dataToPass)}
          
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { 
    ideas: state.ideas,
    user: state.user
  };
}

export default connect(mapStateToProps, actions)(App);


/*
// NOTES //

// pass in props
{this.props.children && React.cloneElement(this.props.children, {
  onRemoveTaco: this.handleRemoveTaco
})}


// Data Structure //
object {
  /IdeaZone/Design/idz-state-data.png
}

  // Profile Page
  // componentWillReceiveProps(nextProps) {
  //     let {
  //       userFavorites
  //     } = this.props;

  //     if (userFavorites.length > 0 && this.props !== nextProps) {
  //       for (var i = 0; i < userFavorites.length; i++) {
  //         this.loadFavorite(userFavorites[i]);
  //       }
  //     }
  //   } // /componentWillReceiveProps

  // loadFavorite = (favoriteID) => {
  //     firebaseIdeasRef.child(favoriteID).once('value').then(snapshot => {
  //       this.setState({
  //         userFavorites: {
  //           ...this.state.userFavorites,
  //         [favoriteID]: snapshot.val()
  //         }
  //       })
  //     });
  //   } // /loadFavorite

*/
