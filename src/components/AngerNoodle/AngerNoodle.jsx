/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Board from './Board';
import MessageBox from './MessageBox';
import Score from './Score';
import DifficultyControls from './DifficultyControls';
import './AngerNoodle.css';
import {
  checkNextMove,
  updateGameStateData,
  getNextHeadPosition,
  updateTail,
} from './helperFunctions/gameLogic';
import {
  updateBoardData,
  createDefaultBoard,
  makeRandomPositionIndex,
  angryMessages,
  copyBoard,
  copySnake,
} from './helperFunctions/data';
import handleKeyPress from './helperFunctions/eventHandlers';

const AngerNoodle = ({ angerNoodleHighScore, updateAngerNoodleHighScore }) => {
  const defaultBoard = createDefaultBoard([5, 10]);
  const defaultTreat = makeRandomPositionIndex(defaultBoard);
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
  const [portalIsOpen, updateportalIsOpen] = useState(false);
  const [portalCoords, updatePortalCoords] = useState({
    blue: [],
    orange: [],
  });
  const [gridSize, setGridSize] = useState(15);
  const [wallsAreLava, updateWallsAreLava] = useState(false);
  const [tickRate, updateTickRate] = useState(100);
  const [currentScore, updateScore] = useState(0);
  const [board, updateBoard] = useState(defaultBoard);
  const [shouldDeleteTail, updateShouldDeleteTail] = useState(true);
  const [snake, updateSnake] = useState(defaultSnake);
  const [angryMessage, updateAngryMessage] = useState(angryMessages.setDefault());
  const directionRef = useRef('right');
  const gameStateRef = useRef('active');
  const snakeRef = useRef(snake);
  useEffect(
    () => {
      // Add event listener
      document.addEventListener("keydown", (event) => {
        handleKeyPress(event, directionRef, gameStateRef, defaultSnake, updateSnake, updateBoard, updateScore, snakeRef, updateAngryMessage
        )
      });
      // Remove event listener on cleanup
      return () => {
        document.removeEventListener("keydown", (event) => {
          handleKeyPress(event, directionRef, gameStateRef, defaultSnake, updateSnake, updateBoard, updateScore, snakeRef, updateAngryMessage
          )
        });
      };
    },
    []
  );
  useEffect(() => {
    updateBoard(updateBoardData(snake, portalIsOpen, portalCoords, treatCoords));
    if (gameStateRef.current === 'active') {
      setTimeout(() => {
        let newTreatCoords = [];
        const boardCopy = copyBoard(board);
        const snakeCopy = copySnake(snake);
        const head = snakeCopy[snake.length - 1];
        const boundary = gridSize - 1;
        const nextHeadPosition = getNextHeadPosition(head, directionRef.current, boundary);
        const [nextHeadPositionRow, nextHeadPositionCell] = nextHeadPosition;
        const nextHeadCell = boardCopy[nextHeadPositionRow][nextHeadPositionCell];
        updateTail(snakeCopy, shouldDeleteTail, updateShouldDeleteTail);
        const nextMoveResult = checkNextMove(nextHeadPosition, directionRef.current, boardCopy, boundary, wallsAreLava);
        if (nextMoveResult === 'gameOver') {
          gameStateRef.current = 'gameOver';
        } else if (nextMoveResult === "treat") {
          nextHeadCell.isSegment = true;
          const [newTreatRow, newTreatCell] = makeRandomPositionIndex(boardCopy);
          newTreatCoords = [newTreatRow, newTreatCell];
          updateTreatCoords(newTreatCoords);
          const newTreat = boardCopy[newTreatRow][newTreatCell];
          newTreat.isTreat = true;
        }
        snakeCopy.push(nextHeadPosition);
        updateGameStateData(currentScore, snakeCopy, boardCopy, snakeRef, newTreatCoords, angerNoodleHighScore, updateShouldDeleteTail, updateSnake, updateBoard, updateScore, updateAngerNoodleHighScore, updateAngryMessage, updateTreatCoords);
      }, tickRate);
    }
  }, [snake]);

  return (
    <div className="arcade-cabinet">
      <Score
        currentScore={currentScore}
        highScore={angerNoodleHighScore}
      />
      <MessageBox angryMessage={angryMessage} />
      <div className="arcade-display">
        <Board
          board={board}
          wallsAreLava={wallsAreLava}
          gameState={gameStateRef.current}
          direction={directionRef.current}
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
