import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import {Switch, Route} from 'react-router-dom';
import History from './container/History/History'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu/>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/history" component={History}/>
        </Switch>
      </div> 
    );
  }
}

export default App;
