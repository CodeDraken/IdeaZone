import React from 'react';
import { Link } from 'react-router';

const Post = (props) => {
  
  let colorClasses = ['post--green', 'post--purple', 'post--blue', 'post--mint', 'post--pink', 'post--grey', 'post--orange', ''];
  let index = Math.floor(Math.random() * 7);
  let color = 'post ' + colorClasses[index];
  let ideaLink = '/idea?index=' + props.index;
  
  let trimLengthTitle = 1000,
      trimLengthDesc = 1000,
      browserWidth = window.outerWidth;
      
    if (browserWidth <= 300) {
      trimLengthTitle = 15;
      trimLengthDesc = 80;
    }else if (browserWidth <= 480) {
      trimLengthTitle = 25;
      trimLengthDesc = 100;
    } else if (browserWidth <= 768) {
      trimLengthTitle = 100;
      trimLengthDesc = 250;
    } else if (browserWidth <= 992) {
      trimLengthTitle = 15;
      trimLengthDesc = 100;
    }else if (browserWidth <= 1200) {
      trimLengthTitle = 15;
      trimLengthDesc = 100;
    }else {
      trimLengthTitle = 20;
      trimLengthDesc = 120;
    }
  
  let postTitle = props.postName.length > trimLengthTitle ? props.postName.substring(0, trimLengthTitle) + '...' : props.postName,
      postDesc  = props.postDesc.length > trimLengthDesc ? props.postDesc.substring(0, trimLengthDesc) + '...' : props.postDesc;
  
  return(
    <div className="col-xs-12 col-sm-4 col-md-3">
        <div className={color}>
          <h3 className="post__title">{postTitle}</h3>
          <p className="post__desc">{postDesc}</p>
          {props.postDesc === undefined || props.postDesc.length < 1 ? <h4 className="text-center">Looks like no one has added a description! :(</h4> : undefined}
          <i className="fa fa-heart-o post__heart" aria-hidden="true"></i><span className="post__favnum">&nbsp;{props.hearts}</span>
          <Link to={ideaLink} className="post__link float-right">View Project Page</Link>
        </div>
    </div>
  );
}

export default Post;