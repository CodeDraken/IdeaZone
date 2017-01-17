import React, {Component} from 'react';

import Modal from './Modal';
import Navbar from './Navbar';
import Footer from './Footer';


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