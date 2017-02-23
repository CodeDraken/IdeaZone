import React from 'react';

const PostFavourite = (props) => {
  return (
    <div>
      <div className="col-xs-12 col-sm-4 col-md-4">
        <div className="profile__favorites__post profilePost--pink">
          <h3 className="post__title">Pomodoro Clock</h3>
          <p className="post__desc">
            A timer with 25 minute work intervals 5 minute breaks and one long 15 minute break every 4 sessions. With the option to set custom times.
          </p>
          <i className="fa fa-heart-o post__heart" aria-hidden="true"></i><span className="post__favnum">&nbsp;500</span>
          <a className="post__link float-right " href="#">View Examples</a>
        </div>
      </div>
  
      <div className="col-xs-12 col-sm-4 col-md-4">
        <div className="profile__favorites__post profilePost--blue">
          <h3 className="post__title">long project title abcdsfsdfsd</h3>
          <p className="post__desc">
            And a long lorem ipsum description? We can trim it in js and add ... at the end Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
          </p>
          <i className="fa fa-heart-o post__heart" aria-hidden="true"></i><span className="post__favnum">&nbsp;500</span>
          <a className="post__link float-right " href="#">View Examples</a>
        </div>
      </div>
  
      <div className="col-xs-12 col-sm-4 col-md-4">
        <div className="profile__favorites__post profilePost--green">
          <h3 className="post__title">Pomodoro Clock</h3>
          <p className="post__desc">
            A timer with 25 minute work intervals 5 minute breaks and one long 15 minute break every 4 sessions. With the option to set custom times.
          </p>
          <i className="fa fa-heart-o post__heart" aria-hidden="true"></i><span className="post__favnum">&nbsp;500</span>
          <a className="post__link float-right " href="#">View Examples</a>
        </div>
      </div>
    </div>
  );
}

export default PostFavourite;