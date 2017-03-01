import _ from 'lodash';

import React from 'react';
import Post from './Post';

// container for all the stickies
const PostContainer = (props) => {

  // const startAddFavorite = (ID) => {
  //   console.log('post container starting to add favorite');
  //   props.handleAddFavorite(ID);
  // }

  // color classes, adds them left to right then starts at 0 again
  let colorClasses = ['post--green', 'post--purple', 'post--blue', 'post--mint', 'post--pink', 'post--grey', 'post--orange', ''],
    index = 0;

  // generate posts from data
  const genPosts = [];
  // ID is same as firebase key
  _.forIn(props.posts, (value, key) => {
    let isFavorite;
    let color = colorClasses[index];
    // if user has favorites / not undefined
    if (props.userFavorites) {
      isFavorite = _.toArray(props.userFavorites).findIndex((val) => val === key) >= 0 ? true : false;
    }

    index >= colorClasses.length ? index = 0 : index++;

    genPosts.push(
      <Post isFavorite={isFavorite} color={color} key={key} postName={value.title} postDesc={value.description} hearts={value.rating} id={key} handleAddFavorite={props.handleAddFavorite}  />
    );
  });

  return (
    <div className="row">
      {genPosts}
    </div>
  );

}

export default PostContainer;
