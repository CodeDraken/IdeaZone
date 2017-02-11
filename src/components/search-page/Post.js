import React from 'react';
import { Link } from 'react-router';

// sticky note on the search page
const Post = (props) => {
  
  // if there's no id it's broken
  if (!props.id) {
    return;
  }
  
  // color class passed in specific order, links to idea page passing in id
  let color = 'post ' + props.color,
  ideaLink = '/idea?id=' + props.id;
  
  // trim text length
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
  
  // if longer than trimLength trim it and add ... to the end
  let postTitle = props.postName.length > trimLengthTitle ? props.postName.substring(0, trimLengthTitle) + '...' : props.postName,
      postDesc  = props.postDesc.length > trimLengthDesc ? props.postDesc.substring(0, trimLengthDesc) + '...' : props.postDesc;
      
  const startAddFavorite = (e) => {
    e.preventDefault();
    props.handleAddFavorite(props.id);
  }    

  const heart = props.isFavorite ? "fa fa-heart post__heart--favorite" : "fa fa-heart-o post__heart";
  
  return (
    <div className="col-xs-12 col-sm-4 col-md-3">
        <div className={color}>
          <h3 className="post__title">{postTitle}</h3>
          {props.postDesc === undefined || props.postDesc.length < 1 ? <p className="post__desc">Looks like no one has added a description! :(</p> : <p className="post__desc">{postDesc}</p>}
          <i onClick={startAddFavorite} className={heart} aria-hidden="true"></i><span className="post__favnum">&nbsp;{props.hearts}</span>
          <Link to={ideaLink} className="post__link float-right">View Project Page</Link>
        </div>
    </div>
  );
}

Post.defaultProps = {
  color: '',
  postName: 'missing title',
  postDesc: 'missing description',
  hearts: 0,
};

Post.propTypes = {
	id: React.PropTypes.string.isRequired
};

export default Post;