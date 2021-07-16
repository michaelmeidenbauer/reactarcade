export const createDefaultBoard = (gridSize = 15) => {
  const returnArray = [];
  while (returnArray.length < gridSize) {
    const rowItem = [];
    for (let i = 0; i < gridSize; i += 1) {
      rowItem.push({
        classString: 'cell',
      });
    }
    returnArray.push(rowItem);
  }
  return returnArray;
};
export const updateBoardData = (snake, direction) => {
  const boardCopy = createDefaultBoard();
  const snakeCopy = [...snake];
  snakeCopy.forEach((bodySegment) => {
    const [row, column] = bodySegment;
    const currentSegment = boardCopy[row][column];
    currentSegment.classString = `cell segment ${direction}`;
  });
  return boardCopy;
};
export const updateSnakePosition = (snake) => {
  // console.log('updateSnakePosition called');
  const snakeCopy = [...snake];
  const head = snakeCopy[snakeCopy.length - 1];
  const [headY, headX] = head;
  // console.log('head x ', headX, 'heady ', headY);
  if (headX < 14) {
    snakeCopy.splice(0, 1);
    snakeCopy.push([headY, headX + 1]);
  }
  return snakeCopy;
};
