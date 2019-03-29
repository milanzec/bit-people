import React, { Component } from 'react';
import HomePage from './HomePage';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    }

    // setTimeout(() => {
    //   this.onLayoutSwitch(true);
    // }, 3000)
  }

  onLayoutSwitch = (layout) => {
    this.setState({ isToggleOn: layout });
  }

  render() {
    return (
      <>
        <Header isToggleOn={this.state.isToggleOn} />
        <main>
          <HomePage layout={this.state.isToggleOn ? 'grid' : 'list'} />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
