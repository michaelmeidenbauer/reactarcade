import React from 'react';

import {
  Link,
} from 'react-router-dom';

const MainMenu = () => (
  <div className="arcade-cabinet">
    <div className="score" />
    <div className="message-box" />
    <div className="arcade-display">
      <div className="main-menu">
        <div className="menu-item-well">
          <Link to="/angerNoodle">
            <div className="menu-item" id="angerNoodleBox">
              <h1 className="anger-noodle">aNgEr NoOdLe</h1>
              <h4>A game about how my cat is an asshole.</h4>
            </div>
          </Link>
          <Link to="/connectFur">
            <div className="menu-item" id="connectFurBox">
              <h1 className="connect-fur-button">Connect Fur</h1>
              <h4>It&apos;s Connect Four. But with my cats.</h4>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default MainMenu;
