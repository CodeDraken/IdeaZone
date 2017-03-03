import React from 'react';
import { Route, IndexRoute }
from 'react-router';

import App from './components/App';
import IdeaPage from './components/idea-page/IdeaPage';
import SearchPage from './components/search-page/SearchPage';
import AboutPage from './components/about-page/AboutPage';
import ProfilePage from './components/profile-page/ProfilePage';

export default (
  <Route path="/" component={App}>
    <Route path="idea" component={IdeaPage} componentName='IdeaPage' />
    <Route path="profile" component={ProfilePage} componentName='ProfilePage' />
    <Route path="about" component={AboutPage}  componentName='AboutPage'/>
    <IndexRoute component={SearchPage} componentName='SearchPage' />
  </Route>
);
