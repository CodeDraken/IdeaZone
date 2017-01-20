import React from 'react';
import Post from './Post';

// container for all the stickies
const PostContainer = (props) => {
  
    // color classes, adds them left to right then starts at 0 again
    let colorClasses = ['post--green', 'post--purple', 'post--blue', 'post--mint', 'post--pink', 'post--grey', 'post--orange', ''],
    index = 0;
    const genPosts = props.posts.map( ( post, i ) => {
      let color = colorClasses[index];
      index >= colorClasses.length ? index = 0 : index++;
      // generate stickies / posts
      return (
        <Post color={color} key={post.title + '#' + post.id} postName={post.title} postDesc={post.description} hearts={post.rating} id={post.id} />
      )
    });
  
  return (
    <div className="row">
      {genPosts}
    </div>
  );
  
}

export default PostContainer;