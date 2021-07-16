import './App.css';
import React from 'react';
// import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import MainMenu from './components/mainMenu/MainMenu';
import AngerNoodle from './components/AngerNoodle/AngerNoodle';
import ConnectFur from './components/ConnectFur/ConnectFur';

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
