import React from 'react';
import { Link } from 'react-router';

const Post = (props) => {
  
  let colorClasses = ['post--green', 'post--purple', 'post--blue', 'post--mint', 'post--pink', 'post--grey', 'post--orange', ''];
  let index = Math.floor(Math.random() * 7);
  let color = 'post ' + colorClasses[index];
  let ideaLink = '/idea?index=' + props.index;
  
  return(
    <div className="col-xs-12 col-sm-4 col-md-3">
        <div className={color}>
          <h3 className="post__title">{props.postName}</h3>
          <p className="post__desc">{props.postDesc}</p>
          <i className="fa fa-heart-o post__heart" aria-hidden="true"></i><span className="post__favnum">&nbsp;{props.hearts}</span>
          <Link to={ideaLink} className="post__link float-right">View Examples</Link>
        </div>
    </div>
  );
}

export default Post;