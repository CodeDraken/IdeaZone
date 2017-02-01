import React, { Component } from 'react';

import PostContainer from './PostContainer';
import Modal from './Modal';

import getData from '../data/getData';

// Search page / posts page
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
    console.log('props data searchPage: ', this.props.data);
    // load data, only runs when data is finished loading
    getData((res) => {
      // update state to data
      this.setState({
        data: res.ideas
      });
      
      // searchLinked is for searches passed in the url ( tags for example )
      let searchLinked = this.props.location.query.search ? this.props.location.query.search : '',
          searchData;
      
      // if a search is passed in url
      if ( searchLinked != undefined && searchLinked.length > 0 ) {
        searchData = this.sortData(searchLinked);
        window.location.hash = '#/';
        } else {
          searchData = this.sortData(this.state.search);
        }
        
        this.setState({
          searchData: searchData
        });
   }); // get data
  }
  
  sortData = (search) => {
    // Will sort based on search input
    // It will find: title -> relevant tags -> description in that order
    // Shouldn't show duplicate matches ( if something matches a title and tags for example )
    // Should display the result as a post
    
    let data = this.state.data,
        searchRegex = new RegExp( search, 'ig' ),
        dataFiltered = [],
        results = [];
    
    // matches in title
    let titleSearch = data.filter( post => {
      return post.title.match( searchRegex );
    });
    
    // matches in tags
    let tagSearch = data.filter( post => {
      // change array to string for simple regex matching
      let tagString = post.tags.join(' ');
      return tagString.match( searchRegex );
    });
    
    // matches in description
    let descriptionSearch = data.filter( post => {
      return post.description.match( searchRegex );
    });
    
    // concat the arrays into one
    dataFiltered = titleSearch.concat(tagSearch, descriptionSearch);
    
    // remove duplicate matches
    results = dataFiltered.filter(function (item, pos) {return dataFiltered.indexOf(item) === pos});

    // all matches merged, and duplicates removed
    this.setState({
      search: '',
      searchData: results
    });
    
    return results;
    
  }
  
  onSearchSubmit = ( e ) => {
    e.preventDefault();
    let search = this.refs.searchInput.value;
    
    this.sortData(search);
  }
  
  render() {
    // if there's search data use that otherwise use the normal unsorted data
    let posts = this.state.searchData === undefined || this.state.searchData.length < 1 ? this.state.data : this.state.searchData;
    
    return (
      <div>
        <Modal modalType='add-idea' />
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
          
          <PostContainer posts={posts} />
        </div>
      </div>
    )
  }
  
}

export default SearchPage;