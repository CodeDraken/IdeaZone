import React from 'react';
import { Link } from 'react-router';

// top of the idea page main idea info
const ProjectInfo = (props) => {
  // load the image or use a default if none is provided
  const hasImg = props.post.imageUrl !== undefined && props.post.imageUrl.length > 0 ? true : false;
  const projectImage = hasImg ? 
                <img className="img-responsive project__img" src={props.post.imageUrl} alt={props.post.title + ' image not found'}></img> :
                <div className="project__img--none"><h4 className="text-center">no project image provided :(</h4></div>;
                
  let postTags = '';
  let propTags = props.post.tags;
  
  if ( propTags === undefined || propTags.length < 1 ) {
    // default tags if none
    postTags = <a href="#"><em className="project__tags float-right">#notags</em></a>;
  } else {
    postTags = propTags.map( ( tag, i ) => {
      // generate tags that link to search page and search
      return (
        <Link key={tag + i} to={`/?search=${tag}`}><em className="project__tags float-right">#{tag}&nbsp;</em></Link>
      )
    });
  }
  
  return(
     <section className="project">
      <h1 className="text-center project__title">{props.post.title}</h1>

      <div className="row">
        <div className="col-xs-8 col-xs-offset-2 col-sm-6 col-sm-offset-3">
          {projectImage}
          <div className="project__stats clearfix">
            <i className="fa fa-heart-o fa-lg project__heart" aria-hidden="true"></i>
            <span className="project__favnum">&nbsp;{props.post.rating || 0}</span>
            
            {postTags}
            
          </div>
        </div>
      </div>
      
      <div className = "row">
        <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
          <p className ="created__by">Created by: Test User</p>
          <p className = "created__at">Created at: Jan. 31</p>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 text-center">
          <p className="project__desc">{props.post.description}</p>
          {props.post.description === undefined || props.post.description.length < 1 ?
            <h4 className="text-center">Oops! Where did the description go?</h4> :
            undefined}
        </div>
      </div>

    </section>
  );
}

export default ProjectInfo;