import React, { useState, useEffect } from 'react';
import Board from './Board';
import MessageBox from './MessageBox';
import Score from './Score';
import DifficultyControls from './DifficultyControls';
import './AngerNoodle.css';
import { changeDirection} from './helperFunctions/movement';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import { render } from '@testing-library/react';
const AngerNoodle = () => {
    // console.log(changeDirection);
    const defaultBoard = createDefaultBoard();
    const [portalsAllowed, updatePortalsAllowed] = useState(false);
    const [wallsAreLava, updateWallsAreLava] = useState(false);
    const [tickRate, updateTickRate] = useState(700);
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
    function createDefaultBoard() {
        const returnArray = [];
        while (returnArray.length < 15) {
            const rowItem = [];
            for (let i = 0; i < 15; i++) {
                rowItem.push({
                    classString: 'cell'
                })
            }
            returnArray.push(rowItem);
        }
        return returnArray;
    };
    function renderBoard() {
        // console.log(snake);
        const boardCopy = createDefaultBoard();
        // console.log(boardCopy);
        const snakeCopy = [...snake];
        snakeCopy.forEach(bodySegment => {
            const [row, column] = bodySegment;
            // console.log('row: ', row, "column ", column);
            // console.log("current row: ", boardCopy[row]);
            const currentSegment = boardCopy[row][column];
            // console.log(currentSegment);
            currentSegment.classString = `cell segment ${direction}`;
        });
        updateBoard(boardCopy);
        // console.log(boardCopy);
    }
    function updateSnakePosition() {
        console.log('updateSnakePosition called');
        const snakeCopy = [...snake];
        const head = snakeCopy[snakeCopy.length - 1];
        const [headY, headX] = head;
        console.log('head x ', headX, 'heady ', headY);
        // console.log('snake copy: ',snakeCopy)
        if (headX < 14) {
            snakeCopy.splice(0, 1);
            snakeCopy.push([headY, headX + 1]);
            // console.log('snake copy ', snakeCopy);
            updateSnake(snakeCopy);
        }
    }
    useEffect(() => {
        renderBoard();
    }, [snake]);

    useEffect(() => {
        // const interval = setInterval(() => {
        //    updateSnakePosition();
        // }, tickRate);
     
        // return () => clearInterval(interval);
        setTimeout(() => updateSnakePosition(), tickRate);
     }, [board]);

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