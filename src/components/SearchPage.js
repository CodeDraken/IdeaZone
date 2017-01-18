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
  
  sortData = () => {
    // Will sort based on search input
    // It will find: title -> relevant tags -> description in that order
    // Shouldn't show duplicate matches ( if something matches a title and tags for example )
    // Should display the result as a post
    
    let data = this.state.data;
    let searchRegex = /(pomodoro)/ig;
    let dataFiltered = [];
    let results = [];

    let titleSearch = data.filter( post => {
      return post.title.match( searchRegex );
    });
    
    let tagSearch = data.filter( post => {
      return post.tags.includes( 'game' );
    });
    
    let descriptionSearch = data.filter( post => {
      return post.description.match( /Create/ig );
    });
    
    
    dataFiltered = titleSearch.concat(tagSearch, descriptionSearch);
    results = dataFiltered.filter(function (item, pos) {return dataFiltered.indexOf(item) == pos});

    // all matches merged, and duplicates removed
    return results;
    
  }
  
  render() {
    
    return (
      <div>
        <div className="container">
          <SearchForm />
          <PostContainer posts={this.sortData()} />
        </div>
      </div>
    )
  }
  
}

export default SearchPage;