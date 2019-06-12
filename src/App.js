import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import Menu from './components/Menu/Menu';
import History from './container/History/History';
import Main from './container/Main/Main';
import MobileMenu from './components/mobileMenu/MobileMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu/>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/history" component={History}/>
        </Switch>
        <MobileMenu/>
      </div> 
    );
  }
}

export default App;
