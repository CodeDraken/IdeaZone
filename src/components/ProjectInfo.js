import React from 'react';

const ProjectInfo = (props) => {
  return(
     <section className="project">
      <h1 className="text-center project__title">{props.post.title}</h1>

      <div className="row">
        <div className="col-xs-12 col-sm-6 col-sm-offset-3">
          <img className="img-responsive img--center project__img" src={props.post.imageUrl}></img>
          <div className="project__stats clearfix">
            <i className="fa fa-heart-o fa-lg project__heart" aria-hidden="true"></i>
            <span className="project__favnum">&nbsp;{props.post.rating}</span>
            <em className="project__tags float-right">#{props.post.tags}</em>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-12 col-sm-10 col-sm-offset-1">
          <p className="project__desc">{props.post.description}</p>
        </div>
      </div>

    </section>
    );
}

export default ProjectInfo;