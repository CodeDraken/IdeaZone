import React, { Component } from 'react';

import SearchForm from './SearchForm';
import PostContainer from './PostContainer';

import getData from '../data/getData';

class SearchPage extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    
  }
  
  componentDidMount() {
    getData((res) => {
      this.setState({
        data: res.ideas
      });
    });
    
  }
  
  render() {
    return (
      <div>
        <div className="container">
          <SearchForm />
          <PostContainer posts={this.state.data} />
        </div>
      </div>
    )
  }
  
}

export default SearchPage;