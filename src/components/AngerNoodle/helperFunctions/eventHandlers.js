const handleKeyPress = (
  event, directionRef, gameState
) => {
  const direction = directionRef;
  switch (event.key) {
    case "ArrowUp": // up
      if (gameState === "active" || gameState === "paused") {
        direction.current = direction.current !== "down" ? "up" : "down";
      }
      // if (gameState === "gameOver") {
      //   angerNoodle.startGame()
      // }
      break;
    case "ArrowDown": // down
      if (gameState === "active" || gameState === "paused") {
        direction.current = direction.current  !== "up" ? "down" : "up";
      }
      // if (gameState === "gameOver") {
      //   angerNoodle.startGame()
      // }
      break;
    case "ArrowLeft": // left
      if (gameState === "active" || gameState === "paused") {
        direction.current = direction.current  !== "right" ? "left" : "right";
      }
      // if (gameState === "gameOver") {
      //   angerNoodle.startGame()
      // }
      break;

    case "ArrowRight": // right
      if (gameState === "active" || gameState === "paused") {
        direction.current = direction.current  !== "left" ? "right" : "left";
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
