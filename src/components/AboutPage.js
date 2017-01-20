import React from 'react';
import {Link} from 'react-router';

import ideaBulb from '../../public/img/ideaBulb.jpg';

// static about / info page
const AboutPage = () => {
  return (
     <div className="container">
        <Link to='/'>
            <i className="fa fa-arrow-circle-left fa-3x" aria-hidden="true" title="home page"></i>
        </Link>
        <h1 className="text-center">About IdeaZone</h1>
        <div className="row">
          <div className="col-xs-12 col-sm-10 col-sm-offset-1">
            <img className="img--center img-thumbnail img__idea" src={ideaBulb} alt="ideaBulb" />
            <h3 className="text-center">All great projects start with an idea! So we're here to help you find an idea.</h3>
            <h4 className="text-center">Take a look through some of the ideas or add an idea of your own to help others.</h4>
            <br/>
            <p className="text-center">IdeaZone was created by <em>Evan</em> and <em>Anisa</em> using a React framework with Sass and Bootstrap, while collaborating through Cloud9 and GitHub</p>
          </div>
        </div>
      </div>
  );
}

export default AboutPage;