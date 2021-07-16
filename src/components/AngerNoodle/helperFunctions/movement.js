const changeDirection = (headPosition, direction) => {
  const [headX, headY] = headPosition;
  let newHeadPosition;
  const boundary = 15;
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
export default changeDirection;

//   export const move = (shouldDeleteTail, ) => {
//     if (shouldDeleteTail) {
//       this.removeTail();
//     } else {
//       shouldDeleteTail = true;
//     }
//     let newHeadPosition;
//     const [headPositionY, headPositionX] = [snake.length - 1];
//     const headCell = board[headPositionY][headPositionX];
//     if (headCell.hasClass('portal')){
//       //get the coords of the other portal and feed them into changeDirection
//       newHeadPosition = headCell.hasClass('orange') ? this.gameState.portal.blue : this.gameState.portal.orange;
//       $('.cell').removeClass('portal');
//       this.gameState.portal.isOpen = false;
//     } else {
//       newHeadPosition = this.changeDirection(this.gameState.head);
//     }
//     // console.log(`head: ${head}, next: ${newHeadPosition}`);
//     this.checkNextMove(newHeadPosition);
//     this.gameState.snake.push(newHeadPosition);
//     this.gameState.head = newHeadPosition;
//     this.renderSnake();
//   }
