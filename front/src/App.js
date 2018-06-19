import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Skills from './components/Skills'





class App extends Component {
  render() {
    return (
      <div>
      <NavBar />
      <Switch>
        <Route exact path="/skills" component={Skills} />
      </Switch>
      </div>

    );
  }
}

export default App;
