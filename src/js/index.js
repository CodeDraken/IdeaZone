import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Header extends Component {
  render() {
    return (
      <h1>Hello World</h1>
    );
  }
}

const App = document.getElementById('App');
ReactDOM.render(<Header />, App);