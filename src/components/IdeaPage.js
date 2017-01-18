import React, { Component } from 'react';
import { Link } from 'react-router';


import ProjectInfo from './ProjectInfo';
import ExampleSlider from './ExampleSlider';
import TutorialSection from './TutorialSection';

import getData from '../data/getData';

class IdeaPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      index: ''
    }
  }

  componentDidMount() {
    getData((res) => {
      this.setState({
        data: res.ideas,
        index: this.props.location.query.index
      });
    });
  }
  
  render() {
      let postData = this.state.data[this.state.index] || [];
    
      return (
        <div className="container">
          <Link to='/'>
            <i className="fa fa-arrow-circle-left fa-3x" aria-hidden="true"></i>
          </Link>
          <ProjectInfo post={postData} />
          <ExampleSlider examples={postData.examples} />
          <TutorialSection tutorials={postData.tutorials} />
        </div>
    )
  }
  
}


export default IdeaPage;

// let postData = this.state.data[this.state.index] || [];