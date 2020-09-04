import React, { Component } from 'react';
import Homepage from './pages/Homepage';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Homepage />
      </div>
    );
  }
}

export default App;
