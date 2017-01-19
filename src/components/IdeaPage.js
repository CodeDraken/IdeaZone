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
      id: null
    }
  }

  componentDidMount() {
    getData((res) => {
      this.setState({
        data: res.ideas,
        id: this.props.location.query.id
      });
    });
  }
  
  render() {
      let data = this.state.data;
      let id = this.state.id;
      let postWithID = data.filter( (post) => {
        return post.id == id;
      });

      let postData = postWithID[0] || [];

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