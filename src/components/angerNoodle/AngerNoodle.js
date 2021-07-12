import React, { useState, useEffect } from 'react';
import Board from './Board';
import MessageBox from './MessageBox';
import Score from './Score';
import DifficultyControls from './DifficultyControls';
import './AngerNoodle.css';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
const AngerNoodle = () => {
    const [portalsAllowed, updatePortalsAllowed] = useState(false);
    const [wallsAreLava, updateWallsAreLava] = useState(false);
    const [tickRate, updateTickRate] = useState(100);
    const [currentScore, updateScore] = useState(0);
    const [highScore, updateHighScore] = useState(0);
    const [direction, updateDirection] = useState('right');
    const [snake, updateSnake] = useState([
        [10, 2],
        [10, 3],
        [10, 4],
        [10, 5],
        [10, 6],
        [10, 7],
        [10, 8],
      ]);
      const [rows, updateRows] = useState([]);

      useEffect(() => {
        const cellCopies = [...document.getElementsByClassName('cell')];
        const returnRows = [];
        while (cellCopies.length > 0) {
            let nextRow = cellCopies.splice(0, 15);
            rows.push(nextRow);
          }
        updateRows(returnRows);
      }, []);
      console.log(rows);
      useEffect(() => {

      }, [snake]);


    return (
        <div className="arcade-cabinet">
            <Score 
            currentScore={currentScore}
            highScore={highScore}
            />
            <MessageBox />
            <div className="arcade-display">
                <Board />
                <DifficultyControls
                tickRate={tickRate}
                updateTickRate ={updateTickRate}
                wallsAreLava={wallsAreLava}
                updateWallsAreLava ={updateWallsAreLava}
                portalsAllowed={portalsAllowed}
                updatePortalsAllowed ={updatePortalsAllowed}
                />
            </div>
        </div>
    );
};

export default AngerNoodle;