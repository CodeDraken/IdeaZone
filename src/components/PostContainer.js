import React from 'react';
import Post from './Post';

const PostContainer = (props) => {
  
    const genPosts = props.posts.map( ( post, i ) => {
      return (
        <Post key={post.title + i} postName={post.title} postDesc={post.description} hearts={post.rating} />
      )
    });
  
  
  return (
    <div className="row">
      {genPosts}
    </div>
  );
}

export default PostContainer;

// <Post postName="Pomodoro Clock1" postDesc="A timer with 25 minute work intervals" hearts={500} />