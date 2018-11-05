import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = 'http://localhost:3000/sushis';

class App extends Component {
  state = {
    sushis: [],
    cash: 500,
    eaten: []
  };

  componentDidMount() {
    fetch(API)
      .then(r => r.json())
      .then(console.log);
  }
  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis.slice(0, 4)} />
        <Table cash={this.state.cash} eaten={this.state.eaten} />
      </div>
    );
  }
}

export default App;
