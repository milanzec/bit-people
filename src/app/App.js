import React, { Component } from 'react';
import Header from './Header';
import Search from './Search';
import HomePage from './HomePage';
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

reloadPage=()=>{
  window.location.reload()
}

  render() {
    return (
      <>
        <Header onSwitchLayoutClick={this.onLayoutSwitch} reloadPage={this.reloadPage} />
        <main>
          <Search />
          <HomePage layout={this.state.useGridLayout ? 'grid' : 'list'} />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
