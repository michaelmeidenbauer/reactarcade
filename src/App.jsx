import './App.css';
import React, { useState } from 'react';
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
  const [angerNoodleHighScore, updateAngerNoodleHighScore] = useState(0);
  return (
    <Router>
      <div id="App">
        <Switch>
          <Route path="/angerNoodle">
            <AngerNoodle
            angerNoodleHighScore={angerNoodleHighScore}
            updateAngerNoodleHighScore={updateAngerNoodleHighScore}
            />
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
