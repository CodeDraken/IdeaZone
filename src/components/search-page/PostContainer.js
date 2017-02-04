import _ from 'lodash';

import React from 'react';
import Post from './Post';

// container for all the stickies
const PostContainer = (props) => {
  
    // color classes, adds them left to right then starts at 0 again
    let colorClasses = ['post--green', 'post--purple', 'post--blue', 'post--mint', 'post--pink', 'post--grey', 'post--orange', ''],
    index = 0;
    
    // generate posts from data
    const genPosts = [];
    _.forIn(props.posts, (value, key) => {
      let color = colorClasses[index];
      index >= colorClasses.length ? index = 0 : index++;
      
      genPosts.push(
        <Post color={color} key={key} postName={value.title} postDesc={value.description} hearts={value.rating} id={key} />  
      )
    });
  
  return (
    <div className="row">
      {genPosts}
    </div>
  );
  
}

export default PostContainer;