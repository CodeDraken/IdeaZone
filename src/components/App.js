import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';

// Appears on every page, other pages are passed to {props.children}
const App = (props) => {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
}

export default App;