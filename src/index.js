import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import './css/main.css';

import App from './components/App';
import IdeaPage from './components/IdeaPage';
import SearchPage from './components/SearchPage';
import AboutPage from './components/AboutPage';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="idea" component={IdeaPage} />
      <IndexRoute component={SearchPage} />
      <Route path="about" component={AboutPage} />
    </Route>
  </Router>,
  document.getElementById('root')
);
