// Modules
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
require('./src/stylesheets/main.scss')

// Components
import Navbar from './components/Navbar';



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
