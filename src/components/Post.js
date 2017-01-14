import React from 'react';

const Post = (props) => {
  
  let colorClasses = ['post--green', 'post--purple', 'post--blue', 'post--mint', 'post--pink', 'post--grey', 'post--orange', ''];
  let index = Math.floor(Math.random() * 7);
  let color = 'post ' + colorClasses[index];
  
  return(
    <div className="col-xs-12 col-sm-4 col-md-3">
        <div className={color}>
          <h3 className="post__title">{props.postName}</h3>
          <p className="post__desc">{props.postDesc}</p>
          <i className="fa fa-heart-o post__heart" aria-hidden="true"></i><span className="post__favnum">&nbsp;{props.hearts}</span>
          <a className="post__link float-right " href="#">View Examples</a>
        </div>
    </div>
  );
}

export default Post;