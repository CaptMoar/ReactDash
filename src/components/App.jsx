import React, { Component } from 'react';

import Nav from './nav/Nav';
import Auth from './auth/Auth';
import Home from './home/Home';
import About from './about/About';
import Loader from './loader/Loader';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import '../css/App.css';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div class="app">

          <Nav/>
          <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/Auth" component={Auth}></Route>
          <Route path="/About" component={About}></Route>
          <Route path="/Loader" component={Loader}></Route>
          </Switch>
          

        </div>
      </Router>

    )
  }
}
