import React, { useState, useEffect } from 'react';
import Board from './Board';
import MessageBox from './MessageBox';
import Score from './Score';
import DifficultyControls from './DifficultyControls';
import './AngerNoodle.css';
import { changeDirection } from './helperFunctions/movement';
import { updateSnakePosition, updateBoardData, createDefaultBoard } from './helperFunctions/data';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import { render } from '@testing-library/react';
const AngerNoodle = () => {
    const defaultBoard = createDefaultBoard();
    const [portalsAllowed, updatePortalsAllowed] = useState(false);
    const [wallsAreLava, updateWallsAreLava] = useState(false);
    const [tickRate, updateTickRate] = useState(100);
    const [currentScore, updateScore] = useState(0);
    const [highScore, updateHighScore] = useState(0);
    const [direction, updateDirection] = useState('right');
    const [board, updateBoard] = useState(defaultBoard);
    const [snake, updateSnake] = useState([
        [10, 2],
        [10, 3],
        [10, 4],
        [10, 5],
        [10, 6],
        [10, 7],
        [10, 8],
    ]);
    useEffect(() => {
        updateBoard(updateBoardData(snake, direction));
        const interval = setInterval(() => {
            updateSnake(updateSnakePosition(snake));
        }, tickRate);
        return () => clearInterval(interval);
        // setTimeout(() => updateSnake(updateSnakePosition(snake)), tickRate);
    }, [snake]);

    return (
        <div className="arcade-cabinet">
            <Score
                currentScore={currentScore}
                highScore={highScore}
            />
            <MessageBox />
            <div className="arcade-display">
                <Board
                    board={board}
                />
                <DifficultyControls
                    tickRate={tickRate}
                    updateTickRate={updateTickRate}
                    wallsAreLava={wallsAreLava}
                    updateWallsAreLava={updateWallsAreLava}
                    portalsAllowed={portalsAllowed}
                    updatePortalsAllowed={updatePortalsAllowed}
                />
            </div>
        </div>
    );
};

export default AngerNoodle;