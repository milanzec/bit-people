import React, { Component } from 'react';
import HomePage from './HomePage';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <HomePage />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
