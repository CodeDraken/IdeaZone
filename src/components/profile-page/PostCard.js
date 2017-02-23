import React from 'react';

const PostCard = (props) => {
  return (
    <div>
  
      <div className="col-xs-12 col-sm-6">
  
        <div className="post--card">
          <h3 className="post__title">Pomodoro Clock</h3>
          <a className="post__author" href="#">created by Bob</a>
          <p className="post__desc">
            A timer with 25 minute work intervals 5 minute breaks and one long 15 minute break every 4 sessions. With the option to set custom times.
          </p>
          <i className="fa fa-heart-o post__heart" aria-hidden="true"></i><span className="post__favnum">&nbsp;2903</span>
          <a className="post__link float-right " href="#">View Idea</a>
        </div>
  
        <div className="post--card--img">
          <h3 className="post__title text-center">Meme Generator</h3>
          <a className="post__author text-center" href="#">created by Bob</a>
          <img className="post__img" src="http://i.imgur.com/49Kg4w8.jpg" />
          <i className="fa fa-heart-o post__heart" aria-hidden="true"></i><span className="post__favnum">&nbsp;4321</span>
          <a className="post__link float-right " href="#">View Idea</a>
        </div>
  
      </div>
  
      <div className="col-xs-12 col-sm-6">
  
        <div className="post--card--img">
          <h3 className="post__title text-center">Random quote generator</h3>
          <a className="post__author text-center" href="#">created by Bob</a>
          <img className="post__img" src="https://d13yacurqjgara.cloudfront.net/users/8436/screenshots/113953/shot_1297462337.jpg" />
          <i className="fa fa-heart-o post__heart" aria-hidden="true"></i><span className="post__favnum">&nbsp;825</span>
          <a className="post__link float-right " href="#">View Idea</a>
        </div>
  
        <div className="post--card">
          <h3 className="post__title">Lorem Ipsum</h3>
          <a className="post__author" href="#">created by Bob</a>
          <p className="post__desc">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
            ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum
            zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue...
          </p>
          <i className="fa fa-heart-o post__heart" aria-hidden="true"></i><span className="post__favnum">&nbsp;55</span>
          <a className="post__link float-right " href="#">View Idea</a>
        </div>
      </div>
      
  </div>
  );
}

export default PostCard;