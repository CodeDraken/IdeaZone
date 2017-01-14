import React, {Component} from 'react';

import IdeaModal from './IdeaModal';
import Navbar from './Navbar';
import Footer from './Footer';
import SearchForm from './SearchForm';
import PostContainer from './PostContainer';

class App extends Component {
  render() {
    return (
      <div>
        <IdeaModal />
        <Navbar />
        <div className="container">
          <SearchForm />
          <PostContainer />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
