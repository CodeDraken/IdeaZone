import React from 'react';
import Post from './Post';

const PostContainer = (props) => {
    
    let colorClasses = ['post--green', 'post--purple', 'post--blue', 'post--mint', 'post--pink', 'post--grey', 'post--orange', ''];
    let index = 0;
    const genPosts = props.posts.map( ( post, i ) => {
      let color = colorClasses[index];
      index >= colorClasses.length ? index = 0 : index++;
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

// <Post postName="Pomodoro Clock1" postDesc="A timer with 25 minute work intervals" hearts={500} />