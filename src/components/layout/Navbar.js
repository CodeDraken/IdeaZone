import React from 'react';
import { Link, IndexLink } from 'react-router';
import firebase, {firebaseRef, githubProvider, auth} from './../../data/firebase';


// Navigation bar that renders on every page
const Navbar = (props) => {
  
  const handleSignIn = () => {
    return auth.signInWithPopup(githubProvider).then( (result) => {
      console.log('login success ', result);
    }, (error) => {
      console.log('login failed: ', error);
    });
  }
  
  const handleSignOut = () => {
    return auth.signOut().then( () => {
      console.log('signed out');
    });
  }

  return (
     <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
          <a className="navbar-brand" href="#">IdeaZone</a>
        </div>
    
        <div className="collapse navbar-collapse" id="navbar-collapse-1">
          
          <ul className="nav navbar-nav">
            <li>
              <IndexLink to="/" activeClassName="active">
              Find Project Ideas
              </IndexLink>
            </li>
            <li>
              <Link to="/idea" activeClassName="active">
              My Favorite Projects
              </Link>
            </li>
            <li>
              <Link to="/about" activeClassName="active">
              About
              </Link>
            </li>
            <li>
             <i className="fa fa-plus-circle fa-2x navbar__icon" aria-hidden="true" title="Add an idea" data-toggle="modal" data-target="#addModal"></i>
            </li>
          </ul>
          
          
          
          <ul className="nav navbar-nav navbar-right">
            <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Sign in <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <a className="btn btn-twitter">
                    <span className="fa fa-twitter"></span> | Sign in with Twitter
                  </a>
                  <a className="btn btn-google">
                    <span className="fa fa-google"></span> | Sign in with Google
                  </a>
                  <a onClick={handleSignIn} className="btn btn-github">
                    <span className="fa fa-github"></span> | Sign in with GitHub
                  </a>
                   <li role="separator" className="divider"></li>
                    <button onClick={handleSignOut} type="button" className="btn btn-danger">Sign Out</button>
                </ul>
            </li>
           
          </ul>
    
          <ul className="nav navbar-nav navbar-right userInfo">
          <p className="username">Welcome, {props.username}</p>
              <img className="profilePic" src={props.avatar} alt=""></img>
              
          </ul>
    
        </div>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  username: 'Anonymous',
  avatar: ''
};

export default Navbar;
