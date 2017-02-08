import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import './css/main.css';

import App from './components/App';
import IdeaPage from './components/idea-page/IdeaPage';
import SearchPage from './components/search-page/SearchPage';
import AboutPage from './components/about-page/AboutPage';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="idea" component={IdeaPage} />
      <Route path="about" component={AboutPage} />
      <IndexRoute component={SearchPage} />
    </Route>
  </Router>,
  document.getElementById('root')
);
