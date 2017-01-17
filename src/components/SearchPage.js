import React from 'react';

import SearchForm from './SearchForm';
import PostContainer from './PostContainer';

const SearchPage = () => {
  return (
    <div>
      <div className="container">
        <SearchForm />
        <PostContainer />
      </div>
    </div>
  )
}

export default SearchPage;