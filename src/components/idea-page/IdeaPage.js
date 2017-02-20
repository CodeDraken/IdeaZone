import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';

import ProjectInfo from './ProjectInfo';
import ExampleSlider from './ExampleSlider';
import TutorialSection from './TutorialSection';


// Individual idea page view
const IdeaPage = (props) =>  {
  let {createdAt, description, examples, imageUrl, ownerName, rating, tags, title, tutorials} = props.postData;
  const {defaultIdeaData} = props;
  
  // const defaultIdeaData = {
  //     createdAt: 12345,
  //     description: "loading data...",
  //     examples: [],
  //     imageUrl: "",
  //     owner: "324543abcdev",
  //     ownerName: "Anonymous",
  //     rating: 0,
  //     tags: [],
  //     title: "Loading data...",
  //     tutorials: []
  //   };
  
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
      <ProjectInfo isFavorite={props.isFavorite} isOwner={props.isOwner} ideaID={props.postID} handleAddFavorite = {props.handleAddFavorite} {...{ createdAt, description, imageUrl, ownerName, rating, tags, title }} />
      <ExampleSlider examples={examples} />
      <TutorialSection tutorials={tutorials} />
    </div>
  );
  
}

export default IdeaPage;