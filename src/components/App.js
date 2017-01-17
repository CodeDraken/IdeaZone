import React from 'react';

import Modal from './Modal';
import Navbar from './Navbar';
import Footer from './Footer';
// import getData from '../data/getData';

// getData();

const App = (props) => {
  return (
    <div>
      <Modal />
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
}

export default App;