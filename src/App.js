import logo from './logo.svg';
import './App.css';
import MainMenu from './components/mainMenu/MainMenu';
import AngerNoodle from './components/angerNoodle/AngerNoodle';
import ConnectFur from './components/connectFur/ConnectFur';

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div id="App">
              <Switch>
                <Route path="/angerNoodle">
                   <AngerNoodle />
                </Route>
                <Route path="/connectFur">
                  <ConnectFur />
                </Route>
                <Route exact path="/">
                  <MainMenu />
                </Route>
                <Redirect to="/" />
              </Switch>
      </div>
    </Router>
  );
}

export default App;
