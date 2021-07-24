/* eslint-disable no-param-reassign */
import { angryMessages, copySnake, copyBoard } from "./data";

export const getNextHeadPosition = (head, direction, boundary) => {
  const [headX, headY] = head;
  // console.log(`head x: ${headX}, head y: ${headY}`);
  // console.log('direction: ', direction);
  let newHeadPosition;
  switch (direction) {
    case 'up':
      newHeadPosition = headX !== 0 ? [headX - 1, headY] : [boundary, headY];
      break;
    case 'down':
      newHeadPosition = headX !== boundary ? [headX + 1, headY] : [0, headY];
      break;
    case 'left':
      newHeadPosition = headY !== 0 ? [headX, headY - 1] : [headX, boundary];
      break;
    case 'right':
      newHeadPosition = headY !== boundary ? [headX, headY + 1] : [headX, 0];
      break;
    default:
      break;
  }
  return newHeadPosition;
};

export const checkNextMove = (nextHeadPosition, direction, boardCopy, boundary, wallsAreLava) => {
  const board = boardCopy;
  const [nextHeadPositionY, nextHeadPositionX] = nextHeadPosition;
  const nextHeadCell = board[nextHeadPositionY][nextHeadPositionX];
  const aboutToHitTopWall =
    direction === "up" && nextHeadPositionY === boundary;
  const aboutToBottomWall = direction === "down" && nextHeadPositionY === 0;
  const aboutToHitLeftWall =
    direction === "left" && nextHeadPositionX === boundary;
  const aboutToHitRightWall =
    direction === "right" && nextHeadPositionX === 0;
  const bonk = wallsAreLava &&
    (aboutToHitTopWall ||
      aboutToBottomWall ||
      aboutToHitLeftWall ||
      aboutToHitRightWall);

  if (nextHeadCell.classString.includes("segment") || bonk) {
    return "gameOver";
  }
  if (nextHeadCell.classString.includes('treat')) {
    return "treat";
  }
  return "";
};

export const updateGameStateData = (score, snakeCopy, boardCopy, currentSnakeRef, newTreatCoords, currentHighScore,  shouldDeleteTail, updateShouldDeleteTail, updateSnake, updateBoard, updateScore, updateAngerNoodleHighScore, updateAngryMessage, updateTreatCoords) => {
  const scopedSnakeCopy = copySnake(snakeCopy);
  const scopedBoardCopy = copyBoard(boardCopy);
  const anotherSnakeRef = currentSnakeRef;
  let newScore = score;
  if (shouldDeleteTail) {
    scopedSnakeCopy.splice(0, 1);
  } else {
    updateShouldDeleteTail(true);
  }
  anotherSnakeRef.current = copySnake(scopedSnakeCopy);
  updateSnake(scopedSnakeCopy);
  updateBoard(scopedBoardCopy);
  const treatCoordsWereUpdated = newTreatCoords.length > 0;
  if (treatCoordsWereUpdated) {
    updateShouldDeleteTail(false);
    newScore += 1;
    updateTreatCoords(newTreatCoords);
    updateScore(newScore);
    if (newScore > currentHighScore) {
      updateAngerNoodleHighScore(newScore);
    }
    if (!(newScore % 5)) {
      updateAngryMessage(angryMessages.getRandom());
    }
    if (!(newScore % 25)) {
      updateAngryMessage(angryMessages.setEvery25(newScore));
    }
  }
};