/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Board from './Board';
import MessageBox from './MessageBox';
import Score from './Score';
import DifficultyControls from './DifficultyControls';
import './AngerNoodle.css';
import move from './helperFunctions/movement';
import { updateBoardData, createDefaultBoard, makeTreatLocation } from './helperFunctions/data';
import handleKeyPress from './helperFunctions/eventHandlers';

const AngerNoodle = ({angerNoodleHighScore, updateAngerNoodleHighScore}) => {
  const defaultBoard = createDefaultBoard([5, 10]);
  const defaultTreat = makeTreatLocation(defaultBoard);
  const defaultSnake = [
    [10, 2],
    [10, 3],
    [10, 4],
    [10, 5],
    [10, 6],
    [10, 7],
    [10, 8],
  ];
  const [treatCoords, updateTreatCoords] = useState(defaultTreat);
  const [portalsAllowed, updatePortalsAllowed] = useState(false);
  const [gridSize, setGridSize] = useState(15);
  const [wallsAreLava, updateWallsAreLava] = useState(false);
  const [tickRate, updateTickRate] = useState(100);
  const [currentScore, updateScore] = useState(0);
  const [board, updateBoard] = useState(defaultBoard);
  const [shouldDeleteTail, updateShouldDeleteTail] = useState(true);
  const [snake, updateSnake] = useState(defaultSnake);
  const directionRef = useRef('right');
  const gameStateRef = useRef('active');
  const snakeRef = useRef(snake);
  useEffect(
    () => {
      // Add event listener
      document.addEventListener("keydown", (event) => {
        handleKeyPress(event, directionRef, gameStateRef, defaultSnake, updateSnake, updateBoard, updateScore, snakeRef
        )
      });
      // Remove event listener on cleanup
      return () => {
        document.removeEventListener("keydown", (event) => {
          handleKeyPress(event, directionRef, gameStateRef, defaultSnake, updateSnake, updateBoard, updateScore, snakeRef
            )
        });
      };
    },
    []
  );
  useEffect(() => {
    updateBoard(updateBoardData(snake, directionRef.current, treatCoords));
    if (gameStateRef.current === 'active') {
      setTimeout(() => move(shouldDeleteTail, updateShouldDeleteTail, snake, updateSnake, gridSize, board, updateBoard, directionRef.current, wallsAreLava, treatCoords, updateTreatCoords, currentScore, updateScore, angerNoodleHighScore, updateAngerNoodleHighScore, gameStateRef, snakeRef), tickRate);
    }
  }, [snake]);

  return (
    <div className="arcade-cabinet">
      <Score
        currentScore={currentScore}
        highScore={angerNoodleHighScore}
      />
      <MessageBox />
      <div className="arcade-display">
        <Board
          board={board}
          wallsAreLava={wallsAreLava}
          gameState={gameStateRef.current}
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

AngerNoodle.propTypes = {
  angerNoodleHighScore: PropTypes.number.isRequired,
  updateAngerNoodleHighScore: PropTypes.func.isRequired,
}

export default AngerNoodle;
