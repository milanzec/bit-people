import React, { Component } from 'react';
import HomePage from './HomePage';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    }
  }

  onLayoutSwitch = (layout) => {
    this.setState({ isToggleOn: layout });
  }

  render() {
    return (
      <>
        <Header isToggleOn={this.onLayoutSwitch} />
        <main>
          <HomePage layout={this.state.isToggleOn ? 'grid' : 'list'} />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
