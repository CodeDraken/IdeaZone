import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import moment from 'moment';

import * as actions from '../../actions';
import ProjectInfo from './ProjectInfo';
import ExampleSlider from './ExampleSlider';
import TutorialSection from './TutorialSection';


// Individual idea page view
class IdeaPage extends Component {
  componentDidMount() {
    this.props.fetchIdea(this.props.postID);
  }
  
  render() {
    let {createdAt, description, examples, imageUrl, ownerName, rating, tags, title, tutorials} = this.props.postData;
    const {defaultIdeaData} = this.props;
    
    // pass valid or default data
    createdAt = createdAt ? moment.unix(createdAt).format('MMM Do YYYY') : defaultIdeaData.createdAt;
    description = description ? description : defaultIdeaData.description;
    examples = examples ? examples : defaultIdeaData.examples;
    imageUrl = imageUrl ? imageUrl : defaultIdeaData.imageUrl;
    ownerName = ownerName ? ownerName : defaultIdeaData.ownerName;
    rating = rating ? rating : defaultIdeaData.rating;
    tags = tags ? tags : defaultIdeaData.tags;
    title = title ? title : defaultIdeaData.title;
    tutorials = tutorials ? tutorials : defaultIdeaData.tutorials;
    
    return (
      <div className="container">
        <Link to='/'>
          <i className="fa fa-arrow-circle-left fa-3x" aria-hidden="true" title="home page"></i>
        </Link>
        <ProjectInfo isFavorite={this.props.isFavorite} isOwner={this.props.isOwner} ideaID={this.props.postID} handleAddFavorite = {this.props.handleAddFavorite} {...{ createdAt, description, imageUrl, ownerName, rating, tags, title }} />
        <ExampleSlider examples={examples} />
        <TutorialSection tutorials={tutorials} />
      </div>
    );
  }
  
};

function mapStateToProps(state) {
  return {
    postData: state.ideas.currentIdea || {}
  };
}

export default connect(mapStateToProps, actions)(IdeaPage);