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
import { render } from '@testing-library/react';
const AngerNoodle = () => {
    const [portalsAllowed, updatePortalsAllowed] = useState(false);
    const [wallsAreLava, updateWallsAreLava] = useState(false);
    const [tickRate, updateTickRate] = useState(100);
    const [currentScore, updateScore] = useState(0);
    const [highScore, updateHighScore] = useState(0);
    const [direction, updateDirection] = useState('right');
    
    const createDefaultBoard = () => {
        const defaultRow = [
            {
                classString: 'cell'
            },
            {
                classString: 'cell'
            },
            {
                classString: 'cell'
            },
            {
                classString: 'cell'
            },
            {
                classString: 'cell'
            },
            {
                classString: 'cell'
            },
            {
                classString: 'cell'
            },
            {
                classString: 'cell'
            },
            {
                classString: 'cell'
            },
            {
                classString: 'cell'
            },
            {
                classString: 'cell'
            },
            {
                classString: 'cell'
            },
            {
                classString: 'cell'
            },
            {
                classString: 'cell'
            },
            {
                classString: 'cell'
            }
        ];
        const returnArray = [];
        while (returnArray.length < 15) {
            returnArray.push(defaultRow);
        }
        return returnArray;
    };
    const [board, updateBoard] = useState(createDefaultBoard());
    function renderSnake() {
        console.log(snake);
        const boardCopy = [...board];
        console.log(boardCopy);
        snake.forEach(bodySegment => {
            const [row, column] = bodySegment;
            console.log('row: ', row, "column ", column);
            console.log("current row: ", boardCopy[row]);
            const currentSegment = boardCopy[row][column];
            // console.log(currentSegment);
            currentSegment.classString = `cell segment ${direction}`;
        });
        updateBoard(boardCopy);
    }
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
        renderSnake()
    }, [snake]);


    // useEffect(() => {
    //     console.log(board);
    // }, [board]);

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