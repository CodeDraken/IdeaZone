import React, {Component} from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

// Appears on every page, other pages are passed to {props.children}
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {this.props.children && React.cloneElement(this.props.children, {
          data: "data passed in!"
        })}
        <Footer />
      </div>
    );
  }
}

export default App;

/*
// pass in props
{this.props.children && React.cloneElement(this.props.children, {
  onRemoveTaco: this.handleRemoveTaco
})}

*/