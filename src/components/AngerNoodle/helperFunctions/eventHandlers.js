const handleKeyPress = (
  event, direction, updateDirection, gameState
) => {
  switch (event.key) {
    case "ArrowUp": // up
      if (gameState === "active" || gameState === "paused") {
        updateDirection(direction !== "down" ? "up" : "down");
      }
      // if (gameState === "gameOver") {
      //   angerNoodle.startGame()
      // }
      break;
    case "ArrowDown": // down
      if (gameState === "active" || gameState === "paused") {
        updateDirection(direction !== "up" ? "down" : "up");
      }
      // if (gameState === "gameOver") {
      //   angerNoodle.startGame()
      // }
      break;
    case "ArrowLeft": // left
      if (gameState === "active" || gameState === "paused") {
        updateDirection(direction !== "right" ? "left" : "right");
      }
      // if (gameState === "gameOver") {
      //   angerNoodle.startGame()
      // }
      break;

    case "ArrowRight": // right
      if (gameState === "active" || gameState === "paused") {
        updateDirection(direction !== "left" ? "right" : "left");
      }
      // if (gameState === "gameOver") {
      //   angerNoodle.startGame()
      // }
      break;
    default:
      break;
  }
};

export default handleKeyPress;
