import React, { Component } from 'react';
import { Link } from 'react-router';


import ProjectInfo from './ProjectInfo';
import ExampleSlider from './ExampleSlider';
import TutorialSection from './TutorialSection';
import Modal from './Modal';

import getData from '../data/getData';

// Individual idea page view
class IdeaPage extends Component {
  constructor(props) {
    super(props);
    // loads its own data and uses id passed in to render the correct info
    this.state = {
      data: [],
      id: null
    }
  }

  componentDidMount() {
    console.log('props data ideaPage: ', this.props.data);
    getData((res) => {
      this.setState({
        data: res.ideas,
        id: this.props.location.query.id
      });
    });
  }
  
  render() {
    // vars from state
    let { data, id } = this.state;
    // load the post that has the passed in id
    let postWithID = data.filter( (post) => {
      return Number(post.id) === Number(id);
    });
    // the individual post data
    let postData = postWithID[0] || [];

    return (
      <div className="container">
        <Modal modalType='add-info' />
        <Link to='/'>
          <i className="fa fa-arrow-circle-left fa-3x" aria-hidden="true" title="home page"></i>
        </Link>
        <ProjectInfo post={postData} />
        <ExampleSlider examples={postData.examples} />
        <TutorialSection tutorials={postData.tutorials} />
      </div>
    )
  }
  
}


export default IdeaPage;