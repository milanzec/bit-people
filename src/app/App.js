import React, { Component } from 'react';
import HomePage from './HomePage';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      useGridLayout: false
    }
  }

  onLayoutSwitch = () => {
    this.setState({ useGridLayout: !this.state.useGridLayout });
  }

  render() {
    return (
      <>
        <Header onSwitchLayoutClick={this.onLayoutSwitch} />
        <main>
          <HomePage layout={this.state.useGridLayout ? 'grid' : 'list'} />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
