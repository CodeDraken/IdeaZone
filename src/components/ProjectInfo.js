import React from 'react';

const ProjectInfo = (props) => {
  
  const hasImg = props.post.imageUrl !== undefined && props.post.imageUrl.length > 0 ? true : false;
  const projectImage = hasImg ? 
                <img className="img-responsive project__img" src={props.post.imageUrl}></img> :
                <div className="project__img--none"><h4 className="text-center">no project image provided</h4></div>;
                
  let postTags = '';
  let propTags = props.post.tags;
  
  if ( propTags === undefined || propTags.length < 1 ) {
    postTags = <a href="#"><em className="project__tags float-right">#idea</em></a>;
  } else {
    postTags = propTags.map( ( tag, i ) => {
      return (
        <a key={tag + i} href="#"><em className="project__tags float-right">#{tag}&nbsp;</em></a>
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
            <span className="project__favnum">&nbsp;{props.post.rating}</span>
            
            {postTags}
            
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-10 col-xs-offset-1">
          <p className="project__desc">{props.post.description}</p>
          {props.post.description === undefined || props.post.description.length < 1 ?
            <h4 className="text-center">Looks like no one has added a description! :(</h4> :
            undefined}
        </div>
      </div>

    </section>
    );
}

export default ProjectInfo;