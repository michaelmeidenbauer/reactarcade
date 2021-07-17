import { updateSnakePosition, makeTreatLocation } from "./data";

const move = (shouldDeleteTail, updateShouldDeleteTail, snake, updateSnake, gridSize, board, updateBoard, direction, wallsAreLava, treatCoords, updateTreatCoords, currentScore, updateScore, highScore, updateHighScore) => {
  let score = currentScore;
  const currentHighScore = highScore;
  let newTreatCoords = null;
  const boardCopy = [...board];
  const snakeCopy = snake.map(segment => {
    const segmentArray = [...segment];
    return segmentArray;
  }
  );
  const head = snakeCopy[snake.length - 1];
  const boundary = gridSize - 1;

  const removeTail = () => {
    snakeCopy.splice(0, 1);
  };

  const changeDirection = () => {
    const [headX, headY] = head;
    // console.log(`head x: ${headX}, head y: ${headY}`);
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

  const checkNextMove = (nextHeadPosition) => {
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
      console.log('game over!');
    }
    if (nextHeadCell.classString.includes("treat")) {
      const [treatRow, treatCell] = treatCoords;
      nextHeadCell.classString = `segment ${direction}`;
      boardCopy[treatRow][treatCell].classString = 'cell';
      newTreatCoords = makeTreatLocation(boardCopy);
      const [newTreatRow, newTreatCell] = newTreatCoords;
      boardCopy[newTreatRow][newTreatCell].cellString = 'cell treat';
      // this.eatTreat();
    }
  };

  // MAIN BODY OF MOVE LOGIC STARTS HERE
  if (shouldDeleteTail) {
    removeTail();
  } else {
    updateShouldDeleteTail(true);
  }
  const [headPositionY, headPositionX] = head;
  const headCell = board[headPositionY][headPositionX];
  const newHeadPosition = changeDirection(headCell);

  // if (headCell.hasClass('portal')) {
  //   //get the coords of the other portal and feed them into changeDirection
  //   newHeadPosition = headCell.hasClass('orange') ? this.gameState.portal.blue : this.gameState.portal.orange;
  //   $('.cell').removeClass('portal');
  //   this.gameState.portal.isOpen = false;
  // } else {
  //   newHeadPosition = this.changeDirection(this.gameState.head);
  // }
  // console.log(`head: ${head}, next: ${newHeadPosition}`);
  checkNextMove(newHeadPosition);
  snakeCopy.push(newHeadPosition);
  updateSnake(snakeCopy);
  updateBoard(boardCopy);
  updateSnakePosition(snakeCopy);
  if (newTreatCoords) {
    updateShouldDeleteTail(false);
    score += 1;
    updateTreatCoords(newTreatCoords);
    updateScore(score);
    if (score > currentHighScore) {
      updateHighScore(score);
    }
  }
};

export default move;
