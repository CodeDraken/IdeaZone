import React, { Component } from 'react';

import SearchForm from './SearchForm';
import PostContainer from './PostContainer';

import getData from '../data/getData';

class SearchPage extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      search: '',
      searchData: []
    }
    
  }
  
  componentDidMount() {
    let searchData = this.sortData(this.state.search)
    getData((res) => {
      this.setState({
        data: res.ideas
      });
    });
    this.setState({
      searchData: searchData
    });
  }
  
  sortData = (search) => {
    // Will sort based on search input
    // It will find: title -> relevant tags -> description in that order
    // Shouldn't show duplicate matches ( if something matches a title and tags for example )
    // Should display the result as a post
    
    let data = this.state.data;
    let searchRegex = new RegExp( search, 'ig' );
    let dataFiltered = [];
    let results = [];

    let titleSearch = data.filter( post => {
      return post.title.match( searchRegex );
    });
    
    let tagSearch = data.filter( post => {
      let tagString = post.tags.join(' ');
      return tagString.match( searchRegex );
    });
    
    let descriptionSearch = data.filter( post => {
      return post.description.match( searchRegex );
    });
    
    
    dataFiltered = titleSearch.concat(tagSearch, descriptionSearch);
    results = dataFiltered.filter(function (item, pos) {return dataFiltered.indexOf(item) == pos});

    // all matches merged, and duplicates removed
    this.setState({
      search: '',
      searchData: results
    });
    
    
  }
  
  onSearchSubmit = ( e ) => {
    e.preventDefault();
    let search = this.refs.searchInput.value;
    
    this.sortData(search);
  }
  
  render() {
    
    let posts = this.state.searchData === undefined || this.state.searchData.length < 1 ? this.state.data : this.state.searchData;
    
    return (
      <div>
        <div className="container">
        
          <header className="text-center clearfix">
            <h1>Find Project Ideas or Add an Idea<i className="fa fa-plus-circle float-right" data-toggle="modal" data-target="#addIdeaModal" aria-hidden="true" title="Add an idea"></i></h1>
          </header>
    
          <form onSubmit={this.onSearchSubmit} id="search-input">
            <div className="input-group col-md-12">
            
              <input ref="searchInput" type="text" className="form-control input-lg" placeholder="Search" />
              
              <span className="input-group-btn">
                  <button onClick={this.onSearchSubmit} className="btn btn-default btn-lg" type="button">
                      <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
              </span>
            </div>
          </form>
          
          <PostContainer posts={posts} />
        </div>
      </div>
    )
  }
  
}

export default SearchPage;