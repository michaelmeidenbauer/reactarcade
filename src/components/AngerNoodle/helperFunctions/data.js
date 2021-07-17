export const makeTreatLocation = (board) => {
  const boardCopy = [...board];
  const getRandomBoardIndex = () => Math.floor(Math.random() * board.length);
  let randomRowIndex = getRandomBoardIndex();
  let randomCellIndex = getRandomBoardIndex();
  let randomCell = boardCopy[randomRowIndex][randomCellIndex];
  while (randomCell.classString !== 'cell'){
    randomRowIndex = getRandomBoardIndex();
    randomCellIndex = getRandomBoardIndex();
    randomCell = boardCopy[randomRowIndex][randomCellIndex];
  }
  console.log(randomCell);
  return [randomRowIndex, randomCellIndex];
};
export const createDefaultBoard = (treatCoords) => {
  const gridSize = 15;
  const [treatRow, treatCell] = treatCoords;
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
  returnArray[treatRow][treatCell].classString = 'cell treat';
  return returnArray;
};
export const updateBoardData = (snake, direction, treatCoords) => {
  const boardCopy = createDefaultBoard(treatCoords);
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

export const getCoords = (targetClass, board) => {
  let returnCoords = null;
  [...board].forEach((row, index) => {
    const rowIndex = index;
    row.forEach((cell, cellIndex) => {
      if (cell.classString.indcludes(targetClass)) {
        returnCoords = [rowIndex, cellIndex];
      }
    })
  })
  return returnCoords;
}

