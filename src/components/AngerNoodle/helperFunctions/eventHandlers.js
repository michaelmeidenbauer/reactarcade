import { updateBoardData, copySnake, angryMessages } from "./data";

const handleKeyPress = (
  event, directionRef, gameStateRef, defaultSnake, updateSnake, updateBoard, updateScore, snakeRef, updateAngryMessage
) => {
  const direction = directionRef;
  const gameState = gameStateRef;
  const currentSnakeCopy = copySnake(snakeRef.current);
  const restartGame = () => {
    gameState.current = 'active';
    direction.current = 'right';
    updateAngryMessage(angryMessages.setDefault());
    updateScore(0);
    updateBoard(updateBoardData(defaultSnake, direction.current, [10, 5]));
    updateSnake(defaultSnake);
  }
  switch (event.key) {
    case "ArrowUp": // up
      if (gameState.current === "active" || gameState.current === "paused") {
        direction.current = direction.current !== "down" ? "up" : "down";
      }
      if (gameState.current === "gameOver") {
        restartGame();
      }
      break;
    case "ArrowDown": // down
      if (gameState.current === "active" || gameState.current === "paused") {
        direction.current = direction.current  !== "up" ? "down" : "up";
      }
      if (gameState.current === "gameOver") {
        restartGame();
      }
      break;
    case "ArrowLeft": // left
      if (gameState.current === "active" || gameState.current === "paused") {
        direction.current = direction.current  !== "right" ? "left" : "right";
      }
      if (gameState.current === "gameOver") {
        restartGame();
      }
      break;

    case "ArrowRight": // right
      if (gameState.current === "active" || gameState.current === "paused") {
        direction.current = direction.current  !== "left" ? "right" : "left";
      }
      if (gameState.current === "gameOver") {
        restartGame();
      }
      break;
    case " ": // space bar
      if (gameState.current === 'active') {
        gameState.current = 'paused';
      } else if (gameState.current === 'paused') {
        console.log('in elseif');
        gameState.current = 'active';
        updateSnake(currentSnakeCopy);
      } else if (gameState.current === 'gameOver') {
        restartGame();
      }
      break;
    default:
      break;
  }
};

export default handleKeyPress;
