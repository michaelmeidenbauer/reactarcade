import { updateBoardData } from "./data";

const handleKeyPress = (
  event, directionRef, gameStateRef, defaultSnake, updateSnake, updateBoard, updateScore
) => {
  const direction = directionRef;
  const gameState = gameStateRef;
  const restartGame = () => {
    gameState.current = 'active';
    direction.current = 'right';
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
        gameState.current = 'active';
      }
      break;
    default:
      break;
  }
};

export default handleKeyPress;
