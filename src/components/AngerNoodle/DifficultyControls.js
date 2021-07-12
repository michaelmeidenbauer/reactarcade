import React, { useState, useEffect } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
const DifficultyControls = ({
    updateTickRate,
    wallsAreLava,
    updateWallsAreLava,
    portalsAllowed,
    updatePortalsAllowed
}) => {
    return (
        <div className="difficulty-controls">
            <div className="anger-noodle-controls">
                <div>Sleepy Anger Noodle</div>
            <div className="slider">
                <input id="speed-slider" type="range" defaultValue="100" min="50" max="150" onChange={(e) => {
                    updateTickRate(e.target.value);
                }}/>
            </div>
            <div>Turbo Anger Noodle</div>
            </div>
            <div className="anger-noodle-controls">
            <button id="lava-button" className={wallsAreLava ? 'lava' : ""} onClick={() => {
                updateWallsAreLava(!wallsAreLava);
            }}>
            💀 Walls are lava 💀
            </button>
            <button id="portal-button" className={portalsAllowed ? 'portal-button-active' : ""} onClick={() => {
                updatePortalsAllowed(!portalsAllowed);
            }}>
            Portals 
            </button>
            </div>
    </div>
    );
};

export default DifficultyControls;