import React from 'react';

const Navbar = (props) => {
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
            <li className="active"><a href="#">Find Project Ideas</a></li>
            <li><a href="#">My Favorite Projects</a></li>
          </ul>
  
          <ul className="nav navbar-nav navbar-right">
            <i className="fa fa-plus-circle fa-2x navbar__icon" aria-hidden="true" title="Add an idea" data-toggle="modal" data-target="#addIdeaModal"></i>
          </ul>
  
        </div>
      </div>
    </nav>
    );
};

export default Navbar;
