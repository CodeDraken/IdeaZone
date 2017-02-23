import React from 'react';
import { Link, IndexLink } from 'react-router';
import firebase, {firebaseRef, githubProvider, auth} from './../../data/firebase';
import userDefault from './../../img/user.png';


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
  
  // use ternary operator for cleaner if / else
  let authButton = props.username === 'Anonymous' ? 
    <li className="pointer">
      <a onClick={handleSignIn}>
        <span className="fa fa-github"></span> | Sign in with GitHub
      </a>
    </li> :
    <li className="pointer sign-out">
      <a onClick={handleSignOut}>Sign Out</a>
    </li>;

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
              <Link to="/profile" activeClassName="active">
              My Profile
              </Link>
            </li>
            <li>
              <Link to="/about" activeClassName="active">
              About
              </Link>
            </li>
            <li>
             <i className="fa fa-plus-circle fa-2x navbar__icon hidden-xs" aria-hidden="true" title="Add an idea" data-toggle="modal" data-target="#addModal"></i>
            </li>
          </ul>
          
          <div className="nav navbar-nav navbar-right">
            {authButton}
          </div>
    
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
  avatar: userDefault
};

export default Navbar;


// <ul className="nav navbar-nav navbar-right">
//   {authButton}
//   <li className="dropdown">
//       <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Sign in <span className="caret"></span></a>
//       <ul className="dropdown-menu">
//         <a onClick={handleSignIn} className="btn btn-github">
//           <span className="fa fa-github"></span> | Sign in with GitHub
//         </a>
//         <li role="separator" className="divider"></li>
//           <button onClick={handleSignOut} type="button" className="btn btn-danger">Sign Out</button>
//       </ul>
//   </li>
 
// </ul>