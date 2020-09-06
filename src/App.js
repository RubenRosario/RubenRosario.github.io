import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import AboutMe from './pages/AboutMe';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact>
              <Homepage />
            </Route>
            <Route path="/about" exact>
              <AboutMe />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
