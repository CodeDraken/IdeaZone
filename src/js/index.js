// Modules
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Components
import Navbar from './components/Navbar';

require('../stylesheets/main.scss')

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>Main App</h1>
        <h1>IdeaZone</h1>
      </div>
      );
  }
}

ReactDOM.render(<App />, document.getElementById('App'));
