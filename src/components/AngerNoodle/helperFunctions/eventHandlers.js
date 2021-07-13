export const handleKeyPress = (event, gameState, updateGameState, snake, updateSnake, updateSnakePosition) => {
    if (event.key === ' ') {
        if (gameState === "active"){
            updateGameState("paused");
        } else {
            updateGameState("active");
            updateSnake(updateSnakePosition(snake));
        }
        console.log('space press here! ');
    }
}