import React, { Component } from 'react';
import _ from 'lodash';

import PostContainer from './PostContainer';
import ModalIdea from './../common/ModalIdea';

// TODO complete refactor

// Search page / posts page
class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      searchData: []
    }
  }
  
  componentDidMount() {
  // searchLinked is for searches passed in the url ( tags for example )
  let searchLinked = this.props.location.query.search ? this.props.location.query.search : '',
      searchData;
  
  // if a search is passed in url
  if ( searchLinked !== undefined && searchLinked.length > 0 ) {
    searchData = this.sortData(searchLinked);
    window.location.hash = '#/';
      this.setState({
        searchData
      });
    }
  } // /componentDidMount
  
  sortData = (search) => {
    // Will sort based on search input
    // It will find: title -> relevant tags -> description in that order
    // Shouldn't show duplicate matches ( if something matches a title and tags for example )
    // Should display the result as a post
    // variables
    let data = this.props.ideas,
        searchRegex = new RegExp( search, 'ig' ),
        dataFiltered = {},
        results = {};
        
    // matches in title
    let titleMatches = {};
    _.filter(data, post => {
      const postTitle = post.title || '';
      if (postTitle.match( searchRegex )) {
        const postKey =  _.findKey(data, post);
        titleMatches[postKey] = post;
      }
    });
    
    // matches in tags
    let tagMatches = {};
    _.filter(data, post => {
      const postTags = post.tags || '';
      // change array to string for simple regex matching
      let tagString = postTags.join(' ');
      
      if (tagString.match( searchRegex )) {
        const postKey =  _.findKey(data, post);
        tagMatches[postKey] = post;
      }
    });
    
    // matches in description
    let descMatches = {};
    _.filter(data, post => {
      const postDesc = post.description || '';
      if (postDesc.match( searchRegex )) {
        const postKey =  _.findKey(data, post);
        descMatches[postKey] = post;
      }
    });
    
    //console.log('matches: ', titleMatches, tagMatches, descMatches);
    
    // concat the arrays into one
    // overrides, left to right
    dataFiltered = _.assign({}, descMatches, tagMatches, titleMatches );

    // remove duplicate matches | don't need to with objects / _.assign
    results = dataFiltered;
    
    // all matches merged, and duplicates removed
    this.setState({
      search: '',
      searchData: results
    });
    
    // clear input
    this.refs.searchInput.value = '';
    
    results.length < 1 ? alert('Nothing for that search was found!') : null;
    
    return results;
  } // /sortData
  
  
  onSearchSubmit = ( e ) => {
    e.preventDefault();
    let search = this.refs.searchInput.value;
    
    this.sortData(search);
  } // /onSearchSubmit
  
  
  
  render() {
    // if there's search data use that otherwise use the normal unsorted data
    let posts = this.state.searchData === undefined || this.state.searchData.length < 1 ? this.props.ideas : this.state.searchData;
    return (
      <div>
        <div className="container">
        
          <header className="text-center clearfix">
            <h1>Find Project Ideas or Add an Idea<i className="fa fa-plus-circle float-right" data-toggle="modal" data-target="#addModal" aria-hidden="true" title="Add an idea"></i></h1>
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
          
          <PostContainer posts={posts} userFavorites={this.props.userFavorites} handleAddFavorite={this.props.handleAddFavorite} />
        </div>
      </div>
    );
  }
  
}

SearchPage.defaultProps = {
  data: {}
};

export default SearchPage;
