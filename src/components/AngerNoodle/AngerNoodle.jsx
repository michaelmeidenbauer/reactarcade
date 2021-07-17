/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import Board from './Board';
import MessageBox from './MessageBox';
import Score from './Score';
import DifficultyControls from './DifficultyControls';
import './AngerNoodle.css';
import move from './helperFunctions/movement';
import { updateSnakePosition, updateBoardData, createDefaultBoard, makeTreatLocation } from './helperFunctions/data';
import handleKeyPress from './helperFunctions/eventHandlers';

const AngerNoodle = () => {
  const defaultBoard = createDefaultBoard([5, 10]);
  const [treatCoords, updateTreatCoords] = useState(makeTreatLocation(defaultBoard));
  // defaultBoard[initialTreatRow][initialTreatCell].classString = 'cell treat';
  const [portalsAllowed, updatePortalsAllowed] = useState(false);
  const [gridSize, setGridSize] = useState(15);
  const [wallsAreLava, updateWallsAreLava] = useState(false);
  const [tickRate, updateTickRate] = useState(100);
  const [currentScore, updateScore] = useState(0);
  const [highScore, updateHighScore] = useState(0);
  const [board, updateBoard] = useState(defaultBoard);
  const [gameState, updateGameState] = useState('active');
  const [shouldDeleteTail, updateShouldDeleteTail] = useState(true);
  const [snake, updateSnake] = useState([
    [10, 2],
    [10, 3],
    [10, 4],
    [10, 5],
    [10, 6],
    [10, 7],
    [10, 8],
  ]);
  const directionRef = useRef('right');
  useEffect(
    () => {
      // Add event listener
      document.addEventListener("keydown", (event) => {
        handleKeyPress(event, directionRef, gameState
        )
      });
      // Remove event listener on cleanup
      return () => {
        document.removeEventListener("keydown", (event) => {
          handleKeyPress(event, directionRef, gameState)
        });
      };
    },
    []
  );
  useEffect(() => {
    updateBoard(updateBoardData(snake, directionRef.current, treatCoords));
    if (gameState === 'active') {
      setTimeout(() => move(shouldDeleteTail, updateShouldDeleteTail, snake, updateSnake, gridSize, board, updateBoard, directionRef.current, wallsAreLava, treatCoords, updateTreatCoords, currentScore, updateScore, highScore, updateHighScore), tickRate);
    }
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
          wallsAreLava={wallsAreLava}
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
