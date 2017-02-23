import React from 'react';

import PostCard from './PostCard';
import PostFavorite from './PostFavorite';

// <div className="progress-bar" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">

const ProfilePage = (props) => {
  return (
    <section className="profile container">

    <header className="profile__header">
      <h1 className="text-center">Bob's Profile</h1>

      <div className="progress profile__progress text-center">
        <span className="progress__text">Level 10 - 572 xp</span>
        <div className="progress-bar" role="progressbar" aria-valuenow="1" aria-valuemin="1" aria-valuemax="100">
        </div>
      </div>

      <div className="row profile__desc">
        <div className="col-xs-12 col-sm-3 col-sm-offset-2">
          <img className="profile__image img-responsive img-thumbnail" src="https://s-media-cache-ak0.pinimg.com/236x/cf/a1/ce/cfa1ce5882aef8af8b92f5347b64c1e2.jpg" />
        </div>

        <div className="profile__bio col-xs-12 col-sm-5 col-sm-offset-2">
          <h2 className="bio__title">Bio</h2>
          <p className="bio__desc">
            I make Ideas and stuff <br/> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
            suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et
          </p>
        </div>
        
      </div>
      
    </header>

    <hr/>

      <ul className="nav nav-tabs">
        <li className="active"><a data-toggle="tab" href="#profileIdeas">Ideas</a></li>
        <li><a data-toggle="tab" href="#profileFavourites">Favorites</a></li>
      </ul>

      <div className="tab-content">

        <div id="profileIdeas" className="tab-pane fade in active">
          <section className="profile__ideas">
            <h2 className="text-center">Ideas by Bob</h2>
            <div className="row">
              <PostCard />
            </div>
          </section>
        </div>
          
        <hr/>

        <div id="profileFavourites" className="tab-pane fade">
          <section className="profile__favorites">
            <h2 className="text-center">Bob's Favorites <i className="fa fa-heart-o profile__heart" aria-hidden="true"></i></h2>
            <div className="row ">
              <PostFavorite />
            </div>
          </section>
        </div>

      </div>

  </section>
  );
}

export default ProfilePage;