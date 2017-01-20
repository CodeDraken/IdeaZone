import React from 'react';

import reactLogo from '../react-logo.svg';

// basic footer on every page
const Footer = () => {
  return (
    <footer>
    <div className="container-fluid">
      <div className="row">
        <div className="col-xs-6">
          Copyright &copy; 2017 IdeaZone
        </div>
        <div className="col-xs-6 text-right">
        Created with React 
        <img src={reactLogo} className="react-logo" alt="reactjs" />
        </div>
      </div>
    </div>
  </footer>
  );
}

export default Footer;
