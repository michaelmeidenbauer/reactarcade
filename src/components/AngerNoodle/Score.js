import React, { useState, useEffect } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
const Score = ({
    currentScore,
    highScore
}) => {
    return (
    <div className="score">Current score: {currentScore} High score: {highScore}</div>
    );
};

export default Score;