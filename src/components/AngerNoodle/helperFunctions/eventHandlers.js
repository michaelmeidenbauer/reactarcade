import { updateBoardData } from "./data";

const handleKeyPress = (
  event, directionRef, gameStateRef, defaultSnake, updateSnake, updateBoard
) => {
  const direction = directionRef;
  const gameState = gameStateRef;
  const restartGame = () => {
    gameState.current = 'active';
    direction.current = 'right';
    const newBoard = updateBoardData(defaultSnake, direction.current, [10, 5]);
    updateBoard(newBoard);
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
    default:
      break;
  }
};

export default handleKeyPress;
