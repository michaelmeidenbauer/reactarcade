import React, { useState, useEffect } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    Link
} from 'react-router-dom';
const MainMenu = () => {
    return (
        <div className="arcade-cabinet">
            <div className="score"></div>
            <div className="message-box">
            </div>
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
                            <h4>It's Connect Four. But with my cats.</h4>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainMenu;