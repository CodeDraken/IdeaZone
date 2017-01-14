import React from 'react';
import Post from './Post';

const PostContainer = (props) => {
  return (
    <div className="row">
    
      <Post postName="Pomodoro Clock1" postDesc="A timer with 25 minute work intervals" hearts={500} />
      <Post postName="Pomodoro Clock2" postDesc="A timer with 25 minute work intervals" hearts={500} />
      <Post postName="Pomodoro Clock3" postDesc="A timer with 25 minute work intervals" hearts={500} />
      <Post postName="Pomodoro Clock4" postDesc="A timer with 25 minute work intervals" hearts={500} />
      <Post postName="Pomodoro Clock5" postDesc="A timer with 25 minute work intervals" hearts={500} />
      <Post postName="Pomodoro Clock6" postDesc="A timer with 25 minute work intervals" hearts={500} />
      <Post postName="Pomodoro Clock7" postDesc="A timer with 25 minute work intervals" hearts={500} />
      <Post postName="Pomodoro Clock8" postDesc="A timer with 25 minute work intervals" hearts={500} />
      
    </div>
  );
}

export default PostContainer;